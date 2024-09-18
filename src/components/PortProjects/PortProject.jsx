import React, { useState } from 'react';
import './PortProject.css';
import { IonIcon } from '@ionic/react'; // Assuming you're using ionic-react for ion-icons

const PortProject = ({ projects }) => {
  const [filter, setFilter] = useState('All');
  const [selectFilter, setSelectFilter] = useState('All');

  const categories = ['All', 'Web design', 'Applications', 'Web development'];

  const handleFilterClick = (category) => {
    setFilter(category);
    setSelectFilter(category);
  };

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Filter list */}
        <ul className="filter-list">
          {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button
                className={filter === category ? 'active' : ''}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Filter select box (for smaller screens) */}
        <div className="filter-select-box">
          <button className="filter-select" onClick={() => setSelectFilter(!selectFilter)} data-select>
            <div className="select-value" data-select-value>
              {selectFilter}
            </div>
            <div className="select-icon">
              <IonIcon name="chevron-down" />
            </div>
          </button>

          {selectFilter && (
            <ul className="select-list">
              {categories.map((category, index) => (
                <li key={index} className="select-item">
                  <button onClick={() => handleFilterClick(category)}>
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Project List */}
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li key={index} className="project-item active" data-filter-item data-category={project.category}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon name="eye-outline" />
                  </div>
                  <img src={project.image} alt={project.title} loading="lazy" />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PortProject;
