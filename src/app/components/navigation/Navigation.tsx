import SearchBar from "../search/SearchBar";
import NavBar from "./NavBar";
import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import Contact from "../contact/Contact";

export default function Navigation() {
  return (
    <div className="flex flex-col h-fit py-2 bg-white w-auto">
      <div className="flex flex-row justify-between w-full">
        <div className="pl-32">
          <Logo />
        </div>
        <div className="w-4/12 flex justify-items-end items-center ">
          <SearchBar />
        </div>
        <div className="flex items-center pr-32">
          <Contact />
          <Cart />
        </div>
      </div>
      <div className="border-t border-b">
        <NavBar />
      </div>
    </div>
  );
}
