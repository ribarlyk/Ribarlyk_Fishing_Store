import SearchBar from "../search/SearchBar";
import NavBar from "./NavBar";
import Cart from "../cart/Cart";
import Logo from "../logo/Logo";
import Contact from "../contact/Contact";

export default function Navigation() {
  return (
    <div className="flex flex-col h-fit py-2 bg-blue-400">
      <div className="flex flex-row">
        <Logo />
        <SearchBar />
        <Contact />
        <Cart />
      </div>
      <div>
        <NavBar />
      </div>
    </div>
  );
}
