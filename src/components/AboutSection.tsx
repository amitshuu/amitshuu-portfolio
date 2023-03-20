import React from 'react';
import about from '../assets/about_me_image.png';
const AboutSection = () => {
  return (
    <section className='flex justify-between items-center py-10 bg-primary-section mt-20 section-center w-full'>
      <div className='flex'>
        <img
          className='hidden xl:block max-w-xl mr-24'
          src={about}
          alt={'About img'}
        />
      </div>
      <div className='flex flex-col xl:items-start items-center '>
        <p className='text-white text-6xl mb-3'>
          About <span className='text-primary-blue'>Me</span>
        </p>
        <p className='text-gray-300 xl:text-xl xl:w-full xl:text-start font-normal text-md w-5/6 text-center mb-5'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque maxime
          magnam dignissimos aperiam perspiciatis nam earum, autem eum
          voluptatum praesentium necessitatibus, cupiditate, nemo quisquam
          itaque odit voluptatem eius? Nisi, accusamus? Aperiam, quas. At veniam
          quas, eos minus maxime quis odit impedit sint reiciendis vitae
          quibusdam. Cumque, doloribus delectus porro tenetur inventore
          reiciendis quod iure nam neque. Labore, dolorem aspernatur?
          Recusandae?
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
