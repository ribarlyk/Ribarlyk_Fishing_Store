"use client";
import { Input } from "@/components/ui/input";

function SearchBar() {
  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Търсете..."
        className="pl-4 pr-10 py-2 w-full border border-gray-300 focus:border-blue-500 focus:outline-none"
      />
      <svg
        className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
        data-testid="geist-icon"
        height="20"
        strokeLinejoin="round"
        viewBox="0 0 16 16"
        width="20"
        onClick={() => console.log("searching...")}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
}

export default SearchBar;