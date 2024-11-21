"use client";

import Image from "next/image";
function Logo() {
  const handleClick = () => {
    window.location.href = "/home";
  };
  return (
    <>
      <Image
        className="cursor-pointer"
        src="https://dvxs8unt9ljwj.cloudfront.net/small-logo-transformed.webp"
        alt="logo"
        width={120}
        height={120}
        onClick={handleClick}
      />
    </>
  );
}

export default Logo;
