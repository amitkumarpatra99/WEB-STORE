import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Mobiles", link: "/mobiles" },
  { id: 3, name: "Electronics", link: "/electronics" },
  { id: 4, name: "Fashion", link: "/fashion" },
  { id: 5, name: "Orders", link: "/orders" },
];

const DropdownLinks = [
  { id: 1, name: "Top Products", link: "/top-products" },
  { id: 2, name: "Best Selling", link: "/best-selling" },
  { id: 3, name: "Top Rated", link: "/top-rated" },
];

const Navbar = ({ handleOrderPopup }) => {
  const { cartItems } = useCart();
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 shadow-sm transition-all duration-300">
      <div className="container py-4 flex justify-between items-center">
        {/* Logo */}
        <div>
          <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2 items-center tracking-wide">
            <div className="w-10 h-10 bg-gradient-to-tr from-primary to-secondary rounded-xl flex items-center justify-center text-white font-extrabold shadow-lg shadow-primary/30">W</div>
            <div className="flex flex-col justify-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary leading-none">
                WebStore
              </span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-400 tracking-[0.2em] -mt-0.5 uppercase pl-0.5">
                BY MR PATRA
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link to={data.link} className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors duration-200 text-base">
                  {data.name}
                </Link>
              </li>
            ))}
            {/* Dropdown */}
            <li className="group relative cursor-pointer font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              <span className="flex items-center gap-1">
                Trending
                <FaCaretDown className="group-hover:rotate-180 transition-transform duration-300" />
              </span>
              <div className="absolute top-full right-0 mt-4 w-48 rounded-xl bg-white dark:bg-gray-800 shadow-xl border border-gray-100 dark:border-gray-700 p-2 hidden group-hover:block transition-all animate-fadeIn">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <Link to={data.link} className="block px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-200 hover:bg-primary/10 hover:text-primary transition-colors">
                        {data.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative group hidden sm:block">
            <input
              type="text"
              placeholder="Search..."
              className="w-[200px] transition-all duration-300 group-hover:w-[300px] rounded-full border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-4 py-2 pl-10 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm"
            />
            <IoMdSearch className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-400 group-hover:text-primary transition-colors" />
          </div>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 group"
          >
            <FaCartShopping className="text-xl" />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full shadow-sm animate-bounce">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Dark Mode */}
          <DarkMode />

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 w-2/3 h-screen bg-white dark:bg-gray-900 shadow-2xl z-[9999] p-6 lg:hidden transition-all duration-300 ${showMenu ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-primary">Menu</h1>
          <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer" size={30} />
        </div>
        <ul className="flex flex-col gap-6">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                onClick={toggleMenu}
                className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors duration-200 block"
              >
                {data.name}
              </Link>
            </li>
          ))}
          {/* Mobile Dropdown Links */}
          <li className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <span className="text-sm text-gray-400 uppercase tracking-widest mb-4 block">Categories</span>
            <div className="flex flex-col gap-4 pl-2">
              {DropdownLinks.map((data) => (
                <Link
                  key={data.id}
                  to={data.link}
                  onClick={toggleMenu}
                  className="text-base text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  {data.name}
                </Link>
              ))}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
