import React, { useEffect, useState } from 'react';
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
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);

  return (
    <div className='fixed inset-0 z-50 w-full overflow-y-auto'>
      <div className='z-50 flex items-center justify-center min-h-screen'>
        <div
          className='fixed inset-0 z-50 opacity-75 backdrop-blur-xl '
          onClick={closeModal}
        ></div>
        <div className='z-50 w-3/4 p-8 rounded-lg bg-dark-bg'>
          <header className='flex items-center justify-between py-3 border-b-2 border-gray-500'>
            <p className='text-4xl text-white'>Project Details</p>
            <AiOutlineClose
              onClick={closeModal}
              className='text-3xl text-red-500 cursor-pointer hover:text-red-400'
            />
          </header>
          <div className='flex items-center w-full h-full py-10'>
            <div className='max-w-lg max-h-full min-w-max '>
              <img
                className='object-fill max-w-lg mb-6 rounded-lg h-80 '
                src={mainImage}
              />
              <div className='flex justify-between w-full'>
                {projectDetails?.projectSubImages?.map((image: string) => {
                  return (
                    <img
                      onClick={() => setMainImage(image)}
                      className={` object-fill w-24 h-16 rounded-lg cursor-pointer ${
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
            <div className='px-20 '>
              <p className='inline-block mb-4 text-4xl text-white border-b-4 border-primary-blue'>
                {projectDetails?.projectName}
              </p>
              <p className='mb-6 text-gray-300'>
                {projectDetails?.projectDesc}
              </p>
              <div className='border-b-2 border-gray-500'>
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
                <button className='px-8 py-2 text-black transition-all duration-100 rounded-lg hover:bg-primary-blue-hover bg-primary-blue hover:transform hover:scale-105 '>
                  Lets Talk
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
