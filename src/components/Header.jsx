/* eslint-disable no-unused-vars */
import React from 'react';
import AppContextProvider from '../context/AppContext';

const Header = () => {
  return (
    <div className='flex justify-center w-full bg-blue-500 py-5'>
      <header className=" text-white ">
        <h1 className="text-2xl font-bold">
          Rohan's Blogs
        </h1>
      </header>
    </div>
  );
};

export default Header;
