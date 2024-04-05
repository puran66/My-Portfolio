import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
      <section id="about">
        <div className="about">
          <h1>About Me</h1>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 👋 Hi, I'm Puran, a BCA student and aspiring full-stack web developer passionate about crafting innovative web solutions. With a strong foundation in HTML, CSS, JavaScript, and ReactJs, gained through my journey at Red & White Multimedia Education, I'm dedicated to creating exceptional user experiences. Currently focused on refining my skills and exploring new technologies, I'm excited about continuous learning and growth in web development. Let's connect and collaborate to explore the dynamic world of web development together! 🚀 Feel free to reach out for discussions, idea exchange, or potential collaborations.</p>
          <div className="socialNetwork">
            <a href='https://www.linkedin.com/in/puran-vishwakarma-a64819285/' className="linkdin" rel="noreferrer">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/puran66" className="gitHub" rel="noreferrer">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/puran-vishwakarma-a64819285/" className="instagram" rel="noreferrer">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/puran-vishwakarma-a64819285/" className="youtube" rel="noreferrer">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <div className="education">
          <h2>Education</h2>
          <div className="collage">
            <p><span>Swarrnim Startup & Innovation University</span><span>2023</span></p>
            <p id='collage'>Bachelor of Computer Applications (BCA)</p>
          </div>
          <div className="course">
            <p><span>Red & White Multimedia Education</span><span>2023</span></p>
            <p id='course'>Full Stack Development</p>
          </div>
          <div className="school">
            <p><span>GYANJYOT VIDYALAYA - GODADRA SURAT</span><span>2020-2022</span></p>
            <p id='school'>Higher Secondary Education (12th) in Commerce</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About