import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      title: 'Web Development',
      price: '$300',
      priceNote: 'Starting from',
      icon: '🌐',
      description: 'Complete web solutions from frontend to backend',
      features: [
        'Responsive Design',
        'React/Laravel Development',
        'Database Integration',
        'SEO Optimization',
        'Performance Optimization',
        'Admin Dashboard',
        'API Development',
        'Security Implementation'
      ],
      color: '#0796fe'
    },
    {
      title: 'Mobile Apps',
      price: '$2500',
      priceNote: 'Starting from',
      icon: '📱',
      description: 'Native and cross-platform mobile applications',
      features: [
        'React Native Development',
        'Cross-Platform Compatibility',
        'Push Notifications',
        'Offline Functionality',
        'App Store Deployment',
        'Real-time Features',
        'Payment Integration',
        'Analytics Integration'
      ],
      color: '#4fb3ff'
    },
    {
      title: 'Systems',
      price: 'Custom',
      priceNote: 'Quote based',
      icon: '⚙️',
      description: 'Enterprise systems and custom software solutions',
      features: [
        'Custom System Design',
        'Database Architecture',
        'API Integrations',
        'Scalable Solutions',
        'Legacy System Migration',
        'Cloud Deployment',
        'System Maintenance',
        'Technical Consulting'
      ],
      color: '#61dafb'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2 className="services-title">Services</h2>
          <p className="services-subtitle">
            Professional development services tailored to bring your ideas to life
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-icon" style={{ color: service.color }}>
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>

              <div className="service-pricing">
                <div className="price-container">
                  <span className="price-note">{service.priceNote}</span>
                  <span className="price" style={{ color: service.color }}>
                    {service.price}
                  </span>
                </div>
              </div>

              <div className="service-features">
                <h4 className="features-title">What's Included:</h4>
                <ul className="features-list">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      <span className="feature-check" style={{ color: service.color }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-action">
                <button 
                  className="btn-service"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}40 100%)`,
                    border: `2px solid ${service.color}40`
                  }}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
