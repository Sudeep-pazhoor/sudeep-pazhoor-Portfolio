import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const skills = [
  { name: 'HTML', logo: 'https://simpleicons.org/icons/html5.svg', percent: 80 },
  { name: 'CSS', logo: 'https://simpleicons.org/icons/css3.svg', percent: 80 },
  { name: 'Bootstrap', logo: 'https://simpleicons.org/icons/bootstrap.svg', percent: 80 },
  { name: 'React', logo: 'https://simpleicons.org/icons/react.svg', percent: 75 },
  { name: 'MongoDB', logo: 'https://simpleicons.org/icons/mongodb.svg', percent: 80 },
  { name: 'Astro', logo: 'https://simpleicons.org/icons/astro.svg', percent: 70 }, // Assume percent
  { name: 'Anime.js', logo: 'https://simpleicons.org/icons/animejs.svg', percent: 70 }, // Assume
  { name: 'React Native (Expo)', logo: 'https://simpleicons.org/icons/expo.svg', percent: 70 }, // Assume
  { name: 'C', logo: 'https://simpleicons.org/icons/c.svg', percent: 60 }, // Assume
  { name: 'MySQL', logo: 'https://simpleicons.org/icons/mysql.svg', percent: 60 },
  { name: 'JavaScript', logo: 'https://simpleicons.org/icons/javascript.svg', percent: 60 },
];

function Home() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillBoxes = skillsRef.current.children;
    gsap.from(skillBoxes, { opacity: 0, stagger: 0.2, duration: 1 });

    // Right-to-left infinite marquee animation
    gsap.to(skillsRef.current, {
      x: '-100%',
      duration: 20,
      repeat: -1,
      ease: 'linear',
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % (skills.length * 150)), // Seamless loop
      },
    });
  }, []);

  return (
    <section>
      <h1>Sudeep P S - MEARN Stack Developer</h1>
      <p>Seeking a career in the technical field. I possess knowledge of programming and web design languages, including: HTML, CSS, React, JavaScript, and MongoDB. As a fresher, I have built small projects related to games and website models, showcasing my skills and passion...</p>
      <p>Currently working as Software Developer at Facein Technologies.</p>
      <a href="/Sudeep P S -Resume.pdf" download>Download Resume</a>
      <div ref={skillsRef} style={{ display: 'flex', gap: '20px', whiteSpace: 'nowrap', overflow: 'hidden' }}>
        {[...skills, ...skills].map((skill, i) => ( // Duplicate for seamless loop
          <div key={i} className="card" style={{ minWidth: '150px', textAlign: 'center' }}>
            <img src={skill.logo} alt={skill.name} style={{ width: '50px' }} />
            <p>{skill.name}</p>
            <p>{skill.percent}%</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;