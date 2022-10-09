import React, { useEffect, useState } from "react";
import { db } from "../firebase/init";
import { collection, onSnapshot } from "firebase/firestore";
import Header from "../components/UI/Header";
import Testimony from "../components/UI/Testimony";
import Navbar from "../components/Navbar";
import "./Testimonials.css";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);

  async function getAllReviews() {
    const todoTweet = collection(db, "reviews");
    const unsub = onSnapshot(todoTweet, (snapshot) => {
      const post = snapshot.docs.map((elem) => ({
        ...elem.data(),
        id: elem.id,
      }));
      setReviews(post);
    });
    return () => unsub;
  }

  useEffect(() => {
    getAllReviews();
  }, []);

  return (
    <div className="page__testimonials">
      <Navbar />
      <Header title="Testimonials" />
      <div className="page__testimony__container">
        {reviews.map((object) => (
          <Testimony
            key={object.id}
            id={object.id}
            name={object.name}
            message={object.message}
            rating={object.rating}
          />
        ))}
      </div>
    </div>
  );
}
