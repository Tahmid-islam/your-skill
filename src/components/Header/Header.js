import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" sticky="top" className="border-bottom navbar">
      <Container>
        <NavLink to="/" className="Nav-logo fs-2 text-white">
          YourSkill{" "}
          <img
            style={{ width: "40px", height: "40px" }}
            src="https://www.pngfind.com/pngs/m/314-3147432_skills-vector-icon-hd-png-download.png"
            alt=""
          />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="Nav-link fs-5 p-2 text-white" to="/home">
              Home
            </NavLink>
            <NavLink className="Nav-link fs-5 p-2  text-white" to="/about">
              About Us
            </NavLink>
            <NavLink className="Nav-link fs-5 p-2 text-white" to="/courses">
              Our Courses
            </NavLink>
            <NavLink
              className="Nav-link fs-5 text-white fw-bold  p-2 rounded"
              to="/login"
            >
              Log In
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
