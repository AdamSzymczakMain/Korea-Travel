import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6">
        <HeroSection />
      </div>
    </>
  );
};

export default App;
