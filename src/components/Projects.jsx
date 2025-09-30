import React, { useState } from 'react';
import '../styles/Projects.css';
import { projects, projectCategories } from '../data/projects';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('web');

  const filteredProjects = projects.filter(project => project.category === activeTab);

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Projects</h2>
          <p className="projects-subtitle">
            Showcasing successful solutions across web, mobile, and enterprise systems
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="tabs-container">
          {projectCategories.map((category) => (
            <button
              key={category.id}
              className={`tab-button ${activeTab === category.id ? 'active' : ''}`}
              onClick={() => setActiveTab(category.id)}
            >
              <span className="tab-icon">{category.icon}</span>
              <span className="tab-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="project-logo">
                <img 
                  src={project.logo} 
                  alt={`${project.name} Logo`}
                  className="logo-image"
                />
              </div>
              
              <div className="project-info">
                <h3 className="project-name">{project.name}</h3>
                <div className="project-details">
                  <div className="project-location">
                    <span className="location-icon">📍</span>
                    <span>{project.location}</span>
                  </div>
                  <div className="project-type">
                    <span className="type-icon">🏷️</span>
                    <span>{project.type}</span>
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Projects Count */}
        <div className="projects-count">
          <span className="count-text">
            Showing {filteredProjects.length} {projectCategories.find(cat => cat.id === activeTab)?.name} projects
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
