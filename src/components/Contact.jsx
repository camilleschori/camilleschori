import React from 'react';
import '../styles/Contact.css';
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn
} from 'react-icons/md';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp 
} from 'react-icons/fa';

const Contact = () => {

  const contactCards = [
    {
      icon: <MdEmail />,
      label: 'Email',
      value: 'info@camilleschori.com',
      link: 'mailto:info@camilleschori.com',
      color: '#4285f4'
    },
    {
      icon: <MdPhone />,
      label: 'Phone',
      value: '+964 772 944 4377',
      link: 'tel:+9647729444377',
      color: '#34a853'
    },
    {
      icon: <MdLocationOn />,
      label: 'Location',
      value: 'Erbil, Kurdistan, Iraq',
      link: null,
      color: '#ea4335'
    },
    {
      icon: <FaLinkedinIn />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/camilleschori',
      link: 'https://linkedin.com/in/camilleschori',
      color: '#0077b5'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/camilleschori',
      link: 'https://github.com/camilleschori',
      color: '#333333'
    },
    {
      icon: <FaTwitter />,
      label: 'Twitter',
      value: '@camilleschori',
      link: 'https://twitter.com/camilleschori',
      color: '#1da1f2'
    },
    {
      icon: <FaInstagram />,
      label: 'Instagram',
      value: '@camilleschori',
      link: 'https://instagram.com/camilleschori',
      color: '#e4405f'
    },
    {
      icon: <FaFacebookF />,
      label: 'Facebook',
      value: 'facebook.com/camilleschori',
      link: 'https://facebook.com/camilleschori',
      color: '#1877f2'
    },
    {
      icon: <FaWhatsapp />,
      label: 'WhatsApp',
      value: '+964 772 944 4377',
      link: 'https://wa.me/9647729444377',
      color: '#25d366'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start your next project? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-cards">
            {contactCards.map((card, index) => (
              card.link ? (
                <a
                  key={index}
                  href={card.link}
                  className="contact-detail"
                  target={card.link.startsWith('http') ? '_blank' : '_self'}
                  rel={card.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={`${card.label} - ${card.value}`}
                >
                  <div
                    className="detail-icon"
                    style={{
                      color: card.color,
                      backgroundColor: `${card.color}14`,
                      borderColor: `${card.color}33`
                    }}
                  >
                    {card.icon}
                  </div>
                  <div className="detail-label">{card.label}</div>
                  <div className="detail-value">{card.value}</div>
                </a>
              ) : (
                <div key={index} className="contact-detail">
                  <div
                    className="detail-icon"
                    style={{
                      color: card.color,
                      backgroundColor: `${card.color}14`,
                      borderColor: `${card.color}33`
                    }}
                  >
                    {card.icon}
                  </div>
                  <div className="detail-label">{card.label}</div>
                  <div className="detail-value">{card.value}</div>
                </div>
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
