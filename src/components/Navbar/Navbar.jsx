import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Mobile & Accessories",
    link: "/#",
  },
  {
    id: 3,
    name: "Elctronics",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Womens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Home & Kitchen",
    link: "/#",
  },
  {
    id: 3,
    name: "Grocory & Essentials",
    link: "/#",
  },
];
const DropdownLinks = [
  {
    id: 1,
    name: "Top Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className="bg-[#065084] py-3">
        <div className="container flex justify-evenly items-center">
          <div>
            <a href="#" className="font-bold text-xl items-center flex gap-1">
              <img src="/src/assets/LOGO.png" alt="" className=" rounded-sm " width={40} />
              <span className="hover:text-cyan-400 "> WEB</span> <span className="animate-pulse">STORE</span>
            </a>
          </div>


          {/* search bar */}
          <div className="flex justify-start items-center gap-5">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search For Products & Brands"
                className="w-[800px] sm:w-[800px] transition-all duration-500 rounded-lg border border-gray-300 py-2 px-2
                text-sm focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-slate-800 "
              />
              <IoMdSearch className="text-slate-800 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Profile Icon */}
            <div className="hidden sm:block">
              <a href="/#">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="profile"
                  className="w-8 h-8 rounded-full object-cover border border-gray-300 dark:border-gray-500" />
              </a>
            </div>



            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-2" >
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

            {/* Darkmode Switch */}
            <div>
              <DarkMode />
            </div>
          </div>


        </div>
      </div>
      {/* lower Navbar */}
      <div className="flex justify-center font-semibold bg-slate-100 dark:bg-slate-800 dark:text-white">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-5 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-3">
              Top Offer
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2  text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
