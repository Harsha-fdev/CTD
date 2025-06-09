import React from 'react';
import LOGO from '../assets/LOGO.jpg';
import { GoSearch } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoCalendarNumberOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className='w-full flex items-center justify-between px-6 py-1 
                    bg-[rgba(1, 44, 70, 0.6)] backdrop-blur-md shadow-md fixed top-0 z-50'>
      <img src={LOGO} alt="logo" className='w-16 h-16 p-2 rounded-2xl' />
      
      {/* <div className="relative flex-grow max-w-md mx-4">
        <input type="search" placeholder='Search' 
          className='text-white bg-transparent border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-400 px-4 py-2 w-full' />
        <GoSearch className='absolute right-3 top-3 text-white' />
      </div> */}

      <div className='flex items-center gap-5 text-white text-xl'>
        <IoMdNotificationsOutline className='text-black'/>
        <IoCalendarNumberOutline className='text-black'/>
      </div>
    </div>
  );
};

export default Header;