import React from "react";
import { Card, CardGroup } from "react-bootstrap";

const About = () => {
  return (
    <div className="w-100 container">
      <h1 className="fw-bolder text-success text-center py-5">Who We Are</h1>
      <div className="row py-4">
        <div className="col-6 col-lg-3">
          <img
            className="img-fluid mb-3"
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2019/240/iconmonstr-school-29.png"
            alt=""
          />
          <h1 className="text-danger fs-4 fw-bolder">Expert Teacher</h1>
          <p>Develop skills for career of various majors including computer</p>
        </div>
        <div className="col-6 col-lg-3">
          <img
            className="img-fluid mb-3"
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2012/240/iconmonstr-user-20.png"
            alt=""
          />
          <h1 className="text-danger fs-4 fw-bolder">Self Development</h1>
          <p>Self development is taking steps to better yourself.</p>
        </div>
        <div className="col-6 col-lg-3">
          <img
            className="img-fluid mb-3"
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-school-16.png"
            alt=""
          />
          <h1 className="text-danger fs-4 fw-bolder">Remote Learning</h1>
          <p>
            Remote Learning occurs when the learner and instructor, or source of
            information.
          </p>
        </div>
        <div className=" col-6 col-lg-3">
          <img
            className="img-fluid mb-3"
            src="https://cdns.iconmonstr.com/wp-content/assets/preview/2017/240/iconmonstr-delivery-8.png"
            alt=""
          />
          <h1 className="text-danger fs-4 fw-bolder">Life Time Support</h1>
          <p>
            Lifetime provides cutting edge skills training designed to help
            people exceed their potential.
          </p>
        </div>
      </div>

      <div className="text-center">
        <p className="fw-bolder text-danger fs-4">BEST EXPERT TEAM</p>
        <h1>Our Professional Team</h1>
        <p>
          The ultimate planning solution for busy women who want to reach <br />{" "}
          their personal goals
        </p>
      </div>

      <CardGroup>
        <Card className="mx-2">
          <Card.Img
            variant="top"
            src="http://themeturn.com/tf-db/eduhash/theme/assets/images/team/team-1.jpg"
          />
          <Card.Body>
            <Card.Title>Tanvir Hasan</Card.Title>
            <Card.Text>CEO, Developer</Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-2">
          <Card.Img
            variant="top"
            src="http://themeturn.com/tf-db/eduhash/theme/assets/images/team/team-4.jpg"
          />
          <Card.Body>
            <Card.Title>Harish Ham</Card.Title>
            <Card.Text>Market Researcher</Card.Text>
          </Card.Body>
        </Card>
        <Card className="mx-2">
          <Card.Img
            variant="top"
            src="http://themeturn.com/tf-db/eduhash/theme/assets/images/team/team-2.jpg"
          />
          <Card.Body>
            <Card.Title>Mikele John</Card.Title>
            <Card.Text>Content Writter</Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default About;
