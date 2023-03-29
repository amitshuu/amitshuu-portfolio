import { services_links } from '../constants/constants_links';
import { IService } from '../constants/types';

const ServicesSection = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center w-full px-10 py-24 bg-dark-bg'>
        <p className='mb-16 text-5xl text-center text-white xl:text-7xl'>
          My <span className='text-primary-blue'>Services</span>
        </p>
        <div className='flex flex-wrap w-full gap-10 justify-evenly xl:flex-nowrap'>
          {services_links.map((service) => {
            return (
              <article className='container flex flex-col items-center max-w-sm px-4 py-6 transition-transform cursor-pointer hover:transform hover:scale-105 rounded-2xl bg-primary-section'>
                <img
                  className='w-20 h-20 mb-2'
                  src={service.serviceIcon}
                  alt='service icon'
                />
                <p className='mb-4 text-xl text-white border-b-2 border-primary-blue'>
                  {service.serviceName}
                </p>
                <p className='max-w-xs text-lg text-center text-gray-300 '>
                  {service.serviceDescription}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default ServicesSection;
