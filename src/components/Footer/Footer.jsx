import React from "react";
// import footerLogo from "../../assets/logo.png";
// import Banner from "../../assets/website/footer-pattern.jpg";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";



const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Ag",
    link: "/#blog",
  },
];

const Footer = () => {
  return (

    <div className="text-white bg-slate-950 dark:bg-slate-950 dark:text-white h-full">
      <div className="bg-slate-600 h-[0.2px] w-full"></div>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-28 pt-4">
          {/* company details */}

          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl cursor-pointer font-bold sm:text-left text-justify mb-3 flex items-center gap-2">
              <img src="/src/assets/LOGO.png" alt="" className="bg-slate-100 rounded-sm cursor-pointer " width={30} />
              WEB STORE
            </h1>
            <p>
              <h1 className="font-semibold text-gray-500">Registered Office Address:</h1>
              Mr Patra Private Limited,<br />
              Delang, Puri
              <br />
              Odisha, 752016 <br />
              CIN : XXXXXXXX2023PTC041123<br />
              GST : XXXXXXX1234C1Z5<br />
              <p className="flex gap-1  items-center text-center"> Telephone: <h1 className="text-blue-500">8144129955</h1></p>
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">

            <div className="py-8 px-4">
              <h1 className="sm:text-xl text-sm font-bold sm:text-left text-justify mb-3 text-gray-400">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                  <a href="/#">Privacy Policy</a>
                </li>
                <a href="/#">Terms & Conditions</a>
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                  <a href="/#">Return Policy</a>
                </li>
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                  <a href="/#">Shipping Policy</a>
                </li>
                <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                  <a href="/#">FAQ</a>
                </li>
              </ul>
            </div>
            <div>

              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-sm font-bold sm:text-left text-justify mb-3 text-gray-400">
                  Links
                </h1>

                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/#">Privacy Policy</a>
                  </li>
                  <a href="/#">Terms & Conditions</a>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/#">Return Policy</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/#">Shipping Policy</a>
                  </li>
                  <li className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200">
                    <a href="/#">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>


            {/* social links */}

            <div className="py-8 px-4">
              <h1 className="font-semibold  text-gray-400"> Social Links</h1>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <p className="mt-6 mb-4 text-gray-400 font-bold">Mail Us</p>
                <div className="flex items-center gap-3">
                  <FaMapLocationDot />
                  <p>Puri, Odisha</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoCall />
                  <p>+91 8144129955</p>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <FaLocationArrow />
                  amitkumarpatraaa@gmail.com
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="bg-slate-600 h-0.5 w-full"></div>
        <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4">
          <div className="flex items-center gap-2">
            <p className="text-gray-400 text-sm">
              Made with ❤️ by Amit Kumar Patra
            </p>
          </div>

          <div className="flex justify-center items-center py-4">
            <p className="text-gray-400 text-sm">
              © 2024-2025 Webstore.com
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
