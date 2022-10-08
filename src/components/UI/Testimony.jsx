import React from "react";
import { Link } from "react-router-dom";
import "./Testimony.css";

import StarIcon from "@mui/icons-material/Star";

export default function Testimony({ id, name, message, rating }) {
  return (
    <Link to={`/${id}`} className="testimony">
      <h3 className="testimony__name">{name}</h3>
      {new Array(Math.floor(rating)).fill(0).map((_, index) => (
        <StarIcon key={index} className="star__icon" />
      ))}
      <p className="testimony__message">{message}</p>
    </Link>
  );
}
