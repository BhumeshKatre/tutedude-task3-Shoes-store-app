import React from 'react';
import LogoImg from '/img/logo.jpg'

const Navbar = () => {
  return (
    <header className='px-10 py-2  bg-gray-900 flex gap-4 rounded-lg'>
      <img
        className='w-12 h-12 rounded-full '
        src={LogoImg} alt="Logo" />
      <nav className='flex gap-4 text-white items-center  '>
        <ul className='flex gap-3 items-center '>
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
