import React from "react";
import mapIcon from "../images/map.png";

export default function ServiceArea() {
  return (
    <section className="ServiceArea" id="ServiceArea">
      <h4>Service areas</h4>
      <div className="area-info-container">
        <img
          className="map-img"
          src={mapIcon}
          alt="A google maps screenshot of downtown Nashville"
        ></img>
        <div className="area-info">
          <ul>
            <li>Nashville</li>
            <li>Mount Juliet</li>
            <li>Hermitage</li>
            <li>Donelson</li>
            <li>Nolensville</li>
            <li>Franklin</li>
          </ul>
          <ul>
            <li>Brentwood</li>
            <li>Bellevue</li>
            <li>Lebanon</li>
            <li>Murfreesboro</li>
            <li>Lavergne</li>
            <li>Smyrna</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
