import { Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <span className="cpr">Copyrights &copy;2023 All rights reserved</span>
      <Link className="narss" to="http://www.narss.sci.eg/" target="_blank">
        NARSS
      </Link>
      <Link
        className="github"
        to="https://github.com/mlundine/Shoreline_Extraction_GAN"
        target="_blank"
      >
        <i className="bi bi-github g-icn me-2"></i>
        <span>Shoreline GAN</span>
      </Link>
    </div>
  );
};

export default Footer;
