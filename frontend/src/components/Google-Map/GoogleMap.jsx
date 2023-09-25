import { useState, useEffect, useRef } from "react";
import "./googlemap.css";
const GoogleMap = () => {
  const mapRef = useRef(null);
  const drawingManagerRef = useRef(null);
  const [hasDrawings, setHasDrawings] = useState(false);
  const [shapes, setShapes] = useState([]);
  const [shapeData, setShapeData] = useState([]);
  const [selectedShapeArea, setSelectedShapeArea] = useState(0);
  const [areaBox, setAreaBox] = useState(false);
  const [shapesBox, setShapesBox] = useState(false);

  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      return new Promise((resolve) => {
        if (window.google && window.google.maps) {
          resolve();
        } else {
          const script = document.createElement("script");
          script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDxcedr1zrD8h225vpj3hNseos5mHGEDVY&libraries=drawing`;
          script.onload = resolve;
          document.body.appendChild(script);
        }
      });
    };

    loadGoogleMapsAPI().then(() => {
      const mapOptions = {
        center: { lat: 26, lng: 30 },
        zoom: 6,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        zoomControl: false,
        fullscreenControl: false,
        mapTypeControl: false,
      };
      const map = new window.google.maps.Map(mapRef.current, mapOptions);
      mapRef.current = map;
      drawingManagerRef.current = new window.google.maps.drawing.DrawingManager(
        {
          drawingMode: null,
          drawingControl: false,
        }
      );
      drawingManagerRef.current.setMap(map);
      window.google.maps.event.addListener(
        drawingManagerRef.current,
        "overlaycomplete",
        (event) => {
          const newShape = event.overlay;
          setShapes((prevShapes) => [...prevShapes, newShape]);
          setHasDrawings(true);
          let shapeArea = 0;
          if (newShape instanceof window.google.maps.Circle) {
            const radiusInMeters = newShape.getRadius();
            shapeArea = (Math.PI * radiusInMeters ** 2) / 1000000;
          } else if (newShape instanceof window.google.maps.Polygon) {
            shapeArea =
              window.google.maps.geometry.spherical.computeArea(
                newShape.getPath()
              ) / 1000000;
          } else if (newShape instanceof window.google.maps.Rectangle) {
            const bounds = newShape.getBounds();
            const ne = bounds.getNorthEast();
            const sw = bounds.getSouthWest();
            const widthInMeters =
              window.google.maps.geometry.spherical.computeDistanceBetween(
                ne,
                new window.google.maps.LatLng(ne.lat(), sw.lng())
              );
            const heightInMeters =
              window.google.maps.geometry.spherical.computeDistanceBetween(
                ne,
                new window.google.maps.LatLng(sw.lat(), ne.lng())
              );
            // Convert meters to square kilometers
            shapeArea = (widthInMeters * heightInMeters) / 1000000;
          }
          setSelectedShapeArea(shapeArea.toFixed(2));
          const newShapeData = {
            shape: newShape,
            area: shapeArea.toFixed(2),
            name: `Shape ${shapes.length + 1}`,
          };
          setShapeData((prevShapeData) => [...prevShapeData, newShapeData]);
          window.google.maps.event.addListener(newShape, "click", () => {
            setAreaBox(true);
            setSelectedShapeArea(shapeArea.toFixed(2));
          });
        }
      );
    });
  }, [shapes.length]);
  // Delete all drawings
  const deleteDrawings = () => {
    shapes.forEach((shape) => {
      shape.setMap(null);
      window.google.maps.event.clearListeners(shape, "click");
    });

    drawingManagerRef.current.setDrawingMode(null);
    setShapes([]);
    setShapeData([]);
    setSelectedShapeArea(0);
    setHasDrawings(false);
  };
  // Edit Shape Name
  const handleEditShapeName = (index) => {
    const newName = prompt("Enter new shape name:");
    if (newName !== null) {
      const updatedShapeData = [...shapeData];
      updatedShapeData[index].name = newName;
      setShapeData(updatedShapeData);
    }
  };
  // Delete certain shape
  const deleteShape = (index) => {
    const shapeToDelete = shapeData[index].shape;
    shapeToDelete.setMap(null);
    window.google.maps.event.clearListeners(shapeToDelete, "click");
    selectedShapeArea === shapeData[index].area
      ? setSelectedShapeArea(0)
      : setSelectedShapeArea(selectedShapeArea);
    const updatedShapeData = shapeData.filter((_, i) => i !== index);
    setShapeData(updatedShapeData);
    updatedShapeData.length === 0 &&
      setHasDrawings(false) &&
      setShapesBox(false);
  };
  // Variables
  const [themes, setThemes] = useState(false);
  const [activeTheme, setActiveTheme] = useState("map");
  const [select, setSelect] = useState(false);
  const [activeSelect, setActiveSelect] = useState("hand");
  const [search, setSearch] = useState(false);
  const [coord, setCoord] = useState({ latitude: null, longitude: null });
  const [showTerrain, setShowTerrain] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  // Set Map Theme
  const setMapTheme = () => {
    const map = mapRef.current;
    if (map) {
      const currentMapTypeId = showTerrain
        ? window.google.maps.MapTypeId.TERRAIN
        : window.google.maps.MapTypeId.ROADMAP;
      map.setMapTypeId(currentMapTypeId);
    }
  };
  // Set Satellite Theme
  const setSatTheme = () => {
    const map = mapRef.current;
    if (map) {
      const currentMapTypeId = showLabels
        ? window.google.maps.MapTypeId.HYBRID
        : window.google.maps.MapTypeId.SATELLITE;
      map.setMapTypeId(currentMapTypeId);
    }
  };

  // Get Area
  const handleMeasureClick = () => {
    if (
      drawingManagerRef.current.getDrawingMode() ===
      window.google.maps.drawing.OverlayType.POLYGON
    ) {
      drawingManagerRef.current.setDrawingMode(null);
    } else {
      drawingManagerRef.current.setDrawingMode(
        window.google.maps.drawing.OverlayType.POLYGON
      );
      const overlayCompleteListener = window.google.maps.event.addListener(
        drawingManagerRef.current,
        "overlaycomplete",
        (event) => {
          const shape = event.overlay;
          const calculatedArea =
            window.google.maps.geometry.spherical.computeArea(shape.getPath());
          const newArea = (calculatedArea / 1000000).toFixed(2);
          drawingManagerRef.current.setDrawingMode(null);
          setSelectedShapeArea(newArea);
          window.google.maps.event.removeListener(overlayCompleteListener);
        }
      );
    }
  };
  // Zoom
  const handleZoomIn = () => {
    const map = mapRef.current;
    if (map) {
      const currentZoom = map.getZoom();
      console.log(currentZoom);
      const newZoom = currentZoom + 1;
      map.setZoom(newZoom);
    }
  };
  const handleZoomOut = () => {
    const map = mapRef.current;
    if (map) {
      const currentZoom = map.getZoom();
      console.log(currentZoom);
      const newZoom = currentZoom - 1;
      map.setZoom(newZoom);
    }
  };
  // Custom Select Buttons
  const handleHandDraw = () => {
    if (drawingManagerRef.current) {
      drawingManagerRef.current.setDrawingMode(null);
    }
  };
  const handleCircleDraw = () => {
    drawingManagerRef.current.setDrawingMode(
      window.google.maps.drawing.OverlayType.CIRCLE
    );
  };
  const handlePolygonDraw = () => {
    drawingManagerRef.current.setDrawingMode(
      window.google.maps.drawing.OverlayType.POLYGON
    );
  };
  const handleRectangleDraw = () => {
    drawingManagerRef.current.setDrawingMode(
      window.google.maps.drawing.OverlayType.RECTANGLE
    );
  };
  const handleMarkerDraw = () => {
    drawingManagerRef.current.setDrawingMode(
      window.google.maps.drawing.OverlayType.MARKER
    );
  };
  // Search
  const handleSearch = () => {
    const location = new window.google.maps.LatLng(
      !coord.latitude ? 26 : coord.latitude,
      !coord.longitude ? 30 : coord.longitude
    );
    const map = mapRef.current;
    if (map) {
      map.setCenter(location);
      map.setZoom(6);
    }
  };
  return (
    <div className="google-map">
      <div className="left-btns">
        <button
          title="Search with LatLng"
          onClick={() => {
            setSearch((prev) => !prev);
            setThemes(false);
            setSelect(false);
            setActiveSelect("hand");
          }}
          className="lb-btn"
        >
          <i className="bi bi-search"></i>
        </button>
        <button
          title="Show all drawn shapes"
          onClick={() => setShapesBox((prev) => !prev)}
          className={`lb-btn ${hasDrawings}`}
        >
          <i className="bi bi-circle-square"></i>
        </button>
      </div>
      <div className={`search-box ${search}`}>
        <input
          type="number"
          value={coord.latitude}
          onChange={(e) =>
            setCoord((prev) => ({ ...prev, latitude: e.target.value }))
          }
          placeholder="26"
        />
        <input
          type="number"
          value={coord.longitude}
          onChange={(e) =>
            setCoord((prev) => ({ ...prev, longitude: e.target.value }))
          }
          placeholder="30"
        />
        <button onClick={handleSearch} className="go-btn">
          GO
        </button>
      </div>
      <div className="map-buttons">
        <button
          onClick={() => {
            setThemes((prev) => !prev);
            setSelect(false);
          }}
          title="Choose Map Theme"
          className="map-btn"
        >
          <i className="bi bi-palette"></i>
        </button>
        <div className={`themes ${themes}`}>
          <div className="img-container">
            <span className="title">Map</span>
            <img
              src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037702/mapTheme_f86wqh.png"
              alt="MapTheme"
              className={`map-theme ${activeTheme === "map" ? "active" : ""}`}
              onClick={() => {
                setMapTheme();
                setActiveTheme("map");
              }}
            />
            <div className="chkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="terrain"
                onClick={() => {
                  setShowTerrain((prev) => !prev);
                  console.log("Inside Click Function:", showTerrain);
                  setMapTheme();
                }}
              />
              <label htmlFor="terrain">Terrain</label>
            </div>
          </div>
          <div className="img-container">
            <span className="title">Satellite</span>
            <img
              src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037703/satTheme_dvdkbt.png"
              alt="SatTheme"
              className={`sat-theme ${activeTheme === "sat" ? "active" : ""}`}
              onClick={() => {
                setSatTheme();
                setActiveTheme("sat");
              }}
            />
            <div className="chkbox">
              <input
                type="checkbox"
                className="form-check-input"
                id="lab"
                onClick={() => {
                  setShowLabels((prev) => !prev);
                  setSatTheme();
                }}
                defaultChecked
              />
              <label htmlFor="lab">Labels</label>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setSelect((prev) => !prev);
            setThemes(false);
          }}
          title="Select Area"
          className="map-btn"
        >
          <i className="bi bi-bounding-box-circles"></i>
        </button>
        <div className={`select-btns ${select}`}>
          <button
            onClick={() => {
              handleHandDraw();
              setSelect(false);
            }}
            className={`map-btn ${activeSelect === "hand" ? "active" : ""}`}
          >
            <i className="bi bi-mouse2"></i>
          </button>
          <button
            onClick={() => {
              handleCircleDraw();
              setSelect(false);
              setActiveSelect("circle");
            }}
            className={`map-btn ${activeSelect === "circle" ? "active" : ""}`}
          >
            <i className="bi bi-circle"></i>
          </button>
          <button
            onClick={() => {
              handlePolygonDraw();
              setSelect(false);
              setActiveSelect("poly");
            }}
            className={`map-btn ${activeSelect === "poly" ? "active" : ""}`}
          >
            <i className="bi bi-pentagon"></i>
          </button>
          <button
            onClick={() => {
              handleRectangleDraw();
              setSelect(false);
              setActiveSelect("rect");
            }}
            className={`map-btn ${activeSelect === "rect" ? "active" : ""}`}
          >
            <i className="bi bi-square"></i>
          </button>
          <button
            onClick={() => {
              handleMarkerDraw();
              setSelect(false);
              setActiveSelect("mark");
            }}
            className={`map-btn ${activeSelect === "mark" ? "active" : ""}`}
          >
            <i className="bi bi-geo-alt-fill"></i>
          </button>
        </div>
        <button
          title="Create an area of Interest"
          onClick={() => {
            handleMeasureClick();
            setSelect(false);
            setThemes(false);
            setAreaBox(true);
          }}
          className="map-btn"
        >
          <i className="bi bi-pencil-fill"></i>
        </button>
        {hasDrawings && (
          <button
            title="Erase all drawn shapes"
            onClick={deleteDrawings}
            className="map-btn"
          >
            <i className="bi bi-eraser"></i>
          </button>
        )}
        <div className="zoom">
          <i
            onClick={handleZoomIn}
            title="Zoom In"
            className="bi bi-plus z-btn zoom-in-btn"
          ></i>
          <i
            onClick={handleZoomOut}
            title="Zoom Out"
            className="bi bi-dash z-btn zoom-out-btn"
          ></i>
        </div>
      </div>
      <div className={`area-box ${areaBox}`}>
        <i
          onClick={() => {
            setAreaBox(false);
            setSelectedShapeArea(0);
          }}
          className="bi bi-x-circle-fill"
        ></i>
        <span className="ab-title">Calculated Area:</span>
        <span className="area">{selectedShapeArea} KM</span>
      </div>
      {hasDrawings && (
        <div className={`shape-list ${shapesBox}`}>
          {shapeData.map((shape, index) => (
            <div key={index} className="shape-item">
              <span className="shape-name">{shape.name}</span>
              <span className="shape-area">{shape.area} KM</span>
              <div className="action-btns">
                <button
                  className="edit-btn"
                  onClick={() => handleEditShapeName(index)}
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteShape(index)}
                >
                  <i className="bi bi-trash-fill"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div ref={mapRef} className="map"></div>
    </div>
  );
};

export default GoogleMap;
