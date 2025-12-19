import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

function Certificates() {
  const certificatesData = [
     {
      title: 'ME(A)RN Stack Certification',
      provider: 'National Counsil for Technology and Training',
      date: 'May 2025',
      description: 'Presented final-year project at 6th International Conference on Computational Intelligence and Data Technology.',
      link: 'https://drive.google.com/file/d/13GRA_6irsPTEjoIkwHGolJe-o-YJVVLb/view?usp=sharing',
    },
    {
      title: 'ICCIDT Conference',
      provider: '6th ICCIDT Conference',
      date: 'May 2024',
      description: 'Presented final-year project at 6th International Conference on Computational Intelligence and Data Technology.',
      link: 'https://drive.google.com/file/d/1wf3Re-KkAlWAsW4ZZ2zG8trkHRHzoLgr/view?usp=sharing',
    },
    {
      title: 'NESTSOFT Internship',
      provider: 'NESTSOFT',
      date: 'May 2023',
      description: 'Training in Front End Development covering HTML, CSS, and Bootstrap for responsive web design.',
      link: 'https://drive.google.com/file/d/1ggU3yCoEVUcyqWJruwtGM72h-dhY0k2G/view?usp=sharing',
    },
    {
      title: 'JavaScript Certification',
      provider: 'Udemy',
      date: 'August 2023',
      description: 'Earned a NACTET-certified MEAN / MERN Full Stack Development credential covering modern full-stack web technologies.',
      link: 'https://drive.google.com/file/d/1guwtThuxqImUmO-OxARV4boa9uwnjnjV/view?usp=sharing',
    },
    {
      title: 'Google Data Analytics',
      provider: 'Coursera - Google',
      date: 'May 2023',
      description: 'Professional certificate in data analytics covering data collection, analysis, and visualization techniques.',
      link: 'https://drive.google.com/file/d/1NOyTB3kIL_Ruold2sEkDsLsDnjDnB5o8/view?usp=sharing',
    },
    
    {
      title: 'Disney + Hotstar Clone Bootcamp',
      provider: 'Devtown Bootcamp',
      date: '2023',
      description: 'Completed intensive bootcamp focused on building a full-stack Disney+ Hotstar clone application.',
      link: 'https://drive.google.com/file/d/17-IhwswU5f0ClCP3Zild_ZcGSoX7_HFU/view?usp=sharing',
    },
  ];

  return (
    <section id="certificates">
      <div className="section-container">
        <h2 className="section-title">Certificates & Achievements</h2>
        
        <div className="certificates-grid">
          {certificatesData.map((cert, index) => (
            <div key={index} className="certificate-card">
              <div className="certificate-icon">
                <FaAward />
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-provider">{cert.provider}</p>
                <p className="certificate-date">{cert.date}</p>
                <p className="certificate-description">{cert.description}</p>
                
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="certificate-link"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;