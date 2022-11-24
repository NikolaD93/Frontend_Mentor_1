import React, { useState } from "react";
import logo from "../assets/logo.svg";
import open from "../assets/icon-menu.svg";
import close from "../assets/icon-menu-close.svg";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between align-center relative">
      <img className="w-[60px] ss:w-[80px]" src={logo} alt="logo" />

      <ul className="list-none space-x-14 sm:flex hidden justify-end items-center flex-1">
        <li>
          <a
            href="#"
            className="text-[18px] text-grayishBlue hover:text-softOrange"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[18px] text-grayishBlue hover:text-softOrange"
          >
            New
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[18px] text-grayishBlue hover:text-softOrange"
          >
            Popular
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[18px] text-grayishBlue hover:text-softOrange"
          >
            Trending
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-[18px] text-grayishBlue hover:text-softOrange"
          >
            Categories
          </a>
        </li>
      </ul>

      <div className="sm:hidden flex justify-end items-start">

        <img onClick={()=> setToggle((prev) => !prev)} src={toggle ? close : open } alt="menu" />

        <div className={`${toggle ? "flex" : "hidden"} p-6 bg-offWhite w-[100%] h-[100vh] absolute top-10 left-20`}>
          <ul className="list-none flex flex-col justify-start items-start flex-1 pt-12 space-y-8">
            <li><a href="#">Home</a></li>
            <li><a href="#">New</a></li>
            <li><a href="#">Popular</a></li>
            <li><a href="#">Trending</a></li>
            <li><a href="#">Categories</a></li>
          </ul>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
