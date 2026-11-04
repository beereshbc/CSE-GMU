import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import BoxMenu from "../components/BoxMenu";

const Home = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div>
      <Hero />
      <Header />
      <Cards />
      <BoxMenu />
      <Navbar />
    </div>
  );
};

export default Home;
