import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "../Button";
import { CloseSquare, HambergerMenu, ShoppingCart, User } from "iconsax-react";
import Search from "./Search";
import { useState } from "react";

function PageNav({ searchTerm, setSearchTerm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClose = () =>{
    setIsMenuOpen(false)
  }

  return (
    <nav className="w-full text-white bg-black py-3 px-6">
      <div className="flex items-center justify-between gap-3">
        <Logo />
        {/* navLinks */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center">
            <ul className="flex gap-2 lg:gap-5 font-bold sm:mr-0 md:mr-2 lg:mr-40">
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
                <div className="flex items-center gap-1">
                  <User size="15" color="#fff" fon />
                  <NavLink to="/login" className="font-bold">
                    Login
                  </NavLink>
                </div>
              </Button>
            </div>
          </div>
        </div>
        {/* hamburger button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center justify-center p-2 rounded-md "
          >
            {isMenuOpen === true ? (
              <CloseSquare size="32" color="#ffffff" />
            ) : (
              <HambergerMenu size="32" color="#ffffff" />
            )}
          </button>
        </div>
      </div>
      {/* mobile-menu */}
      {isMenuOpen ? (
        <div className="md:hidden" onClick={handleClose}>
          <div className="flex flex-col items-center justify-center bg-white/70 backdrop-blur-sm rounded p-5 fixed inset-0 left-[35%] animate-pulse">
            <CloseSquare onClick={handleClose} className="mb-10" size="25" color="#000" />
            <ul className="flex flex-col text-gray-950 items-center gap-10 font-bold">
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
            <div className="flex flex-col justify-center gap-8 lg:gap-5 items-center mt-5">
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <div className="flex items-center">
                <ShoppingCart className="mr-5" size="36" color="#000" />
                <Button>
                  <NavLink to="/login" className="text-gray-950 font-bold">
                    <User size="25" color="#000" />
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  );
}

export default PageNav;
