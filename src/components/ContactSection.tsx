import React from 'react';
import SocialLinks from './SocialLinks';

const ContactSection = () => {
  return (
    <section className='flex items-center justify-center w-full p-20 px-4 '>
      <div className='container flex flex-col items-center'>
        <h1 className='mb-6 text-5xl text-white md:text-6xl'>
          Contact <span className=' text-primary-blue'>Me</span>
        </h1>
        <p className='mb-10 text-xl text-center text-gray-300'>
          Feel free to get in touch with me using the form below
        </p>
        <div className=' lg:w-1/2 md:w-2/3'>
          <form className='flex flex-wrap -m-2'>
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <label className='leading-7 text-gray-300 text-md'>Name</label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  className='w-full px-3 py-1 text-base leading-8 text-white transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-primary-blue focus:bg-gray-300 focus:text-black'
                />
              </div>
            </div>
            <div className='w-1/2 p-2'>
              <div className='relative'>
                <label className='leading-7 text-gray-300 text-md'>Email</label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  className='w-full px-3 py-1 text-base leading-8 text-white transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-primary-blue focus:bg-gray-300 focus:text-black'
                />
              </div>
            </div>
            <div className='w-full p-2'>
              <div className='relative'>
                <label className='leading-7 text-gray-300 text-md'>
                  Message
                </label>
                <textarea
                  id='message'
                  name='message'
                  className='w-full h-32 px-3 py-1 mb-5 text-base leading-6 text-white transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-primary-blue focus:bg-gray-300 focus:text-black'
                ></textarea>
              </div>
            </div>
            <div className='w-full p-2'>
              <button className='flex px-8 py-2 mx-auto text-lg text-black duration-100 border-0 rounded-lg hover:trasnform hover:scale-110 bg-primary-blue focus:outline-none hover:bg-primary-blue-hover'>
                Contact
              </button>
            </div>
          </form>
          <div className='flex items-center mt-8 text-center border-t-2 border-gray-500 max-w-7xl'>
            <div className='mx-auto mt-4'>
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
