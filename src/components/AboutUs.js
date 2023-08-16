import React from "react";
import whiteSofaIcon from "../images/whiteSofa.jpg";
import "../About-Contact.css";

export default function AboutUs() {
  return (
    <div className="AboutUs">
      <div
        // style={{ backgroundImage: `url(${whiteSofaIcon})` }}
        className="content2"
      >
        <h1>
          A little bit more <span className="word-highlight2">about us</span>
        </h1>
        <p>
          A&D Cleaning Services, a thriving women-owned business, embodies a
          true passion for cleaning. With dedication and expertise, we bring
          exceptional care and quality to every space we touch, ensuring a
          pristine and sparkling environment for our valued clients.
        </p>
      </div>
      <div className="overlay"></div>
      <img
        src={whiteSofaIcon}
        alt="pristine living room with a white couch and pillows"
        className="img-overlay"
      ></img>
    </div>
  );
}
