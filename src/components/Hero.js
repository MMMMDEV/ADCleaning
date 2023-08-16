import React from "react";
import heroImg from "../images/blueSofa.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="Hero">
      <div className="hero-left">
        <h1>
          Shine Bright with <span className="word-highlight">A&D</span>{" "}
          Cleaning!
        </h1>
        <h3>Revitalize spaces, reclaim time, embrace comfort</h3>
        <Link to="/contact-us" className="cta-hero">
          Get a free quote now!
        </Link>
      </div>
      <img
        className="hero-img"
        src={heroImg}
        alt="a prestine living room with a blue couch in the center"
      ></img>
    </section>
  );
}
