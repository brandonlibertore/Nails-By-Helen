import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../firebase/init";
import { collection, addDoc } from "firebase/firestore";
import "./Navbar.css";

import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [review, setReview] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(-1);
  const [message, setMessage] = useState("");

  function writeReview() {
    setReview(!review);
  }

  const submitReview = () => {
    if (name !== "" && rating !== -1 && message !== "") {
      const review = {
        name: name,
        rating: rating,
        message: message,
      };
      addDoc(collection(db, "reviews"), review);
      setName("");
      setRating(5);
      setMessage("");
      writeReview();
    } else {
      alert("All input fields must be filled.");
    }
  };

  return (
    <div className="navbar">
      <div className="row__nav">
        <figure className="logo__img--wrapper-nav">
          <img src="" alt="Logo" className="logo__img--nav" />
        </figure>
        <ul className="nav__link--list">
          <Link to="/" className="nav__link--wrapper">
            <li className="nav__link">Home</li>
          </Link>
          <Link to="/about" className="nav__link--wrapper">
            <li className="nav__link">About Me</li>
          </Link>
          <Link to="/testimonial" className="nav__link--wrapper">
            <li className="nav__link">Testimonials</li>
          </Link>
          <Button
            className="review__btn"
            onClick={() => {
              writeReview();
            }}
          >
            Write a Review
          </Button>
        </ul>
      </div>
      {review ? (
        <form
          className="review__container"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              submitReview();
            }
          }}
        >
          <CloseIcon className="close__icon" onClick={() => writeReview()} />
          <div className="review__wrapper">
            <h3>Name</h3>
            <input
              name="name"
              type="text"
              className="review__name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="review__wrapper">
            <h3>Message</h3>
            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              className="review__message"
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            ></textarea>
          </div>
          <div className="review__wrapper">
            <h3>Rating</h3>
            <div className="radio__btn--container">
              <div className="radio__btn--wrapper">
                <input
                  name="rating"
                  type="radio"
                  className="review__rating"
                  onChange={() => setRating(0)}
                />
                <p>0</p>
              </div>
              <div className="radio__btn--wrapper">
                <input
                  name="rating"
                  type="radio"
                  className="review__rating"
                  onChange={() => setRating(1)}
                />
                <p>1</p>
              </div>
              <div className="radio__btn--wrapper">
                <input
                  name="rating"
                  type="radio"
                  className="review__rating"
                  onChange={() => setRating(2)}
                />
                <p>2</p>
              </div>
              <div className="radio__btn--wrapper">
                <input
                  name="rating"
                  type="radio"
                  className="review__rating"
                  onChange={() => setRating(3)}
                />
                <p>3</p>
              </div>
              <div className="radio__btn--wrapper">
                <input
                  name="rating"
                  type="radio"
                  className="review__rating"
                  onChange={() => setRating(4)}
                />
                <p>4</p>
              </div>
              <div className="radio__btn--wrapper">
                <input
                  name="rating"
                  type="radio"
                  className="review__rating"
                  onChange={() => setRating(5)}
                />
                <p>5</p>
              </div>
            </div>
          </div>
          <Button
            className="submit__btn"
            onClick={(event) => {
              submitReview(event.target.value);
            }}
          >
            Submit
          </Button>
        </form>
      ) : (
        ""
      )}
    </div>
  );
}
