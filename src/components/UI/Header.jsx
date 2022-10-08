import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <div className="column__header">
      <hr className="horizontal__line" />
      <h2>{title}</h2>
    </div>
  );
}
