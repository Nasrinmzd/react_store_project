import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "../Button";
import { ShoppingCart } from "iconsax-react";
import Search from "./Search";

function PageNav({ searchTerm, setSearchTerm }) {
  return (
    <nav className="w-full text-white bg-black py-3 px-6">
      <div className="flex items-center justify-center md:justify-between flex-wrap gap-3">
        <Logo />
        <ul className="flex gap-5 font-bold">
          <li>
            <NavLink to="/products">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
        <div className="flex justify-center gap-2 lg:gap-5 items-center">
          <div>
            <ShoppingCart size="34" color="#ffffff" />
          </div>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Button>
            <NavLink to="/login">Login</NavLink>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default PageNav;
