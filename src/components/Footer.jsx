import React from 'react';
import load from '../helpers/ImageLoader'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col lg:flex-row justify-around items-center bg-footer px-8 py-6">
      <div className="w-full lg:w-1/2 flex flex-col">
        <h6 className="font-header text-base lg:text-lg text-justify font-bold">
          Developed by Jayaku Briliantio
        </h6>
        <h6 className="font-header text-sm lg:text-base text-justify font-semibold">
          from {' '}
          <a className="hover:underline" href="https://www.linkedin.com/company/codenitiva">Codenitiva</a>
        </h6>
        <div className="w-full lg:w-1/2 flex flex-row justify-left mt-4">
          {socialMediaLink.map(({ name, alt, link }, index) => (
            <a className="mr-4" href={link} alt={name}>
              <img
                src={load(name)}
                alt={alt}
              />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex flex-col items-left lg:items-end">
        <img
          className="w-44 lg:w-64"
          src={load("brand.logo")}
          alt="This is Covidfo"
        />
        <h6 className="font-normal">
          Copyright ©{' '}
          <a className="hover:underline" href="https://www.linkedin.com/company/codenitiva">Codenitiva</a>, 
          Inc. All rights reserved
        </h6>
      </div>
    </footer>
  );
};

const socialMediaLink = [
  {
    name: 'github',
    alt: 'Jayaku Briliantio\'s GitHub',
    link: 'https://github.com/ukayaj620/'
  },
  {
    name: 'instagram',
    alt: 'Jayaku Briliantio\'s Instagram',
    link: 'https://www.instagram.com/jayakubriliantio/'
  },
  {
    name: 'facebook',
    alt: 'Jayaku Briliantio\'s Facebook',
    link: 'https://www.facebook.com/jayaku.briliantio/'
  },
  {
    name: 'linkedin',
    alt: 'Jayaku Briliantio\'s Linkedin',
    link: 'https://www.linkedin.com/in/neartojayakubriliantio/'
  }
]

export default Footer;
