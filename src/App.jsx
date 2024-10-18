import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import InformationSection from "./components/InformationSection";
import TripSection from "./components/TripSection";
import SectionGallery from "./components/SectionGallery";
import AboutSection from "./components/AboutSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto ">
        <HeroSection />
        <InformationSection />
        <TripSection />
        <SectionGallery />
        <AboutSection />
      </div>
    </>
  );
};

export default App;
