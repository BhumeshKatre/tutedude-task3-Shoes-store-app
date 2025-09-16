import React from "react";
import LogoImg from "/img/logo.jpg";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className="px-5 py-2  bg-blue-500 flex gap-4 rounded-lg justify-between items-center">
      <div>
        <img className="w-12 h-12 rounded-full " src={LogoImg} alt="Logo" />
      </div>

      <nav className="md:flex gap-4  items-center">
        <CiMenuFries className="md:hidden flex items-center  font-bold text-2xl text-white " />
        <ul className="hidden md:flex gap-3 items-center  text-white uppercase">
          <li>Home</li>
          <li>Product</li>
          <li>Category</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
