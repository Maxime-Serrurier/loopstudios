'use client';

// Libraries
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

function Navbar() {
  // States
  const [nav, setNav] = useState(false);

  // Methods
  const handleClick = () => setNav(!nav);

  return (
    <>
      <nav
        className={`${
          nav ? 'text-primaryWhite' : 'text-primaryBlack'
        } container flex justify-between items-center p-8 mx-auto font-alata sticky`}
      >
        <div className='z-10'>
          <p className='text-3xl font-alata font-bold'>loopstudios</p>
        </div>

        {/* menu */}
        <ul className='hidden md:flex gap-x-8'>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>

        {/* Hamburger */}
        <div
          onClick={handleClick}
          className='md:hidden z-10'
        >
          {!nav ? (
            <Bars3Icon className='h-8 w-8' />
          ) : (
            <XMarkIcon className='h-10 w-10' />
          )}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-screen bg-primaryBlack flex flex-col justify-center items-start uppercase font-josefin gap-y-8 text-3xl px-8'
          }
        >
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
