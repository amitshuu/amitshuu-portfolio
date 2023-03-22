import React from 'react';
import about from '../assets/about_me_image2.png';
// import test from '../assets/dev-interface.png';
// import test from '../assets/optimization.png';
const AboutSection = () => {
  return (
    <section className='flex justify-between items-center py-10 bg-primary-section mt-20 section-center w-full '>
      <div className='flex'>
        <img
          className='hidden xl:block max-w-lg'
          src={about}
          alt={'About img'}
        />
      </div>
      <div className='flex flex-col items-center'>
        <p className='text-white text-4xl lg:text-6xl py-4 '>
          About <span className='text-primary-blue'>Me</span>
        </p>
        <p className='text-gray-300  md:text-lg xl:w-3/4 text-center  font-normal text-md mb-5'>
          Hi, my name is Amit, and I'm a 23-year-old full-stack web developer
          with expertise in both front-end and back-end development. I
          specialize in a range of technologies, including JavaScript,
          TypeScript, React, Node.js, REST Api, GraphQL and MongoDB, and I'm
          always eager to learn more. When I'm not working on web development
          projects, I enjoy surfing and hitting the gym to stay active and
          healthy. I'm passionate about building user-friendly web applications
          and love collaborating with others to bring ideas to life. Whether I'm
          designing a sleek front-end interface or working on complex back-end
          functionality, I'm always striving to deliver high-quality results.
        </p>
      </div>
      {/* <img src={test} className=' w-80' /> */}
    </section>
  );
};

export default AboutSection;
