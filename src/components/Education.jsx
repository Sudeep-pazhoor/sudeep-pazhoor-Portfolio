function Education() {
  const education = [
    {
      degree: 'B.Tech Computer Science',
      institution: 'Adi Shankara Institute Of Engineering And Technology',
      university: 'A.P.J. Abdul Kalam Kerala Technological University',
      year: '2020 - 2024',
      grade: 'SGPA: 7.44',
    },
    {
      degree: 'Higher Secondary Computer Science',
      institution: 'Govt. Boys Higher Secondary School Manjeri',
      university: 'Kerala Higher Secondary Exam Board',
      year: '2018 - 2020',
      grade: 'Percentage: 86.6%',
    },
    {
      degree: 'High School (10th)',
      institution: 'Govt. Boys Higher Secondary School Manjeri',
      university: 'Kerala State Board',
      year: '2018',
      grade: 'Percentage: 93.3%',
    },
  ];

  return (
    <section id="education">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-university">{edu.university}</p>
              <div className="education-details">
                <span className="education-year">{edu.year}</span>
                <span className="education-grade">{edu.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
