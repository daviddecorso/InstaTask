import React from "react";
import Slider from "infinite-react-carousel";
import btnNormal from "./img/harold1.jpg";
import btnNormal2 from "./img/harold2.jpg";
import btnNormal3 from "./img/harold3.jpg";
import btnNormal4 from "./img/harold4.jpg";
import { IconLeftArrow, IconRightArrow } from "@tabler/icons";

function About() {
  var settings = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    duration: 150,
    nextArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-right"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="13" y1="18" x2="19" y2="12" />
        <line x1="13" y1="6" x2="19" y2="12" />
      </svg>
    ),
    prevArrow: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-left"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="5" y1="12" x2="19" y2="12" />
        <line x1="5" y1="12" x2="11" y2="18" />
        <line x1="5" y1="12" x2="11" y2="6" />
      </svg>
    ),
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
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
