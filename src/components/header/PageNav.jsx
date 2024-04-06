import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "../Button";
import { SearchNormal1 } from "iconsax-react";

function PageNav() {
  return (
    <nav className="flex justify-between items-center py-5 px-6">
      <Logo />
      <ul className="flex gap-5">
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
      <div className="flex gap-3 items-center">
        <div className="flex items-center bg-white p-2 rounded">
          <SearchNormal1 size="18" color="#000" />
          <input className="ml-2 outline-none text-black" type="Search" placeholder="Search..." />
        </div>
        <Button>
          <NavLink to="/login">Login</NavLink>
        </Button>
      </div>
    </nav>
  );
}

export default PageNav;
