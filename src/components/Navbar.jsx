import React from 'react';
import LogoImg from '/img/logo.jpg'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  return (
    <header className='px-10 py-2  bg-gray-900 flex gap-4 rounded-lg sm:justify-between items-center'>
        <CiMenuFries className='md:hidden flex items-center text-white font-extrabold text-2xl ' />
      <img
        className='w-12 h-12 rounded-full '
        src={LogoImg} alt="Logo" />
      <nav className=' md:flex gap-4 text-white items-center   '>
        <ul className='hidden md:flex gap-3 items-center '>
          <li>Home</li>
          <li>Product</li>
          <li>Category</li>
          <li>Contact</li>
        </ul>
        
      

      </nav>
    </header>
  );
}

export default Navbar;
