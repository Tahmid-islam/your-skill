import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import NewsLetter from "../NewsLetter/NewsLetter";
import Blog from "../Blog/Blog";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch("./popularCourses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleCourses = () => {
    history.push("/courses");
  };
  const handleSignUp = () => {
    history.push("/login");
  };

  return (
    <div>
      {/* first section */}
      <section className="text-center py-5 shadow-sm bg-color-1">
        <h5 className="fs-3 fw-bold pt-5">EXPERT INSTRUCTION</h5>

        <h1 className="text-danger py-2 custom-text">
          It's time to amplify your <br /> online Career With Us
        </h1>

        <p className="fw-bolder">
          YourSkill is an online based learning platform for you where you can
          choose your skill development related courses.
        </p>
        <div className="d-flex justify-content-center">
          <div className="px-3 py-2">
            <button onClick={handleCourses} className="btn btn-success p-2">
              Our Courses
            </button>
          </div>
          <div className="px-3 py-2">
            <button
              onClick={handleSignUp}
              className="btn btn-border border-1 border-dark p-2"
            >
              Sign Up
            </button>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className="container">
        <div className="text-center bg-white">
          <p className="pt-3 fw-bold">TRENDING COURSES</p>
          <h2 className="text-success">
            Popular Online Courses Around <br /> You
          </h2>
          <p>
            The ultimate planning solution for busy peoples who want to reach
            their personal goals
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 w-100 ps-4 py-4">
          {courses.map((course) => (
            <div key={course.id} className="col text-center">
              <div className="card h-100 rounded-4">
                <img src={course.img} className="card-img-top" alt="..."></img>
                <div className="card-body">
                  <h4 className="card-title">{course.name}</h4>
                  <h5>
                    $
                    <span className="text-danger fs-bolder">{course.cost}</span>
                  </h5>
                  <p className="card-text">
                    <span className="fw-bolder">By:</span> {course.instructor}
                    <span className="ps-4">
                      <FontAwesomeIcon className="pe-1 fs-6" icon={faBook} />
                      {course.lesson} Lessons
                    </span>
                  </p>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center">
          Take the control of your life back and start doing things to make your
          dream <br /> come true. <Link to="/courses">View all courses</Link>
        </p>
      </section>
      <Blog></Blog>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
