import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { nav_link } from '../constants/constants_links';

type Props = {
  setOpenMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};
const MobileMenu = ({ setOpenMobileNav }: Props) => {
  return (
    <nav className='sticky top-0 z-50 flex flex-col items-center w-full px-4 md:hidden bg-dark-bg'>
      <div className='flex justify-between w-full px-4 py-10'>
        <p className='text-4xl text-white '>amitshuu</p>
        <AiOutlineClose
          onClick={() => setOpenMobileNav(false)}
          className='flex text-4xl text-red-500 cursor-pointer md:hidden hover:text-red-400'
        />
      </div>
      <ul className='flex flex-col items-center justify-center w-full mb-10 bg-primary-section'>
        {nav_link.map((navLink: { name: string }) => {
          return (
            <li
              className='py-4 text-xl text-white cursor-pointer'
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
