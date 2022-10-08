import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <About />
      <Pricing />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
