"use client";

import { useState, useEffect } from "react";
import Logo from "@/app/components/logo/Logo";
import Cart from "@/app/components/cart/Cart";
import { FaBars, FaSearch } from "react-icons/fa";
import SideBar from "./SideBar";
import { createPortal } from "react-dom";
import SearchBar from "@/app/components/search/SearchBar";

function MobileNavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="flex items-center justify-between w-full p-4 bg-white shadow-md h-28 z-50">
        <div className="flex items-center space-x-4 md:pl-24">
          <FaBars
            size={24}
            className="cursor-pointer"
            onClick={toggleSidebar}
          />
          <FaSearch
            size={24}
            className="cursor-pointer"
            onClick={handleSearch}
          />
        </div>
        <div className="flex-grow flex justify-center">
          <Logo />
        </div>
        <div className="flex items-center md:pr-24">
          <Cart />
        </div>
      </div>
      <div
        className={`absolute top-28 left-0 w-full transition-all duration-400 ease-in-out transform ${
          isSearch ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <SearchBar setIsSearch={setIsSearch} isSearch={isSearch} />
      </div>
      {isClient &&
        createPortal(
          <SideBar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />,
          document.body
        )}
    </>
  );
}

export default MobileNavBar;
