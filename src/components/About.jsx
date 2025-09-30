import React from 'react';
import '../styles/About.css';
import myImage from '../assets/my-image.png';

const About = () => {
  const expertise = [
    // Core Web Technologies
    { name: 'HTML5', level: 95, icon: '🌐', color: '#E34F26' },
    { name: 'CSS3', level: 93, icon: '🎨', color: '#1572B6' },
    { name: 'JavaScript', level: 92, icon: '⚡', color: '#F7DF1E' },
    { name: 'Bootstrap', level: 90, icon: '🅱️', color: '#7952B3' },
    { name: 'jQuery', level: 88, icon: '📝', color: '#0769AD' },
    { name: 'SASS/SCSS', level: 85, icon: '💅', color: '#CC6699' },
    
    // Backend & Frameworks
    { name: 'PHP', level: 95, icon: '🐘', color: '#777BB4' },
    { name: 'Laravel', level: 92, icon: '🔥', color: '#FF2D20' },
    { name: 'Composer', level: 88, icon: '🎼', color: '#885630' },
    { name: 'Artisan CLI', level: 90, icon: '⚒️', color: '#FF2D20' },
    
    // Frontend Frameworks
    { name: 'React.js', level: 93, icon: '⚛️', color: '#61DAFB' },
    { name: 'React Native', level: 88, icon: '📱', color: '#61DAFB' },
    { name: 'Expo', level: 85, icon: '🚀', color: '#000020' },
    { name: 'JSX', level: 90, icon: '🔧', color: '#61DAFB' },
    
    // Databases
    { name: 'MySQL', level: 92, icon: '🐬', color: '#4479A1' },
    { name: 'MongoDB', level: 85, icon: '🍃', color: '#47A248' },
    { name: 'Firebase', level: 87, icon: '🔥', color: '#FFCA28' },
    { name: 'Firestore', level: 85, icon: '💾', color: '#FFCA28' },
    { name: 'phpMyAdmin', level: 88, icon: '🗃️', color: '#6C78AF' },
    
    // Version Control & Deployment
    { name: 'Git', level: 90, icon: '📚', color: '#F05032' },
    { name: 'GitHub', level: 92, icon: '🐙', color: '#181717' },
    { name: 'GitHub Actions', level: 80, icon: '⚙️', color: '#2088FF' },
    
    // Development Tools
    { name: 'VS Code', level: 95, icon: '💻', color: '#007ACC' },
    { name: 'Postman', level: 88, icon: '📮', color: '#FF6C37' },
    { name: 'Chrome DevTools', level: 90, icon: '🔍', color: '#4285F4' },
    { name: 'npm/yarn', level: 85, icon: '📦', color: '#CB3837' },
    
    // Additional Technologies
    { name: 'REST APIs', level: 90, icon: '🔗', color: '#25D366' },
    { name: 'JSON', level: 93, icon: '📄', color: '#000000' },
    { name: 'AJAX', level: 88, icon: '🔄', color: '#0066CC' },
    { name: 'Responsive Design', level: 95, icon: '📐', color: '#FF6B6B' }
  ];

  const experiences = [
    {
      company: 'Freelance',
      position: 'Full-stack Developer',
      period: 'August 2015 - Present',
      type: 'work'
    },
    {
      company: 'Alnimaa Scientific Bureau',
      position: 'Full-stack Developer & Social Media Marketing Manager',
      period: 'Jan 2021 - Present',
      type: 'work'
    },
    {
      company: 'CIS College-Erbil',
      position: 'Lecturer',
      period: 'Jan 2021 - Present',
      type: 'work'
    },
    {
      company: 'Villa Real Estate Co.',
      position: 'Digital Marketing & Programmer',
      period: 'Jul 2023 - Present',
      type: 'work'
    },
    {
      company: 'Black layer Co.',
      position: 'Full-stack Developer',
      period: 'May 2022 - Present',
      type: 'work'
    },
    {
      company: 'Avocado Franchise',
      position: 'Full-stack Developer',
      period: 'May 2023 - Jun 2023',
      type: 'work'
    }
  ];

  const education = [
    {
      institution: 'Salahaddin University-Erbil',
      degree: 'Bachelor\'s degree, Banking, Corporate, Finance, and Securities Law',
      period: 'Sep 2015 - Jun 2019',
      type: 'education'
    },
    {
      institution: 'Udacity',
      degree: 'Front End Development Track Certificate',
      period: 'Issued May 2019',
      type: 'education'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* About Me Section */}
        <div className="about-intro">
          <div className="about-content">
            <div className="about-text">
              <h2 className="about-title">About</h2>
              <p className="about-description">
                I'm a passionate <strong>full-stack developer</strong> specializing in both <strong>web and mobile applications</strong>. 
                With expertise spanning modern frontend frameworks, robust backend systems, and cross-platform mobile development, 
                I create comprehensive digital solutions that drive business growth.
              </p>
              <p className="about-description">
                From React.js and Next.js applications to React Native and Flutter mobile apps, I leverage cutting-edge 
                technologies to deliver exceptional user experiences across all platforms.
              </p>
            </div>
            <div className="about-image">
              <div className="image-container">
                <img 
                  src={myImage} 
                  alt="Camille Schori - Full-Stack Developer" 
                  className="profile-image"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div className="expertise-section">
          <h3 className="about-subsection-title">Technical Expertise</h3>
          <p className="expertise-description">
            Web development technologies and tools I work with to create modern, responsive applications
          </p>
          
          <div className="skills-grid">
            {expertise.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-progress">
                  <div
                    className="skill-progress-bar"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(135deg, ${skill.color}20 0%, ${skill.color}60 100%)`,
                      boxShadow: `0 2px 10px ${skill.color}30`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience and Education Side by Side */}
        <div className="timelines-container">
          {/* Experience Timeline */}
          <div className="timeline-section">
            <h3 className="about-subsection-title">Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-company">{exp.company}</h4>
                    <h5 className="timeline-position">{exp.position}</h5>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Timeline */}
          <div className="timeline-section">
            <h3 className="about-subsection-title">Education</h3>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker education"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-company">{edu.institution}</h4>
                    <h5 className="timeline-position">{edu.degree}</h5>
                    <span className="timeline-period">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
