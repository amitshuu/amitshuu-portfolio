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
            : 'flex justify-between py-10 sticky top-0 z-50  bg-dark-bg md:relative items-center section-center'
        }`}
      >
        <div className='flex justify-between w-full px-4 lg:px-0 '>
          <p className='text-4xl text-white'>amitshuu</p>
          <AiOutlineMenu
            onClick={() => setOpenMobileNav(true)}
            className='flex text-4xl cursor-pointer md:hidden text-primary-blue hover:text-primary-blue-hover'
          />
        </div>
        <ul className='hidden px-10 text-lg cursor-pointer md:flex'>
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
