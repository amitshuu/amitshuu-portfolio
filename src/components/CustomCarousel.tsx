import React from 'react';
import Carousel from 'react-multi-carousel';

interface IProps {
  children: string | JSX.Element | JSX.Element[];
}
const CustomCarousel = ({ children }: { children: any }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      rtl={false}
      className={` py-6 `}
      containerClass={` `}
      dotListClass='dot'
      draggable={false}
      focusOnSelect={false}
      infinite={true}
      itemClass={`flex item-center justify-center`}
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
          partialVisibilityGutter: 20,
        },
        mobile: {
          breakpoint: {
            max: 773,
            min: 0,
          },
          items: 1,
          partialVisibilityGutter: 20,
        },
        tablet: {
          breakpoint: {
            max: 1200,
            min: 768,
          },
          items: 2,
          partialVisibilityGutter: 20,
        },
      }}
      showDots={true}
      sliderClass=''
      slidesToSlide={1}
      swipeable={false}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;