import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InformationSection from "./components/InformationSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto ">
        <HeroSection />
      </div>
      <InformationSection />
    </>
  );
};

export default App;
