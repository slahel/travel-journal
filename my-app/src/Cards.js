import React from "react";
import "./Cards.css";
import Point from "./images/Point.png";

export default function Cards(props) {
  return (
    <div className="cards">
      <img src={props.item.imageUrl} className="card-photo" />
      <div className="card-text">
        <img src={Point} />
        <span className="location">{props.item.location}</span>
        <a
          className="GoogleMaps"
          href={props.item.googleMapsUrl}
          target="_blank"
          rel="noopener"
        >
          Check on Google Maps
        </a>
        <div className="title">{props.item.title}</div>
        <div className="date">{props.item.date}</div>
        <div className="description">{props.item.description}</div>
      </div>
    </div>
  );
}
