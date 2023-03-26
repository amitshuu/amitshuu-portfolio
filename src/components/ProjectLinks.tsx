import { IconType } from 'react-icons';

interface IUsefulLink {
  websiteUrl?: string;
  gitRepo?: string;
  youtubeLink?: string;
  websiteIcon?: IconType;
  gitIcon?: IconType;
  youtubeIcon?: IconType;
}

interface IUsefulLinksProps {
  links: IUsefulLink[];
}

const ProjectLinks = ({ links }: IUsefulLinksProps) => {
  return (
    <div className='flex w-full'>
      {links.map((link) => (
        <div
          key={link.websiteUrl || link.gitRepo || link.youtubeLink}
          className='flex'
        >
          {link.gitIcon && (
            <a href={link.gitRepo} target='_blank'>
              <link.gitIcon className='mr-3 text-3xl transition-all duration-100 rounded-lg cursor-pointer text-primary-blue hover:text-primary-blue-hover hover:transform hover:scale-105 ' />
            </a>
          )}
          {link.websiteIcon && (
            <a href={link.websiteUrl} target='_blank'>
              <link.websiteIcon className='mr-3 text-3xl transition-all duration-100 rounded-lg cursor-pointer text-primary-blue hover:text-primary-blue-hover hover:transform hover:scale-105 ' />
            </a>
          )}
          {link.youtubeIcon && (
            <a href={link.youtubeLink} target='_blank'>
              <link.youtubeIcon className='mr-3 text-3xl transition-all duration-100 rounded-lg cursor-pointer text-primary-blue hover:text-primary-blue-hover hover:transform hover:scale-105 ' />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProjectLinks;
