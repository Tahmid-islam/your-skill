import React from "react";

const Blog = () => {
  return (
    <div className="w-100 container">
      <div className="text-center bg-white">
        <p className="pt-3 fw-bold">Blog News</p>
        <h2 className="text-success">Latest From The Blog</h2>
        <p>
          The best ideas can change who we are. Medium is where those ideas take
          shape, take off, and <br /> spark powerful conversations
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img
              src="http://themeturn.com/tf-db/eduhash/theme/assets/images/blog/blog1.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <p className="card-title">Written by Admin</p>
              <p className="card-text">How to Learn React.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="http://themeturn.com/tf-db/eduhash/theme/assets/images/blog/blog2.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <p className="card-title">Written by Admin</p>
              <p className="card-text">How to become a best sale marketer!</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img
              src="http://themeturn.com/tf-db/eduhash/theme/assets/images/blog/blog3.jpg"
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <p className="card-title">Written by Admin</p>
              <p className="card-text">How to become a best coder.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
