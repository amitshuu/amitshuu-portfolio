import React from 'react';
import Pagination from './Pagination';
import ProjectCard from './ProjectCard';
import Carousel from 'react-multi-carousel';
import { projects_links } from '../constants/constants_links';
import { IProject } from '../constants/types';

const ProjectsSection = () => {
  return (
    <section className='bg-primary-section w-full text-center section-center py-14 '>
      <div className='flex flex-col justify-center items-center'>
        <p className='text-4xl lg:text-6xl text-center mb-4 text-white'>
          Recent <span className='text-primary-blue'>Projects</span>
        </p>
        <p className='text-gray-300 text-center m-0 text-lg mb-6  w-11/12 lg:w-2/4 '>
          In this section, you'll find some of the recent website projects I've
          been working on. Take a closer look and explore the various design
          styles, features, and functionalities that I can bring to your next
          website project.
        </p>
      </div>
      <div className='relative pb-10'>
        <Carousel
          additionalTransfrom={0}
          arrows={true}
          rtl={false}
          autoPlaySpeed={3000}
          className={`py-5`}
          containerClass={` z-10 `}
          dotListClass='dot'
          draggable={false}
          focusOnSelect={false}
          infinite={true}
          itemClass={`flex item-center justify-center`}
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderDotsOutside={true}
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 773,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1200,
                min: 768,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          shouldResetAutoplay
          showDots={true}
          sliderClass=''
          slidesToSlide={1}
          swipeable
        >
          {projects_links.map((projects: IProject) => {
            return <ProjectCard {...projects} />;
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsSection;
