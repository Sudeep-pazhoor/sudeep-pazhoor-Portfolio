import { FaArrowRight, FaDownload } from 'react-icons/fa';
import { useState } from 'react';

function Hero() {
  const [imageError, setImageError] = useState(false);
  const imagePath = import.meta.env.BASE_URL + 'Sudeep.jpeg';

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-image">
          {!imageError ? (
            <img 
              src={imagePath}
              alt="Sudeep P S"
              loading="eager"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="hero-image-fallback">
              <span>SP</span>
            </div>
          )}
        </div>
        
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">Sudeep P S</h1>
        <h2 className="hero-title">Full Stack Developer</h2>
        <p className="hero-tagline">
          Passionate MERN Stack Developer crafting elegant, scalable web solutions. 
          Specializing in React.js, Node.js, and modern web technologies to build 
          exceptional digital experiences that make a real impact.
        </p>
        
        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary">
            Get In Touch <FaArrowRight />
          </a>
          <a href="/Sudeep P S - Resume.pdf" download className="btn btn-secondary">
            <FaDownload /> Download Resume
          </a>
        </div>
      </div>
      <br /><br /><br />
      <div className="scroll-indicator" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span>Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
