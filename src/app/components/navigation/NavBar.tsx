import Link from "next/link";

function NavBar() {
  return (
    <ul className="flex flex-row justify-center gap-5 py-2">
      <li className="relative group">
        <Link href={"/rods"}>
          <span className="font-semibold">ВЪДИЦИ</span>
        </Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/reels"}>
          {" "}
          <span className="font-semibold">МАКАРИ</span>
        </Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/feed"}>
          {" "}
          <span className="font-semibold">ЗАХРАНКИ</span>
        </Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/takymi"}>
          {" "}
          <span className="font-semibold">ТАКЪМИ</span>
        </Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/accessories"}>
          {" "}
          <span className="font-semibold">АКСЕСОАРИ</span>
        </Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/camping"}>
          {" "}
          <span className="font-semibold">КЪМПИНГ</span>
        </Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/about"}>
          {" "}
          <span className="font-semibold">ЗА НАС</span>
        </Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
    </ul>
  );
}

export default NavBar;
