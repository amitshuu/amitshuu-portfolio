import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { BsWhatsapp } from 'react-icons/bs';
const SocialLinks = () => {
  return (
    <article className='flex mt-6 items-center w-full'>
      <p className='hidden lg:block text-2xl text-white'>
        Connect with me on:{' '}
      </p>
      <div className='flex px-6 '>
        <AiFillLinkedin className='text-primary-blue text-6xl p-4  mx-2 border-2 border-primary-blue hover:bg-primary-blue transition-colors duration-300 cursor-pointer  hover:text-black rounded-full ' />
        <AiFillGithub className='text-primary-blue text-6xl p-4  mx-2 border-2 border-primary-blue hover:bg-primary-blue transition-colors duration-300 cursor-pointer hover:text-black rounded-full ' />
        <BsWhatsapp className='text-primary-blue text-6xl p-4  mx-2 border-2 border-primary-blue hover:bg-primary-blue transition-colors duration-300 cursor-pointer hover:text-black rounded-full  ' />
      </div>
    </article>
  );
};

export default SocialLinks;
