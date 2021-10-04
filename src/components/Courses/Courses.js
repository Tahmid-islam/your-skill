import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faShoppingCart,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./courses.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-danger fs-2 fw-bolder pt-5">
        All Courses
      </h1>
      <input
        className="container p-1 w-75"
        type="text"
        name="courses"
        placeholder="Search Course"
        id=""
      />

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 w-100 ps-4 py-4">
        {courses.map((course) => (
          <div key={course.id} className="col text-center p-4">
            <div className="card h-100 rounded-4">
              <img src={course.img} className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h4 className="card-title">{course.name}</h4>
                <h5>
                  $<span className="text-danger fs-bolder">{course.cost}</span>
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
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-danger rounded-3">
                  <FontAwesomeIcon
                    className="pe-1 fs-6"
                    icon={faShoppingCart}
                  />
                  Add To Cart
                </button>
                <button className="btn btn-success rounded-3">
                  <FontAwesomeIcon className="pe-1 fs-6" icon={faInfoCircle} />
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
