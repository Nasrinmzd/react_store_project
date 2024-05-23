import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import Button from "../Button";
import { CloseSquare, HambergerMenu, ShoppingCart, User } from "iconsax-react";
import Search from "./Search";
import { useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import { useCart } from "../../context/CartContext";
import CartPopover from "./CartPopover";

function PageNav({ searchTerm, setSearchTerm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, totalItems } = useCart();
  const [showCartPopover, setShowCartPopover] = useState(false);


  // const getTotalItems = () => {
  //   return cart.reduce((total, item) => total + (item.quantity || 0), 0);
  // };

  // const totalItems = getTotalItems();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleClose = () => {
    setIsMenuOpen(false);
  };

  const menuRef = useOutsideClick(handleClose);

  const handleCartHover = () => {
    setShowCartPopover(true);
  };

  const handleCartLeave = () => {
    setShowCartPopover(false);
  };

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
              <div className="relative"
                onMouseEnter={handleCartHover}
                onMouseLeave={handleCartLeave}>
              <NavLink to="/shopping" className="relative">
                {totalItems > 0 ? (
                  <div className="absolute -top-3 left-5 bg-indigo-500 w-[18px] h-[18px] rounded-[50%] flex items-center justify-center">
                    <span className="text-sm">{totalItems}</span>
                  </div>
                ) : (
                  ""
                )}
                <ShoppingCart size="34" color="#ffffff" />
              </NavLink>
              {showCartPopover && <CartPopover />}
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

      <div
        ref={menuRef}
        className={`fixed inset-y-0 right-0 transform transition-all duration-300 z-50 ${
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }`}
      >
        <CloseSquare
          onClick={handleClose}
          className="absolute top-2 left-2 z-40"
          size="25"
          color="#000"
        />
        <div className="flex flex-col bg-white/70 backdrop-blur-sm rounded p-5 h-[950px]">
          <ul
            onClick={handleClose}
            className="flex flex-col text-gray-950 items-center gap-10 font-bold mt-8"
          >
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
              <NavLink to="/shopping" className="relative">
                {totalItems > 0 ? (
                  <div className="absolute -top-3 left-5 bg-indigo-500 w-[18px] h-[18px] rounded-[50%] flex items-center justify-center">
                    <span className="text-sm">{totalItems}</span>
                  </div>
                ) : (
                  ""
                )}
                <ShoppingCart size="34" color="#000" className="mr-3" />
              </NavLink>{" "}
              <Button>
                <NavLink to="/login" className="text-gray-950 font-bold">
                  <User size="25" color="#000" />
                </NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`fixed inset-0  opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? "bg-black opacity-80" : "opacity-0 pointer-events-none"
        }`}
      ></div>
    </nav>
  );
}

export default PageNav;
