import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = ({ idx }) => {
  return (
    <div className="sidebar">
      <div className="nsbh">
        <img
          src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037702/satellite_unvfd4.png"
          alt="Logo"
        />
        <h3>Shoreline Extraction SP</h3>
      </div>
      <ul className="links">
        <li>
          <Link
            className={`sb-link ${idx === 0 ? "active" : ""}`}
            to="/download-imagery"
          >
            <i className="bi bi-box-arrow-down sb-icn"></i>
            <span>Download Imagery</span>
          </Link>
        </li>
        <li>
          <Link className={`sb-link ${idx === 1 ? "active" : ""}`} to="/">
            <i className="bi bi-images sb-icn"></i>
            <span>Preprocess Images</span>
          </Link>
        </li>
        <li>
          <Link
            className={`sb-link ${idx === 2 ? "active" : ""}`}
            to="/shoreline-extraction"
          >
            <i className="bi bi-bezier2 sb-icn"></i>
            <span>Shoreline Extraction</span>
          </Link>
        </li>
        <li>
          <Link
            className={`sb-link ${idx === 3 ? "active" : ""}`}
            to="/make-transects"
          >
            <i className="bi bi-alt sb-icn"></i>
            <span>Make Transects</span>
          </Link>
        </li>
        <li>
          <Link
            className={`sb-link ${idx === 4 ? "active" : ""}`}
            to="/make-timeseries"
          >
            <i className="bi bi-calendar4-range sb-icn"></i>
            <span>Make Timeseries</span>
          </Link>
        </li>
        <li>
          <Link
            className={`sb-link ${idx === 5 ? "active" : ""}`}
            to="/get-lts"
          >
            <i className="bi bi-filetype-sh sb-icn"></i>
            <span>Get Linear Trend Shapefile</span>
          </Link>
        </li>
        <li>
          <Link
            className={`sb-link ${idx === 6 ? "active" : ""}`}
            to="/project-timeseries"
          >
            <i className="bi bi-hourglass sb-icn"></i>
            <span>Project Timeseries</span>
          </Link>
        </li>
        <li>
          <Link
            className={`sb-link ${idx === 7 ? "active" : ""}`}
            to="/merge-projections"
          >
            <i className="bi bi-intersect sb-icn"></i>
            <span>Merge Projections</span>
          </Link>
        </li>
        <li>
          <Link className={`sb-link ${idx === 8 ? "active" : ""}`} to="/rexm">
            <i className="bi bi-arrow-clockwise sb-icn"></i>
            <span>Retraining Extraction Model</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
