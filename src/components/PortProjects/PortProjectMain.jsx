import React from 'react';
import PortProject from './PortProject';


const projectData = [
  {
    title: 'Finance',
    category: 'Web development',
    image: './assets/images/project-1.jpg',
    link: '#'
  },
  {
    title: 'Orizon',
    category: 'Web development',
    image: './assets/images/project-2.png',
    link: '#'
  },
  {
    title: 'Fundo',
    category: 'Web design',
    image: './assets/images/project-3.jpg',
    link: '#'
  },
  {
    title: 'Brawlhalla',
    category: 'Applications',
    image: './assets/images/project-4.png',
    link: '#'
  },
  // Add more project data here
];

const PortProjectMain = () => {
  return (
    <div>
      <PortProject projects={projectData} />
    </div>
  );
};

export default PortProjectMain;
