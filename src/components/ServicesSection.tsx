import { services_links } from '../constants/constants_links';
import { IService } from '../constants/types';

const ServicesSection = () => {
  return (
    <section className='flex flex-col justify-center bg-dark-bg items-center py-20 px-10'>
      <p className='text-5xl xl:text-6xl mb-16 text-white text-center'>
        My <span className='text-primary-blue'>Services</span>
      </p>
      <div className='flex flex-wrap lg:flex-nowrap lg:w-full w-full '>
        {services_links.map((service: IService) => {
          return (
            <article className='block  text-center bg-primary-section md:mx-4 px-3 py-10 mb-10 rounded-2xl w-full hover:transform hover:scale-105 transition-transform cursor-pointer'>
              <img
                className='w-16 h-16 text-center mb-2 m-auto'
                src={service.serviceIcon}
                alt='Service Icon'
              />
              <p className='max-w-full lg:max-w-customMaxWidth xl:max-w-full  text-white text-lg font-semibold text-center mb-3  border-b-2 border-primary-blue inline-block '>
                {service.serviceName}
              </p>
              <p className=' text-gray-300 text-lg text-center'>
                {service.serviceDescription}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
