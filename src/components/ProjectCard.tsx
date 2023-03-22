import React from 'react';
import test from '../assets/Products.png';
import { IProject } from '../constants/types';

const ProjectCard = ({ projectName, projectDesc, projectImage }: IProject) => {
  return (
    <article className='block  max-w-[350px] bg-dark-bg border border-gray-100 rounded-lg shadow mx-6 transition-transform hover:transform-cpu hover:scale-105 duration-200 cursor-pointer h-full'>
      <img
        className='rounded-t-lg w-full min-h-[225px] object-fill'
        src={projectImage}
        alt=''
      />
      <div className='p-5 w-full'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight border-b-2 border-primary-blue inline-block text-white dark:text-white'>
            {projectName}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-300 dark:text-gray-400 h-20 text-elipse-custom '>
          {projectDesc}
        </p>
        <a
          href='#'
          className='inline-flex items-center px-6 py-2 text-sm text-center text-black bg-primary-blue rounded-lg hover:bg-primary-blue-hover transition-colors duration-100'
        >
          Read more
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
