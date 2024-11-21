import Link from "next/link";

function NavBar() {
  return (
    <ul className="flex flex-row justify-center gap-5 py-2">
      <li className="relative group">
        <Link href={"/vydici"}>ВЪДИЦИ</Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/makari"}>МАКАРИ</Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/zahranki"}>ЗАХРАНКИ</Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/takymi"}>ТАКЪМИ</Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/aksesoari"}>АКСЕСОАРИ</Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/kymping"}>КЪМПИНГ</Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
      <li className="relative group">
        <Link href={"/zanas"}>ЗА НАС</Link>
        <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
      </li>
    </ul>
  );
}

export default NavBar;
