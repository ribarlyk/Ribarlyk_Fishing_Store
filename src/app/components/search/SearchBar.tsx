"use client";

import { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import type { Product } from "@/types/Products";
import Image from "next/image";
import Link from "next/link";

function SearchBar({
  setIsSearch,
  isSearch,
}: {
  setIsSearch: (value: boolean) => void;
  isSearch: boolean;
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isSearchInitiated, setIsSearchInitiated] = useState(false);
  const searchBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const products = await response.json();
      setProducts(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!searchTerm) fetchProducts();

    const value = event.target.value;

    setSearchTerm(value);
  };

  const filterResults = () => {
    const filteredResults = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredResults);
    setIsSearchInitiated(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchTerm) filterResults();
    if (event.key === "Escape" && searchTerm) {
      clearSearch();
    }
  };

  const handleSearchClick = () => {
    if (!searchTerm) return;

    filterResults();
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      searchBarRef.current &&
      !searchBarRef.current.contains(event.target as Node)
    ) {
      clearSearch();
    }
  };

  const handleLinkClick = () => {
    clearSearch();
  };

  const clearSearch = () => {
    setSearchTerm("");
    setResults([]);
    setIsSearchInitiated(false);
    setIsSearch(false);
  };

  const closeElement = searchTerm && (
    <div className="flex items-center justify-center">
      <svg
        className="cursor-pointer"
        height="12"
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width="12"
        onClick={clearSearch}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.4697 13.5303L13 14.0607L14.0607 13L13.5303 12.4697L9.06065 7.99999L13.5303 3.53032L14.0607 2.99999L13 1.93933L12.4697 2.46966L7.99999 6.93933L3.53032 2.46966L2.99999 1.93933L1.93933 2.99999L2.46966 3.53032L6.93933 7.99999L2.46966 12.4697L1.93933 13L2.99999 14.0607L3.53032 13.5303L7.99999 9.06065L12.4697 13.5303Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );

  const searchResultElement = results.length > 0 && (
    <ul className="absolute left-0 right-0 bg-white border border-gray-300 shadow-lg z-10">
      {results.map((result, index) => (
        <Link
          onClick={handleLinkClick}
          key={index}
          href={`/product/${result._id}`}
        >
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
            <div className="flex flex-row items-center gap-6">
              <Image
                src={result.images[0]}
                alt="product-image"
                width={30}
                height={30}
                className="object-cover"
              />
              <span>{result.title}</span>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );

  const emptySearchResultElement = results.length === 0 &&
    isSearchInitiated && (
      <div className="absolute left-0 right-0 bg-white border border-gray-300 shadow-lg z-10">
        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <div className="flex flex-row items-center gap-6">
            Няма намерени продукти по посочените критерии
          </div>
        </div>
      </div>
    );

  return (
    <div className="relative w-full" ref={searchBarRef}>
      <Input
        type="text"
        placeholder="Търсете..."
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className="pl-4 pr-20 py-2 w-full h-12 border border-gray-300 focus:border-blue-500 focus:outline-none"
      />
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex space-x-2">
        {closeElement}

        <div
          onClick={handleSearchClick}
          className="flex items-center justify-center bg-blue-500 hover:bg-blue-300 rounded h-12 w-12"
        >
          <svg
            className="cursor-pointer"
            height="20"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="20"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 bg-white transition-all duration-400 ease-in-out transform  z-10 ${
          results.length > 0
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {searchResultElement}
      </div>
      {emptySearchResultElement}
    </div>
  );
}

export default SearchBar;
