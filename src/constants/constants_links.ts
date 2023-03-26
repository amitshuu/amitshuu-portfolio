//Icons
import webDevIcon from '../assets/optimization.png';
import optimization from '../assets/optimization2.png';
import shopify from '../assets/shopify.png';
import { AiFillGithub } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';

//Sub Images

//- SneakerShop
import SneakersShop from '../assets/Products.png';
import Admin from '../assets/ProjectSubImages/SneakerShop/Admin.png';
import cart_orders from '../assets/ProjectSubImages/SneakerShop/cart_orders.png';
import home_page from '../assets/ProjectSubImages/SneakerShop/home_page.png';
import Header from '../assets/ProjectSubImages/SneakerShop/Header.png';

//- Messenger App
import MessengerApp from '../assets/Main.png';
import ContactInfoTab from '../assets/ProjectSubImages/MessengerApp/ContactInfoTab.png';
import ContactRequest from '../assets/ProjectSubImages/MessengerApp/ContactRequest.png';
import Darkmode from '../assets/ProjectSubImages/MessengerApp/Darkmode.png';
import Main from '../assets/ProjectSubImages/MessengerApp/Main.png';
import Profile from '../assets/ProjectSubImages/MessengerApp/Profile.png';

//KidsInMotion

import Contact from '../assets/ProjectSubImages/KidsInMotion/Contact.png';
import OurActivities from '../assets/ProjectSubImages/KidsInMotion/OurActivities.png';
import OurCustomer from '../assets/ProjectSubImages/KidsInMotion/OurCustomers.png';
import OurGallery from '../assets/ProjectSubImages/KidsInMotion/OurGallery.png';
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
      'This is a sample application that demonstrates an E-commerce website using the MEAN stack. The application loads products a MongoDB database and displays them. Users can add products to their cart, purchase products and even rate them! Users can choose exactly which product they want with helpful filtering functionality.',
    projectImage: SneakersShop,
    projectSubImages: [SneakersShop, Admin, cart_orders, home_page, Header],
    projectCategory: 'Fullstack Developement',
    usefulLinks: [
      {
        websiteUrl: 'https://sneakers-shop.onrender.com/',
        gitRepo: 'https://github.com/amitshuu/sneakers-shop',
        gitIcon: AiFillGithub,
        websiteIcon: TbWorldWww,
      },
    ],
  },
  {
    projectName: 'Messenger App',
    projectDesc:
      'This is a sample application that demonstrates a whatsapp web application using the MERN stack. This web appliaction allow you to search for contacts, add them to your own contact list and start a new chat with them! You can send messages, images, videos, and emojis! Messenger App is a Real Time chat application which getting updated in live using web sockets!',
    projectImage: MessengerApp,
    projectSubImages: [Main, Darkmode, ContactRequest, ContactInfoTab, Profile],
    projectCategory: 'Fullstack Developement',
    usefulLinks: [
      {
        youtubeLink: 'https://www.youtube.com/watch?v=A-z_C_AhsHo',
        gitRepo: 'https://github.com/amitshuu/messenger-app',
        gitIcon: AiFillGithub,
        youtubeIcon: BsYoutube,
      },
    ],
  },
  {
    projectName: 'Kids In Motion',
    projectDesc:
      'I recently designed and built a landing page for a client who runs a business offering kids activities centered around dance. The landing page showcases the unique features of the business and promotes it to potential customers. It includes engaging images and information about the various activities on offer, as well as a clear call-to-action to encourage visitors to sign up. Overall, the landing page provides an effective and visually appealing representation of the client business and its services.',
    projectImage: Yaniv,
    projectSubImages: [Yaniv, Contact, OurActivities, OurCustomer, OurGallery],
    projectCategory: 'Frontend Developement',
    usefulLinks: [
      {
        websiteUrl: '',
        websiteIcon: TbWorldWww,
      },
    ],
  },
];
