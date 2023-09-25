import GoogleMap from "../../components/Google-Map/GoogleMap";
import "./downloadimagery.css";
import TopSidebar from "../../components/TopSidebar/TopSidebar";
import InputField from "../../components/InputField/InputField";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Header from "../../components/Header/Header";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { downloadImagery } from "../../redux/apiCalls/dImgAPI";
import { Link } from "react-router-dom";

const DownloadImagery = () => {
  const dispatch = useDispatch();
  const [bgDate, setBgDate] = useState("");
  const [enDate, setEnDate] = useState("");
  const [lngTL, setLngTL] = useState(null);
  const [lngTR, setLngTR] = useState(null);
  const [lngBL, setLngBL] = useState(null);
  const [lngBR, setLngBR] = useState(null);
  const [latTL, setLatTL] = useState(null);
  const [latTR, setLatTR] = useState(null);
  const [latBL, setLatBL] = useState(null);
  const [latBR, setLatBR] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imgsList, setImgsList] = useState([]);
  const [popUp, setPopUp] = useState(false);
  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const coords = [
      [parseFloat(lngTR), parseFloat(latTR)],
      [parseFloat(lngTL), parseFloat(latTL)],
      [parseFloat(lngBR), parseFloat(latBR)],
      [parseFloat(lngBL), parseFloat(latBL)],
      [parseFloat(lngTR), parseFloat(latTR)],
    ];
    dispatch(downloadImagery(bgDate, enDate, coords)).then((res) => {
      setImgsList(res.data);
      setIsLoading(false);
      setPopUp(true);
    });
  };
  return (
    <>
      <Header />
      <div className="download-imagery">
        <div className={`di-overlay ${popUp}`}></div>
        <div className={`di-popup ${popUp}`}>
          <div className="cls-btn-div">
            <div className="cls-btn" onClick={() => setPopUp(false)}>
              X
            </div>
          </div>
          <div className="imgs-box">
            {imgsList.map((img, idx) => (
              <div className="img-box">
                <h4>Image {idx + 1}</h4>
                <div className="ib">
                  <span>RGB</span>
                  <Link to={img.RGB} target="_blank">
                    Download
                  </Link>
                </div>
                <div className="ib">
                  <span>SWIR</span>
                  <Link to={img.SWIR} target="_blank">
                    Download
                  </Link>
                </div>
                <div className="ib">
                  <span>QAband</span>
                  <Link to={img.QAband} target="_blank">
                    Download
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="di-info">
          <TopSidebar />
          <form className="items" onSubmit={formSubmitHandler}>
            <InputField
              title={"Beginning Date:"}
              id={"bd"}
              type={"date"}
              value={bgDate}
              onCh={(e) => setBgDate(e.target.value)}
            />
            <InputField
              title={"End Date:"}
              id={"ed"}
              type={"date"}
              value={enDate}
              onCh={(e) => setEnDate(e.target.value)}
            />
            <InputField title={"Name:"} id={"name"} type={"text"} />
            <InputField
              title={"Shapefile:"}
              id={"shp"}
              type={"file"}
              classes={"f-ip"}
            />
            <InputField
              title={"Shapefile Start Index:"}
              id={"si"}
              type={"number"}
            />
            <InputField
              title={"Shapefile End Index:"}
              id={"se"}
              type={"number"}
            />
            <div className="cds">
              <h3>Longitudes</h3>
              <div className="c-wrapper">
                <div className="c-box">
                  <label htmlFor="loul">Upper Left Coord:</label>
                  <input
                    type="text"
                    id="loul"
                    value={lngTL}
                    onChange={(e) => setLngTL(e.target.value)}
                  />
                </div>
                <div className="c-box">
                  <label htmlFor="lour">Upper Right Coord:</label>
                  <input
                    type="text"
                    id="lour"
                    value={lngTR}
                    onChange={(e) => setLngTR(e.target.value)}
                  />
                </div>
                <div className="c-box">
                  <label htmlFor="loll">Lower Left Coord:</label>
                  <input
                    type="text"
                    id="loll"
                    value={lngBL}
                    onChange={(e) => setLngBL(e.target.value)}
                  />
                </div>
                <div className="c-box">
                  <label htmlFor="lolr">Lower Right Coord:</label>
                  <input
                    type="text"
                    id="lolr"
                    value={lngBR}
                    onChange={(e) => setLngBR(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="cds">
              <h3>Latitudes</h3>
              <div className="c-wrapper">
                <div className="c-box">
                  <label htmlFor="laul">Upper Left Coord:</label>
                  <input
                    type="text"
                    id="laul"
                    value={latTL}
                    onChange={(e) => setLatTL(e.target.value)}
                  />
                </div>
                <div className="c-box">
                  <label htmlFor="laur">Upper Right Coord:</label>
                  <input
                    type="text"
                    id="laur"
                    value={latTR}
                    onChange={(e) => setLatTR(e.target.value)}
                  />
                </div>
                <div className="c-box">
                  <label htmlFor="lall">Lower Left Coord:</label>
                  <input
                    type="text"
                    id="lall"
                    value={latBL}
                    onChange={(e) => setLatBL(e.target.value)}
                  />
                </div>
                <div className="c-box">
                  <label htmlFor="lalr">Lower Right Coord:</label>
                  <input
                    type="text"
                    id="lalr"
                    value={latBR}
                    onChange={(e) => setLatBR(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="sats">
              <input type="checkbox" name="ss" id="s2" />
              <label htmlFor="s2" className="sat">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037704/sentinel2_eftpah.png"
                  alt="Sentinel2"
                />
                <span className="sat-title">Sentinel 2</span>
              </label>
              <input type="checkbox" name="ss" id="l5" />
              <label htmlFor="l5" className="sat">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037700/landsat5_nwztkf.png"
                  alt="Landsat5"
                />
                <span className="sat-title">Landsat 5</span>
              </label>
              <input type="checkbox" name="ss" id="l7" />
              <label htmlFor="l7" className="sat">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/landsat7_l9t76d.png"
                  alt="Landsat7"
                />
                <span className="sat-title">Landsat 7</span>
              </label>
              <input type="checkbox" name="ss" id="l8" />
              <label htmlFor="l8" className="sat">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/landsat8_hmceat.png"
                  alt="Landsat8"
                />
                <span className="sat-title">Landsat 8</span>
              </label>
            </div>
            <SubmitButton
              title={isLoading ? "Downloading..." : "Start Download"}
              icon={"bi bi-download"}
            />
          </form>
        </div>
        <GoogleMap />
      </div>
    </>
  );
};

export default DownloadImagery;
