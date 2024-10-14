import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InformationSection from "./components/InformationSection";
import TripSection from "./components/TripSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto ">
        <HeroSection />
      </div>
      <InformationSection />
      <TripSection />
    </>
  );
};

export default App;
