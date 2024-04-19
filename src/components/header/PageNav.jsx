import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "../Button";
import { ShoppingCart } from "iconsax-react";
import Search from "./Search";

function PageNav({searchTerm, setSearchTerm}) {
  return (
    <nav className="w-full text-white flex justify-between items-center py-5 px-6 bg-black ">
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
      <div className="flex gap-5 items-center">
        <div>
          <ShoppingCart size="34" color="#ffffff" />
        </div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Button>
          <NavLink to="/login">Login</NavLink>
        </Button>
      </div>
    </nav>
  );
}

export default PageNav;
