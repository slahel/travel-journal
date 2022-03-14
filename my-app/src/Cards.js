import React from "react";
import Point from "./images/Point.png";

export default function Cards() {
  return (
    <div className="cards">
      <img src={Point} />
      <span className="country"></span>
      <a className="GoogleMaps"></a>
      <div className="title"></div>
      <div className="date"> </div>
      <div className="description"></div>
    </div>
  );
}
