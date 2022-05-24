//jshint esversion:9

import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className='fixed top-0 left-0 w-screen p-4'>
      <ul className='flex justify-between '>
        <div className='flex space-x-10 items-center'>
          <li className='text-xl'>
            <Link to='#'>LOGO</Link>
          </li>
          <li>
            <Link to='#'>ABOUT</Link>
          </li>
          <li>
            <Link to='#'>COMMUNITY</Link>
          </li>
          <li>
            <Link to='#'>LOCATION</Link>
          </li>
          <li>
            <Link to='#'>OUR MENU</Link>
          </li>
          <li>
            <Link to='#'>RECEPIES</Link>
          </li>
        </div>
        <div className='flex space-x-10 items-center'>
          <li>
            <Link to='#'>CONTACT</Link>
          </li>
          <li>
            <Link to='#'>LOGIN</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
};
