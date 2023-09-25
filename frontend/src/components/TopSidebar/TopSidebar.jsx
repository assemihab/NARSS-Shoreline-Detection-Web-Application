import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./topsidebar.css";

const TopSidebar = ({ idx }) => {
  const topContainerRef = useRef(null);
  const handleWheelScroll = (event) => {
    event.preventDefault();
    const container = topContainerRef.current;
    if (container) {
      container.scrollLeft += event.deltaY;
    }
  };
  useEffect(() => {
    const container = topContainerRef.current;
    const selectedTab = document.querySelector(".icn-box.active");
    if (container && selectedTab) {
      const selectedTabOffsetLeft = selectedTab.offsetLeft;
      container.scrollLeft = selectedTabOffsetLeft;
    }
  }, []);
  return (
    <div
      className="top-sidebar"
      onWheel={handleWheelScroll}
      ref={topContainerRef}
    >
      <Link
        to="/download-imagery"
        className={`icn-box ${!idx ? "active" : ""}`}
      >
        <i className="bi bi-box-arrow-down sb-icn"></i>
        <span className="btitle">Download Imagery</span>
      </Link>
      <Link className={`icn-box ${idx === 1 ? "active" : ""}`}>
        <i className="bi bi-images sb-icn"></i>
        <span className="btitle">Preprocess Images</span>
      </Link>
      <Link
        to="/shoreline-extraction"
        className={`icn-box ${idx === 2 ? "active" : ""}`}
      >
        <i className="bi bi-bezier2 sb-icn"></i>
        <span className="btitle">Shoreline Extraction</span>
      </Link>
      <Link
        to="/make-transects"
        className={`icn-box ${idx === 3 ? "active" : ""}`}
      >
        <i className="bi bi-alt sb-icn"></i>
        <span className="btitle">Make Transects</span>
      </Link>
      <Link
        to="/make-timeseries"
        className={`icn-box ${idx === 4 ? "active" : ""}`}
      >
        <i className="bi bi-calendar4-range sb-icn"></i>
        <span className="btitle">Make Timeseries</span>
      </Link>
      <Link to="/get-lts" className={`icn-box ${idx === 5 ? "active" : ""}`}>
        <i className="bi bi-filetype-sh sb-icn"></i>
        <span className="btitle">Get Linear Trend Shapefile</span>
      </Link>
      <Link
        to="/project-timeseries"
        className={`icn-box ${idx === 6 ? "active" : ""}`}
      >
        <i className="bi bi-hourglass sb-icn"></i>
        <span className="btitle">Project Timeseries</span>
      </Link>
      <Link
        to="/merge-projections"
        className={`icn-box ${idx === 7 ? "active" : ""}`}
      >
        <i className="bi bi-intersect sb-icn"></i>
        <span className="btitle">Merge Projections</span>
      </Link>
      <Link to="/rexm" className={`icn-box ${idx === 8 ? "active" : ""}`}>
        <i className="bi bi-arrow-clockwise sb-icn"></i>
        <span className="btitle">Retraining Extraction Model</span>
      </Link>
    </div>
  );
};

export default TopSidebar;
