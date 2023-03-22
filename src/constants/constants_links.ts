import webDevIcon from '../assets/optimization.png';
import optimization from '../assets/optimization2.png';
import shopify from '../assets/shopify.png';

import SneakersShop from '../assets/Products.png';
import MessengerApp from '../assets/Main.png';
import Yaniv from '../assets/KidsInMotion.png';
export const nav_link = [
  {
    name: 'Home',
  },
  {
    name: 'About',
  },
  {
    name: 'Projects',
  },
  {
    name: 'Contact',
  },
];

export const services_links = [
  {
    serviceName: 'Custom Web Development',
    serviceIcon: webDevIcon,
    serviceDescription:
      '  I build custom websites tailored to your needs, from simple to complex designs. My responsive and engaging designs showcase your brand with a user-friendly interface.',
  },
  {
    serviceName: 'Shopify E-Commerce Development',
    serviceIcon: shopify,
    serviceDescription:
      'Ill create your Shopify e-commerce site from store setup to product listing, payment and shipping options configuration. Additionally Ill add unique design elements and features to make your store stand out.',
  },
  {
    serviceName: 'Website Maintenance and Optimization',
    serviceIcon: optimization,
    serviceDescription:
      'I provide ongoing website maintenance and optimization services, fixing bugs, improving speed and performance, to ensure your site runs efficiently and meets your business goals.',
  },
];

export const projects_links = [
  {
    projectName: 'Sneakers Shop',
    projectDesc:
      'This is a sample application that demonstrates an E-commerce website using the MEAN stack.',
    projectImage: SneakersShop,
  },
  {
    projectName: 'Messenger App',
    projectDesc:
      'This is a sample application that demonstrates a whatsapp web application using the MERN stack.',
    projectImage: MessengerApp,
  },
  {
    projectName: 'Kids In Motion',
    projectDesc:
      'Check out Yaniv new landing page built with simplicity and elegance in mind to showcase their unique service.',
    projectImage: Yaniv,
  },
];
