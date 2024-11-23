"use client";
import { useState } from "react";
import Logo from "@/app/components/logo/Logo";
import Cart from "@/app/components/cart/Cart";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import Link from "next/link";

function MobileNavBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full p-4 bg-white shadow-md">
        <div className="flex items-center space-x-4 md:pl-24">
          <FaBars
            size={24}
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
          <FaSearch size={24} />
        </div>
        <div className="flex-grow flex justify-center">
          <Logo />
        </div>
        <div className="flex items-center md:pr-24">
          <Cart />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="p-4 flex justify-end">
          <FaTimes
            size={24}
            onClick={toggleSidebar}
            className="cursor-pointer"
          />
        </div>
        <div className="p-4">
          <ul className="mt-4 space-y-4">
            <li>
              <Link href="/vydici" onClick={toggleSidebar}>
                <span className="font-semibold">ВЪДИЦИ</span>
              </Link>
            </li>
            <li>
              <Link href="/makari" onClick={toggleSidebar}>
                <span className="font-semibold">МАКАРИ</span>
              </Link>
            </li>
            <li>
              <Link href="/zahranki" onClick={toggleSidebar}>
                <span className="font-semibold">ЗАХРАНКИ</span>
              </Link>
            </li>
            <li>
              <Link href="/takymi" onClick={toggleSidebar}>
                <span className="font-semibold">ТАКЪМИ</span>
              </Link>
            </li>
            <li>
              <Link href="/aksesoari" onClick={toggleSidebar}>
                <span className="font-semibold">АКСЕСОАРИ</span>
              </Link>
            </li>
            <li>
              <Link href="/kymping" onClick={toggleSidebar}>
                <span className="font-semibold">КЪМПИНГ</span>
              </Link>
            </li>
            <li>
              <Link href="/zanas" onClick={toggleSidebar}>
                <span className="font-semibold">ЗА НАС</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          isSidebarOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        } z-40`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}

export default MobileNavBar;