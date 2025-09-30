import React from 'react';
import '../styles/CTA.css';

const CTA = () => {
  return (
    <section className="cta" id="cta">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Bring Your Ideas to Life?</h2>
          <p className="cta-subtitle">
            Let's transform your vision into powerful digital solutions that drive results
          </p>
          <p className="cta-description">
            From concept to deployment, I'll work with you to create exceptional web applications, 
            mobile apps, and enterprise systems that exceed your expectations. 
            Join the growing list of satisfied clients who've experienced the difference 
            professional development makes.
          </p>
          
          <div className="cta-features">
            <div className="cta-feature">
              <span className="cta-feature-icon">🚀</span>
              <span className="cta-feature-text">Fast Development</span>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">💎</span>
              <span className="cta-feature-text">Premium Quality</span>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">🔧</span>
              <span className="cta-feature-text">Full Support</span>
            </div>
            <div className="cta-feature">
              <span className="cta-feature-icon">📈</span>
              <span className="cta-feature-text">Scalable Solutions</span>
            </div>
          </div>

          <div className="cta-button-wrapper">
            <a href="#contact" className="cta-button">
              <span>Start Now</span>
              <span className="cta-button-icon">→</span>
            </a>
            <div className="cta-trust">
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>Free consultation</span>
              </div>
              <div className="trust-item">
                <span className="trust-icon">✓</span>
                <span>No commitment required</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
