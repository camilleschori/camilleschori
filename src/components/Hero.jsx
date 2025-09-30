import React, { useState, useEffect } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedText, setDisplayedText] = useState(['']);
  const [showScrollDown, setShowScrollDown] = useState(true);

  const codeLines = [
    { text: 'const developer = {', type: 'code' },
    { text: '  name: "Camille Schori",', type: 'code' },
    { text: '  job: "Full-Stack Developer",', type: 'code' },
    { text: '  skills: ["React", "MySQL", "Laravel"]', type: 'code' },
    { text: '};', type: 'code' },
    { text: '', type: 'empty' },
    { text: 'developer.sayHello();', type: 'code' },
    { text: '// "Hello! Ready to code something awesome!"', type: 'comment' }
  ];

  useEffect(() => {
    if (currentLine < codeLines.length) {
      const timer = setTimeout(() => {
        if (currentChar < codeLines[currentLine].text.length) {
          setDisplayedText(prev => {
            const newText = [...prev];
            newText[currentLine] = codeLines[currentLine].text.slice(0, currentChar + 1);
            return newText;
          });
          setCurrentChar(prev => prev + 1);
        } else {
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setCurrentChar(0);
            setDisplayedText(prev => [...prev, '']);
          }, 500);
        }
      }, 50);

      return () => clearTimeout(timer);
    } else {
      // Reset animation after completion
      setTimeout(() => {
        setCurrentLine(0);
        setCurrentChar(0);
        setDisplayedText(['']);
      }, 3000);
    }
  }, [currentLine, currentChar, codeLines]);

  // Hide scroll down button when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 200) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-greeting">Hey there 👋</h1>
            <h2 className="hero-name">It's Me Camille .<br /> a Full-Stack Developer.</h2>
            <p className="hero-description">
              Based in Iraq, I help businesses and startups transform ideas into powerful digital experiences that drive growth.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get In Touch</a>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="terminal-container">
              <div className="terminal">
                <div className="terminal-header">
                  <div className="terminal-controls">
                    <div className="terminal-button close"></div>
                    <div className="terminal-button minimize"></div>
                    <div className="terminal-button maximize"></div>
                  </div>
                  <div className="terminal-title">camille@macbook-pro: ~/portfolio</div>
                </div>
                
                <div className="terminal-body">
                  <div className="terminal-content">
                    {displayedText.map((line, index) => {
                      const renderSyntaxHighlighting = (text, lineType) => {
                        if (!text) return <span></span>;
                        
                        if (lineType === 'comment') {
                          return <span className="syntax-comment">{text}</span>;
                        }
                        
                        // Split text into parts for syntax highlighting
                        const parts = [];
                        let remainingText = text;
                        let key = 0;
                        
                        // Keywords
                        remainingText = remainingText.replace(/(const|let|var|function)/g, (match) => {
                          parts.push(<span key={key++} className="syntax-keyword">{match}</span>);
                          return `__KEYWORD_${key-1}__`;
                        });
                        
                        // Strings
                        remainingText = remainingText.replace(/"([^"]*)"/g, (match) => {
                          parts.push(<span key={key++} className="syntax-string">{match}</span>);
                          return `__STRING_${key-1}__`;
                        });
                        
                        // Object properties
                        remainingText = remainingText.replace(/(\w+):/g, (match) => {
                          parts.push(<span key={key++} className="syntax-property">{match}</span>);
                          return `__PROPERTY_${key-1}__`;
                        });
                        
                        // Method calls
                        remainingText = remainingText.replace(/(\w+)\.(\w+)\(\)/g, (match, obj, method) => {
                          parts.push(<span key={key++}>{obj}.<span className="syntax-method">{method}</span>()</span>);
                          return `__METHOD_${key-1}__`;
                        });
                        
                        // Split by placeholders and reconstruct
                        const finalParts = [];
                        const textParts = remainingText.split(/(__\w+_\d+__)/);
                        
                        textParts.forEach((part, i) => {
                          const match = part.match(/__(\w+)_(\d+)__/);
                          if (match) {
                            const partIndex = parseInt(match[2]);
                            finalParts.push(parts[partIndex]);
                          } else if (part) {
                            finalParts.push(<span key={`text_${i}`}>{part}</span>);
                          }
                        });
                        
                        return <span>{finalParts}</span>;
                      };

                      return (
                        <div key={index} className="terminal-line">
                          <span className="terminal-prompt">
                            {index === 0 ? '$ ' : '  '}
                          </span>
                          <span className="terminal-text">
                            {renderSyntaxHighlighting(line, codeLines[index]?.type)}
                          </span>
                          {index === currentLine && currentChar <= codeLines[currentLine]?.text?.length && (
                            <span className="terminal-cursor">|</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {showScrollDown && (
            <div className="hero-scroll">
              <span>Scroll Down</span>
              <div className="scroll-arrow"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
