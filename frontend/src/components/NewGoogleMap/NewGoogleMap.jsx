import {
  GoogleMap,
  useJsApiLoader,
  DrawingManager,
} from "@react-google-maps/api";
import { useCallback, useState, useEffect } from "react";
import "./newgooglemap.css";

const containerStyle = {
  width: "100%",
  height: "calc(100vh - 150px)",
};

const center = {
  lat: 26,
  lng: 30,
};

const NewGoogleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDxcedr1zrD8h225vpj3hNseos5mHGEDVY",
    libraries: ["drawing"],
  });

  const [map, setMap] = useState(null);
  const [mapType, setMapType] = useState("roadmap");
  const [showTerrain, setShowTerrain] = useState(false);
  const [showLabels, setShowLabels] = useState(true);
  const [drawingManager, setDrawingManager] = useState(null);
  const [clickedShape, setClickedShape] = useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  useEffect(() => {
    if (map) {
      if (mapType === "roadmap") {
        map.setOptions({
          styles: showTerrain
            ? [
                {
                  featureType: "landscape",
                  elementType: "geometry",
                  stylers: [{ visibility: "on" }],
                },
              ]
            : [],
        });
      } else if (mapType === "satellite") {
        const mapTypes = map.getMapTypes();
        const satelliteMapType = mapTypes.find(
          (mapType) => mapType && mapType.mapTypeId === "satellite"
        );
        if (satelliteMapType) {
          satelliteMapType.set("labels", showLabels ? null : "hide");
        }
      }
    }
  }, [map, mapType, showTerrain, showLabels]);

  const toggleMapType = () => {
    const newMapType = mapType === "roadmap" ? "satellite" : "roadmap";
    setMapType(newMapType);
  };

  const toggleTerrain = () => {
    setShowTerrain(!showTerrain);
  };

  const toggleLabels = () => {
    setShowLabels(!showLabels);
  };

  const onDrawingManagerLoad = (drawingManager) => {
    setDrawingManager(drawingManager);
  };

  const onShapeComplete = (shape) => {
    shape.addListener("click", () => {
      calculateArea(shape);
    });
  };

  const calculateArea = (shape) => {
    const geometry = shape.getPath();
    const area = window.google.maps.geometry.spherical.computeArea(geometry);
    const areaInKm = (area / 1000000).toFixed(2); // Convert area to square kilometers
    alert(`Area: ${areaInKm} km²`);
    setClickedShape(shape);
  };

  const clearClickedShape = () => {
    setClickedShape(null);
  };

  return isLoaded ? (
    <div className="new-google-map">
      <button className="toggle" onClick={toggleMapType}>
        Toggle Map Type
      </button>
      <div className="new-map">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={6}
          mapTypeId={mapType}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <DrawingManager
            drawingMode={window.google.maps.drawing.OverlayType.POLYGON}
            onPolygonComplete={onShapeComplete}
            options={{
              drawingControl: true,
              drawingControlOptions: {
                position: window.google.maps.ControlPosition.BOTTOM_LEFT,
                drawingModes: [window.google.maps.drawing.OverlayType.POLYGON],
              },
              polygonOptions: {
                clickable: true,
              },
            }}
            onLoad={onDrawingManagerLoad}
          />
          {clickedShape && (
            <button className="clear-btn" onClick={clearClickedShape}>
              Clear Shape
            </button>
          )}
        </GoogleMap>
      </div>
    </div>
  ) : (
    <div>Loading...</div>
  );
};

export default NewGoogleMap;
