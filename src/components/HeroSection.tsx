import shuki_hero_image from '../assets/shuki_hero_image.png';
import SocialLinks from './SocialLinks';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section className='flex flex-col xl:flex-row section-center'>
      <div className='relative z-10 flex flex-col flex-wrap items-center justify-center w-full pt-10 m-0 xl:items-start '>
        <p className='py-5 text-5xl text-white'>
          Hello, <span className='text-primary-blue'>I'm</span>
        </p>
        <p className='pb-5 text-4xl text-white xl:text-5xl'>Amit Shukrun</p>
        <p className='text-3xl text-center text-white xl:text-4xl xl:text-start'>
          And i'm a{' '}
          <span className='text-primary-blue'>
            <Typewriter
              loop={false}
              cursor={true}
              words={['Fullstack Web Developer.']}
            />
          </span>
        </p>
        <p className='py-6 text-xl text-center text-gray-300 xl:text-start'>
          Greetings! I'm Amit Shukrun, a Fullstack Web Developer. <br /> I'm
          thrilled to present my portfolio to you and I look forward <br /> to
          working with you on your next project.
        </p>
        <div className='flex flex-col items-center xl:items-start '>
          <div className='flex flex-row mb-5'>
            <button className='px-3 py-3 mr-5 text-black transition-all duration-100 rounded-lg hover:bg-primary-blue-hover bg-primary-blue hover:trasnform hover:scale-105'>
              Download CV
            </button>
            <button className='px-3 py-3 mr-5 text-black transition-all duration-100 rounded-lg hover:bg-primary-blue-hover bg-primary-blue hover:transform hover:scale-105 '>
              Let's talk
            </button>
          </div>
          <div className='flex justify-center w-full mb-6 xl:mb-0'>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center pt-10 '>
        <img
          className='max-w-sm xl:max-w-lg xl:block animate-up-down'
          src={shuki_hero_image}
          alt='Hero Img'
        />
      </div>
    </section>
  );
};

export default HeroSection;
