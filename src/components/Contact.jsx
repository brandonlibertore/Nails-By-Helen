import React from "react";
import Header from "./UI/Header";
import StoreLocation from "../assets/store_location.png";
import "./Contact.css";
import { Button } from "@mui/material";

export default function Contact() {
  return (
    <div className="contact">
      <Header title="Contact" />
      <figure className="location__img--wrapper">
        <img src={StoreLocation} alt="" className="location__img" />
      </figure>
      <div className="contact__information">
        <div className="number__container">
          <h3>Phone Number</h3>
          <Button className="call__btn">Call Now</Button>
          <h4>(310) 869-4336</h4>
        </div>
        <div className="address__container">
          <h3>Address</h3>
          <a
            href="https://www.google.com/maps/place/11140+Jefferson+Blvd,+Culver+City,+CA+90230/data=!4m2!3m1!1s0x80c2ba021222b883:0xb3206ba94778e813?sa=X&ved=2ahUKEwjgtsiP_sz6AhWfLkQIHbHTCswQ8gF6BAgIEAE"
            target="_blank"
            className="directions__link"
            rel="noreferrer"
          >
            <Button className="directions__btn">Get Directions</Button>
          </a>
          <h4>11140 Jefferson Blvd Culver City, California 90230</h4>
        </div>
        <div className="hours__container">
          <h3>Business Hours</h3>
          <p>
            Mon: {"\u00a0"}9:00 AM - 6:00 PM
            <br />
            Tue: {"\u00a0\u00a0"}9:00 AM - 6:00 PM
            <br />
            Wed: {"\u00a0"}9:00 AM - 6:00 PM
            <br />
            Thu: {"\u00a0\u00a0"}9:00 AM - 6:00 PM
            <br />
            Fri: {"\u00a0\u00a0\u00a0\u00a0"}9:00 AM - 6:00 PM
            <br />
            Sat: {"\u00a0\u00a0\u00a0"}9:00 AM - 2:00 PM
            <br />
            Sun {"\u00a0\u00a0\u00a0"}Closed
          </p>
        </div>
      </div>
    </div>
  );
}
