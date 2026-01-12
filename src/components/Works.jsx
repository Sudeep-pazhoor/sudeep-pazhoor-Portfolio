import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Works() {
  const projects = [
    {
      title: 'Boundless Travelogues',
      description: 'Modern travel website showcasing curated tour packages and destinations across the globe. Features an intuitive interface with detailed itineraries, stunning destination galleries, and seamless booking experience. Designed for smooth browsing and easy customer interaction with responsive design that works perfectly on all devices. Built to inspire wanderlust and make travel planning effortless.',
      tech: ['HTML5', 'CSS', 'JavaScript','Astro','React','GSAP','Bootstrap','Anime.js','Node.js','Three.js'],
      github: null,
      demo: 'https://boundlesstravelogues.com',
      image: '/Boundless.png',
    },
    {
      title: 'FaceIn Technologies Official Website',
      description: 'High-performance corporate website delivering cutting-edge technology solutions. Built with modern frameworks and managed by PM2 for optimal scalability and reliability.',
      tech: ['Astro', 'TypeScript', 'JavaScript', 'HTML5', 'CSS', 'Anime.js', 'Node.js', 'PM2'],
      github: null,
      demo: 'https://www.facein.in/',
      image: '/Facein.jpeg',
    },
    {
      title: 'Online Gaming Platform',
      description: 'Scalable MERN-based gaming platform with user authentication, profile management, and admin controls. Features 1-minute play sessions, pause functionality, and paid continuation options. Includes admin dashboard for game management, user accounts, and secure payment systems.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript'],
      github: 'https://github.com/Sudeep-pazhoor',
      demo: 'https://game-zone-fe.vercel.app/',
      image: '/game.jpeg',
    },
    {
      title: 'ScriptEase',
      description: 'A MERN stack web application designed to provide an advanced screenplay writing and pre-production platform, featuring scene-by-scene storyboarding, comprehensive catalog and crew, director cuts-description and seamless PDF export, all within a modern, intuitive, and collaborative interface for filmmakers. (Currently in working stage - not deployed)',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/Sudeep-pazhoor/ScriptEase',
      demo: 'https://github.com/Sudeep-pazhoor/ScriptEase',
      image: '/ScriptEase.png',
    },
  ];

  const handleCardClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="works">
      <div className="section-container">
        <h2 className="section-title">My Works</h2>
        
        <div className="works-grid">
          {projects.map((project, index) => (
            <div key={index} className="work-card">
              <div 
                onClick={() => handleCardClick(project.demo)}
                className="work-image"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleCardClick(project.demo);
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              
              <div 
                onClick={() => handleCardClick(project.demo)}
                className="work-content-link"
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') handleCardClick(project.demo);
                }}
              >
                <div className="work-content">
                  <h3 className="work-title">{project.title}</h3>
                  <p className="work-description">{project.description}</p>
                  
                  <div className="work-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <div className="work-links">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="work-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub /> GitHub
                      </a>
                    )}
                    {project.demo !== project.github && (
                      <span className="work-link work-link-demo">
                        <FaExternalLinkAlt /> Live Demo
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <a 
          href="https://vercel.com/sudeep-pazhoors-projects" 
          target="_blank" 
          rel="noreferrer" 
          className="view-more-projects"
        >
          <div className="view-more-bar">
            <span className="view-more-text">View More Projects</span>
            <FaExternalLinkAlt className="view-more-icon" />
          </div>
        </a>
      </div>
    </section>
  );
}

export default Works;
