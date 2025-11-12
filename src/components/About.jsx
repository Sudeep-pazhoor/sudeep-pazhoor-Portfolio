function About() {
  const skills = [
    { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Express', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  ];

  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <p className="about-text">
            I'm a <strong>Full Stack Developer</strong> from Kerala, India, with a passion for creating elegant 
            solutions to complex problems. With expertise in the <strong>MERN stack</strong> (MongoDB, Express.js, 
            React.js, Node.js), I specialize in building responsive, user-friendly web applications that deliver 
            exceptional experiences.
          </p>
          
          <p className="about-text">
            Currently seeking opportunities to contribute to innovative projects and grow as a developer. 
            My approach combines <strong>clean code</strong>, <strong>modern design principles</strong>, and 
            <strong> performance optimization</strong> to create applications that not only look great but also 
            perform flawlessly across all devices.
          </p>

          <div className="skills-marquee-container">
            <div className="skills-marquee">
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="skill-item">
                  <img src={skill.logo} alt={skill.name} />
                  <p className="skill-name">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
