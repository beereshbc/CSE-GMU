import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import BoxMenu from "../components/BoxMenu";

const Home = () => {
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
