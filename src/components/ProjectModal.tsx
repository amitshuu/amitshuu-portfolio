import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiFillGithub } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';
import test from '../assets/Products.png';
import { IProject } from '../constants/types';
import ProjectLinks from './ProjectLinks';

interface IProps {
  isModalOpen: boolean;
  projectDetails: IProject | null;
  closeModal: VoidFunction;
}
const ProjectModal = ({ isModalOpen, projectDetails, closeModal }: IProps) => {
  const [mainImage, setMainImage] = useState(projectDetails?.projectImage);

  const modalRef = useRef<HTMLDivElement>(null);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  }
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  console.log(isModalOpen);

  return (
    <div className='fixed inset-0 z-50 w-full h-screen '>
      <div className='z-50 flex items-center justify-center '>
        <div
          onClick={handleClick}
          className='fixed inset-0 flex items-center justify-center opacity-100 bg-primary-section'
        >
          <div
            className='container z-50 h-full max-w-2xl p-8 overflow-y-auto lg:max-w-5xl lg:h-auto bg-dark-bg'
            ref={modalRef}
          >
            <header className='flex justify-between w-full border-b-2 border-gray-400'>
              <p className='text-4xl text-white'>Project Details</p>
              <AiOutlineClose
                onClick={closeModal}
                className='text-3xl text-red-500 cursor-pointer hover:text-red-400'
              />
            </header>
            <section className='flex flex-col items-center justify-center w-full py-8 lg:gap-10 lg:flex-row '>
              <div className='flex flex-col w-full lg:w-2/4 '>
                <img
                  src={mainImage}
                  className='object-fill w-full mb-6 rounded-md h-72 md:h-80'
                  alt='project image'
                />
                <div className='flex justify-between w-full mb-10 lg:mb-0 '>
                  {projectDetails?.projectSubImages?.map((image: string) => {
                    return (
                      <img
                        src={image}
                        className={` cursor-pointer object-cover w-1/6 rounded-md h-14 ${
                          image === mainImage
                            ? 'border-2 border-primary-blue'
                            : null
                        }`}
                        alt='project gallery'
                        onClick={() => setMainImage(image)}
                      />
                    );
                  })}
                </div>
              </div>
              <div className='w-full lg:w-2/4'>
                <p className='inline-block mb-4 text-4xl text-white border-b-4 border-primary-blue'>
                  {projectDetails?.projectName}
                </p>
                <p className='mb-6 text-gray-300'>
                  {projectDetails?.projectDesc}
                </p>
                <div className='border-b-2 border-gray-500 text-start'>
                  <div className='grid w-full grid-cols-3 mb-4 text-white whitespace-nowrap'>
                    Category:
                    <span className=''>{projectDetails?.projectCategory}</span>
                  </div>
                  <div className='grid items-center w-full grid-cols-3 mb-5 text-white whitespace-nowrap'>
                    Useful Links:
                    <span className='flex'>
                      <div className='flex items-center'>
                        {projectDetails?.usefulLinks && (
                          <ProjectLinks links={projectDetails.usefulLinks} />
                        )}
                      </div>
                    </span>
                  </div>
                </div>
                <div className='flex items-center justify-between w-full mt-6'>
                  <p className='text-white text-md'>Feel free to contact me!</p>
                  <button className='px-6 py-2 text-black transition-all duration-100 rounded-lg xl:px-8 hover:bg-primary-blue-hover bg-primary-blue hover:transform hover:scale-105 '>
                    Lets Talk
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;

{
  /* <div className='z-50 flex flex-wrap w-full h-full p-8 rounded-lg md:w-3/4 bg-dark-bg '>
<header className='flex items-center justify-between w-full py-3 border-b-2 border-gray-500'>
  <p className='text-4xl text-white'>Project Details</p>
  <AiOutlineClose
    onClick={closeModal}
    className='text-3xl text-red-500 cursor-pointer hover:text-red-400'
  />
</header>
<div className='flex flex-col h-full max-w-full py-8 lg:items-center xl:flex-row'>
  <div className='w-full h-full xl:max-h-full xl:max-w-lg xl:min-w-max'>
    <img
      className='object-fill w-full mb-10 rounded-lg h-80 '
      src={mainImage}
    />
    <div className='flex justify-between w-full overflow-hidden '>
      {projectDetails?.projectSubImages?.map((image: string) => {
        return (
          <img
            onClick={() => setMainImage(image)}
            // className={` object-cover mb-6 max-w-[70px] md:max-w-[84px] min-h-[75px] lg:max-w-[86px] lg:h-14 xl:mb-0 rounded-lg cursor-pointer ${
            //   image === mainImage
            //     ? ' border-2 border-primary-blue-darker'
            //     : null
            // }`}
            className={` object-cover w-16 h-12 mb-6 lg:w-20 lg:h-20  xl:mb-0 rounded-lg cursor-pointer ${
              image === mainImage
                ? ' border-2 border-primary-blue-darker'
                : null
            }`}
            src={image}
          />
        );
      })}
    </div>
  </div>
  <div className='w-full h-full text-center xl:px-10 xl:text-start'>
    <p className='inline-block mb-4 text-4xl text-white border-b-4 border-primary-blue'>
      {projectDetails?.projectName}
    </p>
    <p className='mb-6 text-gray-300'>
      {projectDetails?.projectDesc}
    </p>
    <div className='border-b-2 border-gray-500 text-start'>
      <div className='grid w-full grid-cols-3 mb-4 text-white whitespace-nowrap'>
        Category:
        <span className=''>{projectDetails?.projectCategory}</span>
      </div>
      <div className='grid items-center w-full grid-cols-3 mb-5 text-white whitespace-nowrap'>
        Useful Links:
        <span className='flex'>
          <div className='flex items-center'>
            {projectDetails?.usefulLinks && (
              <ProjectLinks links={projectDetails.usefulLinks} />
            )}
          </div>
        </span>
      </div>
    </div>
    <div className='flex items-center justify-between w-full mt-6'>
      <p className='text-white text-md'>Feel free to contact me!</p>
      <button className='px-6 py-2 text-black transition-all duration-100 rounded-lg xl:px-8 hover:bg-primary-blue-hover bg-primary-blue hover:transform hover:scale-105 '>
        Lets Talk
      </button>
    </div>
  </div> */
}
