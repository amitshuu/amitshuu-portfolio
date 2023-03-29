import { projects_links } from '../constants/constants_links';
import { IProject } from '../constants/types';
import 'react-multi-carousel/lib/styles.css';
import CustomCarousel from './CustomCarousel';
import { useEffect, useState } from 'react';
import ProjectModal from './ProjectModal';
import ProjectCard from './ProjectCard';

const ProjectsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectDetails, setProjectDetails] = useState<IProject | null>(null);

  const handleModal = (projectInfo: IProject) => {
    setIsModalOpen(true);
    setProjectDetails(projectInfo);
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
        <div className='container flex items-center justify-center px-5 py-16 mx-auto max-w-7xl '>
          <div className='relative z-40 w-full pb-10 -m-4 '>
            <CustomCarousel>
              {projects_links.map((project: IProject) => {
                return (
                  <ProjectCard project={project} handleModal={handleModal} />
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
