import { projects_links } from '../constants/constants_links';
import { IProject } from '../constants/types';
import 'react-multi-carousel/lib/styles.css';
import CustomCarousel from './CustomCarousel';
import { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState<IProject | null>(null);

  const handleModal = (info: any) => {
    setIsModalOpen(true);
    setProjectDetails(info);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setProjectDetails(null);
  };

  return (
    <>
      {isModalOpen ? (
        <ProjectModal
          isModalOpen={isModalOpen}
          projectDetails={projectDetails}
          closeModal={closeModal}
        />
      ) : null}
      <section className='py-20 text-gray-600 body-font section-center bg-primary-section'>
        <div className='flex flex-col items-center justify-center'>
          <p className='mb-4 text-4xl text-center text-white lg:text-6xl '>
            Recent <span className='text-primary-blue'>Projects</span>
          </p>
          <p className='w-11/12 m-0 mb-0 text-lg text-center text-gray-300 lg:w-2/4 '>
            In this section, you'll find some of the recent website projects
            I've been working on. Take a closer look and explore the various
            design styles, features, and functionalities that I can bring to
            your next website project.
          </p>
        </div>
        <div className='container flex items-center justify-center px-5 py-16 mx-auto '>
          <div className='relative z-40 w-full pb-10 -m-4 '>
            <CustomCarousel>
              {projects_links.map((project: IProject) => {
                return (
                  <div
                    onClick={() => handleModal(project)}
                    className='max-w-full px-8 transition-transform cursor-pointer hover:transform hover:scale-105'
                  >
                    <div className='max-w-[400px] block w-full border-2 h-full  border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                      <img
                        className='object-fill object-center w-full lg:h-48 md:h-36 h-36'
                        src={project.projectImage}
                        alt='blog'
                      />
                      <div className='h-full bg-dark-bg'>
                        <div className='p-6 '>
                          <h2 className='mb-1 text-xs font-medium tracking-widest text-gray-400 title-font'>
                            FULLSTACK
                          </h2>
                          <h1 className='inline-block mb-3 text-lg font-medium text-white border-b-2 title-font border-primary-blue'>
                            {project.projectName}
                          </h1>
                          <p className='max-w-full mb-3 leading-relaxed text-gray-300 text-elipse-custom md:max-h-20'>
                            {project.projectDesc}
                          </p>
                          <div className='flex flex-wrap items-center flex-grow w-full h-full '>
                            <a className='inline-flex items-center transition-colors duration-200 ease-in-out cursor-pointer text-primary-blue md:mb-2 lg:mb-0'>
                              Learn More
                              <svg
                                className='w-4 h-4 ml-2'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                stroke-width='2'
                                fill='none'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                              >
                                <path d='M5 12h14'></path>
                                <path d='M12 5l7 7-7 7'></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CustomCarousel>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
