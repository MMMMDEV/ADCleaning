import React from "react";
import houseIcon from "../images/house.png";
import museumIcon from "../images/museum.png";
import truckIcon from "../images/truck.png";

export default function Services() {
  return (
    <section className="Services" id="Services">
      <h4>Services we offer</h4>
      <div className="services-container">
        <div className="service-card">
          <img
            className="service-icons"
            src={houseIcon}
            alt="A drawing of a commercial building"
          ></img>
          <ul>
            <li>Maintenance</li>
            <li>cleaning</li>
            <li>touch-up cleaning</li>
          </ul>
        </div>
        <div className="service-card">
          <img
            className="service-icons"
            src={truckIcon}
            alt="a drawing of a moving truck"
          ></img>
          <ul>
            <li> move-out cleaning</li>
          </ul>
        </div>
        <div className="service-card">
          <img
            className="service-icons"
            src={museumIcon}
            alt="A drawing of a commercial building"
          ></img>
          <ul>
            <li>construction cleaning</li>
            <li>deep cleaning</li>
          </ul>
        </div>
      </div>
      <p>
        Pride in Delivering Excellence Across All Services &#8211; Client
        Satisfaction at Its Finest. From Cleaning to Maintenance, Our Commitment
        Shines Through Every Task.
      </p>
    </section>
  );
}
