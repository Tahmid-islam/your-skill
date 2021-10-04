import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-5 pb-2 container-fluid">
      <div className="row g-4">
        <div className=" col-12 col-lg-9">
          <div className="row">
            <div className="col-md-7">
              <h1>About Us</h1>
              <p className="about-text px-3">
                YourSkill is Bangladesh’s leading educational platform for
                superior online courses, professional training and corporate
                eLearning services that help you develop useful skills and
                accomplish more in life. Our online courses and career-track
                programs are designed in collaboration with the best of industry
                experts and organizations in Bangladesh.
              </p>
            </div>
            <div className="col-md-5 px-4">
              <div className="row g-4">
                <div className="col-md-6 explore">
                  <h5 className="fw-bold">Explore</h5>
                  <NavLink className="nav" to="/">
                    Home
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/about">
                    About Us
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/">
                    Contact Us
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/courses">
                    Courses
                  </NavLink>
                </div>

                <div className="col-md-6 legal">
                  <h5 className="fw-bold">Legal</h5>
                  <NavLink className="nav" to="/">
                    Terms & Condition
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/">
                    Privacy policy
                  </NavLink>
                  <br />
                  <NavLink className="nav" to="/">
                    Return policy
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-3 g-4">
          <h5 className="text-center fw-bold">Connect With Us</h5>
          <div className="footer-icons">
            <NavLink to="/">
              <i className="fab fa-facebook fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-twitter fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-linkedin fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-instagram fs-1 text-white px-2"></i>
            </NavLink>
            <NavLink to="/">
              <i className="fab fa-github fs-1 text-white px-2"></i>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="text-center pt-4">
        <p className="py-2 fs-5">
          Copyright &copy; {new Date().getFullYear()} YourSkill
        </p>
      </div>
    </footer>
  );
};

export default Footer;
