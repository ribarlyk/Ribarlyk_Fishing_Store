"use client";

import { useState, useEffect } from "react";
import SearchBar from "../search/SearchBar";
import NavBar from "./NavBar";
import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import Contact from "../contact/Contact";
import MobileNavBar from "./MobileNavBar";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col bg-white w-auto">
      <div className="flex flex-row justify-between w-full ">
        <div className="pl-32">
          <Logo />
        </div>
        <div className="w-4/12 flex justify-items-end items-center">
          <SearchBar />
        </div>
        <div className="flex items-center pr-32">
          <Contact />
          <Cart />
        </div>
      </div>
      <div className="border-t border-blue-500 border-b">
        <NavBar />
      </div>
      <div
        className={`fixed top-0 left-0 w-full transition-transform duration-700 ease-in-out z-50 ${
          isScrolled ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <MobileNavBar />
      </div>
    </div>
  );
}
