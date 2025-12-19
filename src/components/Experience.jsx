function Experience() {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'FaceIn Technologies',
      period: 'November',
      location: 'Ernakulam, India',
      description: [
        'Engineered scalable web and mobile applications using React.js, Astro, React Native (Expo), MongoDB, Express.js, and Node.js',
        'Collaborated with cross-functional teams to deliver responsive solutions using agile methodologies',
        'Optimized application performance through rigorous testing, debugging, and code optimization'
      ]
    },
    {
      title: 'ME(A)RN Stack Intern',
      company: 'Luminar Technolab',
      period: 'April 2025',
      location: 'Calicut, India',
      description: [
        'Developed responsive web applications using MongoDB, Express.js, Angular/React, and Node.js',
        'Enhanced full-stack development skills with focus on RESTful API integration and database management',
        'Contributed to agile team projects, improving application functionality and user engagement'
      ]
    },
    {
      title: 'Front-End Development Intern',
      company: 'Nestsoft Technologies',
      period: 'May 2023',
      location: 'Kochi, India',
      description: [
        'Created responsive, user-friendly web interfaces using HTML, CSS, and Bootstrap',
        'Ensured cross-browser compatibility and built foundational expertise in responsive design'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-content">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <div className="experience-meta">
                  <span className="experience-period">{exp.period}</span>
                  <span className="experience-location">{exp.location}</span>
                </div>
                <ul className="experience-description">
                  {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
