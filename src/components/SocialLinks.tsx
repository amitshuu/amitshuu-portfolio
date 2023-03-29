import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
const SocialLinks = () => {
  return (
    <article className='flex items-center justify-center w-full mt-6'>
      <p className='hidden text-2xl text-white xl:block'>Connect with me on:</p>
      <div className='flex px-6 '>
        <AiFillLinkedin className='p-4 mx-2 text-6xl transition-all duration-100 border-2 rounded-full cursor-pointer text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-black hover:transform hover:scale-110 ' />
        <AiFillGithub className='p-4 mx-2 text-6xl transition-all duration-100 border-2 rounded-full cursor-pointer text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-black hover:transform hover:scale-110 ' />
        <BsWhatsapp className='p-4 mx-2 text-6xl transition-all duration-100 border-2 rounded-full cursor-pointer text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-black hover:transform hover:scale-110 ' />
        <MdEmail className='p-4 mx-2 text-6xl transition-all duration-100 border-2 rounded-full cursor-pointer text-primary-blue border-primary-blue hover:bg-primary-blue hover:text-black hover:transform hover:scale-110 ' />
      </div>
    </article>
  );
};

export default SocialLinks;
