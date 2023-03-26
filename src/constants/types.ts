import { IconType } from 'react-icons';

export interface IService {
  serviceName: string;
  serviceIcon: string;
  serviceDescription: string;
}

export interface IProject {
  projectName: string;
  projectImage: string;
  projectDesc: string;
  projectSubImages?: string[];
  projectCategory: string;
  usefulLinks?: {
    websiteUrl?: string;
    gitRepo?: string;
    youtubeLink?: string;
    websiteIcon?: IconType;
    gitIcon?: IconType;
    youtubeIcon?: IconType;
  }[];
}
