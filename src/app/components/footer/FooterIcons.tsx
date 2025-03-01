"use client";

import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiTiktokFill,
} from "react-icons/ri";

function FooterIcons() {
  return (
    <div className="bg-blue-800 w-full h-16 flex justify-center items-center gap-4">
      <div className="group cursor-pointer">
        <RiTiktokFill
          size={24}
          className="text-white group-hover:text-black"
          onClick={() => window.open("https://www.tiktok.com/", "_blank")}
        />
      </div>
      <div className="group cursor-pointer">
        <RiFacebookCircleFill
          size={24}
          className="text-white group-hover:text-black"
          onClick={() => window.open("https://www.facebook.com/", "_blank")}
        />
      </div>
      <div className="group cursor-pointer">
        <RiInstagramFill
          size={24}
          className="text-white group-hover:text-black"
          onClick={() => window.open("https://www.instagram.com/", "_blank")}
        />
      </div>
    </div>
  );
}

export default FooterIcons;
