import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { nav_link } from '../constants/constants_links';

type Props = {
  setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileMenu = ({ setOpenMobileNav }: Props) => {
  return (
    <nav className='flex md:hidden flex-col sticky w-full z-50 top-0 bg-dark-bg items-center px-2'>
      <div className='flex justify-between py-10 px-5 w-full'>
        <p className=' text-4xl text-white'>amitshuu</p>
        <AiOutlineClose
          onClick={() => setOpenMobileNav(false)}
          className='flex md:hidden text-4xl text-red-500 cursor-pointer hover:text-red-400'
        />
      </div>
      <ul className='flex flex-col justify-center items-center bg-primary-section w-full mb-10'>
        {nav_link.map((navLink: { name: string }) => {
          return (
            <li
              className='py-4 text-xl cursor-pointer text-white'
              key={navLink.name}
            >
              {navLink.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileMenu;
