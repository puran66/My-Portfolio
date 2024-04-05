import React from 'react'
import profile from '../../../images/puran.png';
import './home.css'
import Typewriter from 'typewriter-effect';
import pdf from '../../../download/resume.pdf'

const Home = () => {
  return (
    <main className="info">
      <img src={profile} alt="profile" className="profile-img" />
      <div className="info-contain">
        <h4>Hello,</h4>
        <span className="name">I'm <span className="orignalName">Puran</span></span>
        <h3><Typewriter
          options={{
            strings: ['Full', 'Mern'],
            autoStart: true,
            loop: true,
            typingDelay: 2000,
          }}
        />Stack Developer</h3>

        <p>Launching Dreams with Code. Fresher, Focused, and Ready to Innovate. Crafting Tomorrow's Solutions Today. Your Vision, Our Code.</p>
        <button className="cv btn">
          <a href={pdf} download={pdf}>
            <i class="fa-solid fa-file" style={{ marginRight: "8px" }}></i>
            Get My Cv
          </a>
        </button>
      </div>
    </main>
  )
}

export default Home