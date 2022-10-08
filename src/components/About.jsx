import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="about">
      <div className="column__about">
        <h1 className="about__title">NAILS BY HELEN</h1>
        <p className="about__para">
          Nail Salon located at
          <a
            href="https://www.google.com/maps/place/11140+Jefferson+Blvd,+Culver+City,+CA+90230/data=!4m2!3m1!1s0x80c2ba021222b883:0xb3206ba94778e813?sa=X&ved=2ahUKEwjgtsiP_sz6AhWfLkQIHbHTCswQ8gF6BAgIEAE"
            className="directions"
            target="_blank"
          >
            11140 Jefferson Blvd Culver City, California 90230
          </a>
          Open Today until 6:00pm
        </p>
        <img src="" alt="Home Image" />
      </div>
    </div>
  );
}
