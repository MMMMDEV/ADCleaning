import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import ServiceArea from "./ServiceArea";
import "../Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="content">
        <Hero></Hero>
        <Services></Services>
        <ServiceArea></ServiceArea>
      </div>
    </div>
  );
}
