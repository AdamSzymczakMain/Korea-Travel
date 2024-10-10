import { Menu, X } from "lucide-react";
import { useState } from "react";
import React from "react";
import logo2 from "../assets/logo2.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [moblieDrawerOpen, setMoblieDraweOpen] = useState(false);

  const toggleNavBar = () => {
    setMoblieDraweOpen(!moblieDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 ">
      <div className="container px-4 mx-auto relativ text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10" src={logo2} alt="logo" />
            <span className="text-xl tracking-tight">MimiKoreaTrip</span>
          </div>
          <ul className="hidden lg:flex mr-12 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="font-medium">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center">
            <a
              className="bg-gradient-to-r from-pink-300 to-pink-500 py-2 px-3 rounded-md"
              href="#"
            >
              Zarezerwuj
            </a>
          </div>
          <div className="lg:hidden md:flex flex-column justify-end">
            <button onClick={toggleNavBar}>
              {moblieDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {moblieDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="py-2">
              <a
                href="#"
                className="py-2
                 rounded-md bg-gradient-to-r from-pink-300 to-pink-500 py-2 px-3 rounded-md"
              >
                Zarezerwuj
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
