import shuki_hero_image from '../assets/shuki_hero_image.png';
import SocialLinks from './SocialLinks';

const HeroSection = () => {
  return (
    <section className='flex section-center'>
      <div className='flex flex-col relative z-10 flex-wrap w-full m-0 justify-center items-center xl:items-start pt-10 '>
        <p className='py-5 text-5xl  text-white'>
          Hello, <span className='text-primary-blue'>I'm</span>
        </p>
        <p className=' text-4xl xl:text-5xl pb-5 text-white'>Amit Shukrun</p>
        <p className='  xl:text-4xl text-white text-3xl text-center xl:text-start'>
          And i'm a{' '}
          <span className='text-primary-blue'>Fullstack Web Developer</span>
        </p>
        <p className='text-xl py-6 text-gray-300 text-center xl:text-start'>
          Greetings! I'm Amit Shukrun, a Fullstack Web Developer. <br /> I'm
          thrilled to present my portfolio to you and I look forward <br /> to
          working with you on your next project.
        </p>
        <div className='flex flex-col items-center xl:items-start '>
          <div className='flex flex-row mb-5'>
            <button className='hover:bg-primary-blue-hover mr-5 text-black bg-primary-blue py-3 px-3 rounded-lg transition-colors duration-300'>
              Download CV
            </button>
            <button className='hover:bg-primary-blue-hover text-black bg-primary-blue py-3 px-3 rounded-lg transition-colors duration-300'>
              Let's Talk
            </button>
          </div>
          <div className='w-full flex justify-center'>
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className='flex '>
        <img
          className='hidden xl:block max-w-lg'
          src={shuki_hero_image}
          alt='Hero Img'
        />
      </div>
    </section>
  );
};

export default HeroSection;
