import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <About />
    </div>
  );
}
