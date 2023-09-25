import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./about-us.css";

const AboutUs = () => {
  return (
    <>
      <Header idx={3} />
      <div className="about-us">
        <div className="dev-team">
          <h3 className="section-title">Development Team</h3>
          <div className="dteam container">
            <div className="dt-box">
              <div className="data">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/avatar_ynalko.png"
                  alt="Avatar"
                />
                <div className="socials">
                  <Link
                    to="https://www.linkedin.com/in/mahmoud-abdelrady-47bbb9219/"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h3>Mahmoud Abdelrady</h3>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="dt-box">
              <div className="data">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/avatar_ynalko.png"
                  alt="Avatar"
                />
                <div className="socials">
                  <Link
                    to="https://www.linkedin.com/in/assem-ihab-5b8b57230"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h3>Assem Ihab</h3>
                <p>Data Scientist</p>
              </div>
            </div>
            <div className="dt-box">
              <div className="data">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/g-avatar_wcapfp.jpg"
                  alt="Avatar"
                />
                <div className="socials">
                  <Link
                    to="https://www.linkedin.com/in/asma%C3%A0-mahmoud-059516227"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h3>Asmaa Mahmoud</h3>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="dt-box">
              <div className="data">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/g-avatar_wcapfp.jpg"
                  alt="Avatar"
                />
                <div className="socials">
                  <Link
                    to="https://www.linkedin.com/in/nour-hamdy-a33990228"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h3>Nour Hamdy</h3>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="dt-box">
              <div className="data">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/g-avatar_wcapfp.jpg"
                  alt="Avatar"
                />
                <div className="socials">
                  <Link
                    to="https://www.linkedin.com/in/sama-aboelala-7917081b9"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h3>Sama Hussien</h3>
                <p>Software Engineer</p>
              </div>
            </div>
            <div className="dt-box">
              <div className="data">
                <img
                  src="https://res.cloudinary.com/dem8fwqbk/image/upload/v1693037701/g-avatar_wcapfp.jpg"
                  alt="Avatar"
                />
                <div className="socials">
                  <Link
                    to="https://www.linkedin.com/in/sohaila-abd-el-nasser-8971b7244"
                    target="_blank"
                    className="linkedin"
                  >
                    <i className="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
              <div className="info">
                <h3>Sohaila Abdelnasser</h3>
                <p>Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
