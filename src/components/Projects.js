import React, { useState } from 'react';
import './Projects.css';
import waveImage from '../png/wave6.svg';
import projectImage1 from '../png/coming.png';
import projectImage2 from '../png/coming.png';
import projectImage3 from '../png/coming.png';
import projectImage4 from '../png/coming.png';
import projectImage5 from '../png/coming.png';
import projectImage6 from '../png/coming.png';
// import Subscription from './Subscription';
// import './Subscription.css';

const Projects = () => {
  const [category, setCategory] = useState('All'); // State to track the selected category

  // Define the project data for different categories
  const projectData = [
    {
      category: 'All',
      projects: [
        { id: 1, image: projectImage1, alt: 'High School in Kent' },
        // { id: 2, image: projectImage2, alt: 'Project 2' },
        // { id: 3, image: projectImage3, alt: 'Project 3' },
        // { id: 4, image: projectImage4, alt: 'Project 4' },
        // { id: 5, image: projectImage5, alt: 'Project 5' },
        // { id: 6, image: projectImage6, alt: 'Project 6' },
      ],
    },
    {
      category: 'Small-Businesses',
      projects: [
        { id: 1, image: projectImage1, alt: 'Small Businesses Project 1' },
        // { id: 2, image: projectImage2, alt: 'Small Businesses Project 2' },
        
      ],
    },
    {
      category: 'Non-Profit',
      projects: [
        { id: 1, image: projectImage3, alt: 'Non-Profit Project 1' },
        // { id: 2, image: projectImage4, alt: 'Non-Profit Project 2' },
        
      ],
    },
    {
      category: 'E-Commerce',
      projects: [
        { id: 1, image: projectImage3, alt: 'E-Commerce Project 1' },
        // { id: 2, image: projectImage4, alt: 'E-Commerce Project 2' },

      ],
    },
    // Add more categories and their projects as needed...
  ];

  // Filter the projects based on the selected category
  const filteredProjects = category === 'All'
    ? projectData.flatMap((data) => data.projects)
    : projectData.find((data) => data.category === category)?.projects || [];

  return (
    <> 
    {/* <div className="wave-wrapper2">
      <img src={waveImage} alt="Consultation Banner" className="wave-img2" />
    </div> */}
    <section className="projects-page">
      <div className="project_wave-container">
        <div className="project_wave-wrapper2">
          <img src={waveImage} alt="Consultation Banner" className="project_wave-img2" />
        </div>
      </div>
      <div className="categories">
        <button
          className={category === 'All' ? 'active' : ''}
          onClick={() => setCategory('All')}
        >
          All
        </button>
        <button
          className={category === 'Small-Businesses' ? 'active' : ''}
          onClick={() => setCategory('Small-Businesses')}
        >
          Small Businesses
        </button>
        <button
          className={category === 'Non-Profit' ? 'active' : ''}
          onClick={() => setCategory('Non-Profit')}
        >
          Non-Profit
        </button>
        <button
          className={category === 'E-Commerce' ? 'active' : ''}
          onClick={() => setCategory('E-Commerce')}
        >
          E-Commerce
        </button>
      </div>
      <p className="project-note">Click on the image to see the projects</p>
      <div className="project-list">
        {filteredProjects.map((project) => (
          <div className="project-item" key={project.id}>
            <a href="" target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.alt} />
            </a>
          </div>
        ))}
      </div>
    </section>
    {/* <Subscription /> */}
    </>
  );
};

export default Projects;
