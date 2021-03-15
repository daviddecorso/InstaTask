import React from "react";
import Slider from "infinite-react-carousel";
import btnNormal from "./img/harold1.jpg";
import btnNormal2 from "./img/harold2.jpg";
import btnNormal3 from "./img/harold3.jpg";
import btnNormal4 from "./img/harold4.jpg";

function About() {
  return (
    <div>
      <div>
        <Slider>
          <div>
            <img src={btnNormal} />
          </div>
          <div>
            <img src={btnNormal2} />
          </div>
          <div>
            <img src={btnNormal3} />
          </div>
          <div>
            <img src={btnNormal4} />
          </div>
        </Slider>
      </div>
      <div className="section">
        <div className="container">
          <div className="columns is-8 is-variable is-centered">
            <div className="column">
              <h1 className="title section-title">About InstaTask</h1>
              <hr style={{ border: "1px solid #1659b1" }}></hr>
              <p>
                InstaTask is a new application that imports a your webcourses
                calendar and alerts you when assignments are due, since no one
                likes keeping track of, and inevitably forgetting, assignment
                due dates. InstaTask also intuitively displays your assignments
                via a linked calendar and upcoming task view. We want to help
                students be more productive and have more control over their
                tasks and assignments and this service is our way of doing so.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
