import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Pictures from "../components/Pictures";

const Home = () => {
  return (
    <div>
      <Hero />
      <Header />
      <Cards />
      <Pictures />
      <Navbar />
    </div>
  );
};

export default Home;
