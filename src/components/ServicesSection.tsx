import { services_links } from '../constants/constants_links';
import { IService } from '../constants/types';

const ServicesSection = () => {
  return (
    <>
      <section className='flex flex-col items-center justify-center px-10 py-20 bg-dark-bg'>
        <p className='mb-16 text-5xl text-center text-white xl:text-6xl'>
          My <span className='text-primary-blue'>Services</span>
        </p>
        <div className='flex flex-wrap w-full lg:flex-nowrap lg:w-full'>
          {services_links.map((service: IService) => {
            return (
              <article className='block w-full px-3 py-10 mb-10 text-center transition-transform cursor-pointer bg-primary-section md:mx-4 rounded-2xl hover:transform hover:scale-105'>
                <img
                  className='w-16 h-16 m-auto mb-2'
                  src={service.serviceIcon}
                  alt='Service Icon'
                />
                <p className='inline-block max-w-[250px] md:max-w-full mb-3 text-lg font-semibold text-white border-b-2 border-primary-blue lg:max-w-[225px] xl:max-w-full'>
                  {service.serviceName}
                </p>
                <p className='m-0 text-lg text-gray-300'>
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
