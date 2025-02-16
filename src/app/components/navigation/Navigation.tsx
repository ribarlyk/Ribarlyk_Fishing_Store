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
  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
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
    <div className="flex flex-col bg-white w-auto relative z-50">
      <div className="flex flex-row justify-between w-full hidden md:flex">
        <div className="pl-32">
          <Logo />
        </div>
        <div className="w-4/12 flex justify-items-end items-center">
          <SearchBar setIsSearch={setIsSearch} isSearch={isSearch} />
        </div>
        <div className="flex items-center pr-32">
          <Contact />
          <Cart />
        </div>
      </div>
      <div className="border-t border-blue-500 border-b hidden md:block">
        <NavBar />
      </div>
      <div
        className={`w-full md:fixed md:top-0 md:left-0 md:transition-transform md:duration-700 md:ease-in-out ${
          isScrolled ? "md:translate-y-0" : "md:-translate-y-full"
        }`}
      >
        <MobileNavBar />
      </div>
    </div>
  );
}
