import { Link } from "react-router-dom";
import "./submitbutton.css";

const SubmitButton = ({ title, icon }) => {
  return (
    <div className="submit-btn">
      <button className="sub-btn" type="submit">
        <i className={icon}></i>
        <span>{title}</span>
      </button>
      <Link to="/" className="home-btn">
        <i className="bi bi-house-fill"></i>
        <span>Return to Home</span>
      </Link>
    </div>
  );
};

export default SubmitButton;
