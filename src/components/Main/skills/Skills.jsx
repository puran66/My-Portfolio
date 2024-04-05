import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id="skills">
        <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <h5>HTML</h5>
          <p id='progress-80'>80%</p>
          <div className="proccess-box">
            <div className="proccess-bar" id="HTML"></div>
          </div>
        </div>
        <div className="skill">
          <h5>CSS3</h5>
          <p id='progress-75'>75%</p>
          <div className="proccess-box">
            <div className="proccess-bar" id="CSS3"></div>
          </div>
        </div>
        <div className="skill">
          <h5>Bootstrap</h5>
          <p id='progress-70'>70%</p>
          <div className="proccess-box">
            <div className="proccess-bar" id="Bootstrap"></div>
          </div>
        </div>
        <div className="skill">
          <h5>Tailwind</h5>
          <p id='progress-75'>75%</p>
          <div className="proccess-box">
            <div className="proccess-bar" id="Tailwind"></div>
          </div>
        </div>
        <div className="skill">
          <h5>JavaScript</h5>
          <p id='progress-75'>75%</p>
          <div className="proccess-box">
            <div className="proccess-bar" id="JavaScript"></div>
          </div>
        </div>
        <div className="skill">
          <h5>ReactJs</h5>
          <p id='progress-85'>85%</p>
          <div className="proccess-box">
            <div className="proccess-bar" id="ReactJs"></div>
          </div>
        </div>
        <div className="skill">
          <h5>NodeJS</h5>
          <p id='progress-85'>85%</p>
          <div className="proccess-box">
            <div className="proccess-bar" id="NodeJS"></div>
          </div>
        </div>
        <div className="skill">
          <h5>MongoDB</h5>
          <p id='progress-70'>70%</p>
          <div className="proccess-box">
            <div className="proccess-bar" id="MongoDB"></div>
          </div>
        </div>
        <div className="skill">
          <h5>ExpressJS</h5>
          <p id='progress-80'>80%</p>
          <div className="proccess-box">
            <div className="proccess-bar" id="ExpressJS"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills