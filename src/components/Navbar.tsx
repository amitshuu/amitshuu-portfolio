import { nav_link } from '../constants/constants_links';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import MobileMenu from './MobileMenu';
import { useMobile } from '../hooks/customHooks';

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  useMobile(() => setOpenMobileNav(false));

  return (
    <>
      {openMobileNav ? (
        <MobileMenu setOpenMobileNav={setOpenMobileNav} />
      ) : null}

      <nav
        className={`${
          openMobileNav
            ? 'hidden'
            : 'flex justify-between py-10 sticky top-0 z-50  bg-dark-bg md:relative items-center section-center px-2'
        }`}
      >
        <div className='flex w-full justify-between px-2 lg:px-0 '>
          <p className='text-4xl text-white'>amitshuu</p>
          <AiOutlineMenu
            onClick={() => setOpenMobileNav(true)}
            className='flex md:hidden text-4xl text-primary-blue cursor-pointer hover:text-primary-blue-hover'
          />
        </div>
        <ul className='text-lg px-10 cursor-pointer hidden md:flex'>
          {nav_link.map((navLink: { name: string }) => {
            return (
              <li
                className={`hover:text-primary-blue px-5 ${
                  navLink.name === 'Home' ? 'text-primary-blue' : 'text-white'
                }`}
                key={navLink.name}
              >
                {navLink.name}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
