import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter text-center shadow-sm m-4 p-4 rounded-2">
      <h4 className="text-danger fw-bolder fs-4 p-4">NEWSLETTER</h4>
      <div className="row">
        <div className="col-md-12 col-lg-6">
          <p className="fs-1">Subscribe to get latest news</p>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="input-group rounded-3 pt-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Email"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-danger text-white"
              type="button"
              id="button-addon2"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
