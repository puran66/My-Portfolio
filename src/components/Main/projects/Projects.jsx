import React from 'react'
import './projects.css'
import bookStore from '../../../images/bookStore.png'
import netflix from '../../../images/netflix.png'
import shortUrl from '../../../images/shortUrl.png'
import votingApp from '../../../images/votingApp.png'

const Projects = () => {
  return (
    <>
      <section id="projects">
        <h1>Projects</h1>
        <div className="projects-cards">
          <div className="project">
            <img src={bookStore} alt="" />
            <div className="projectDescription">
              <a href="https://github.com/puran66/Book-Store-NodeJs" rel="noreferrer"><h2>BookStore-App <i class="fa-solid fa-arrow-up fa-rotate-by" style={{  '--fa-rotate-angle': '50deg' }}></i> </h2></a>
              <p>Bookstore app with EJS: Dynamic content rendering, user auth, profile management, shopping cart, secure JWT authentication.</p>
            </div>
          </div>
          <div className="project">
            <img src={votingApp} alt="votingApp" />
            <div className="projectDescription">
              <a href="https://github.com/puran66/Voting-app-ReactJs" rel="noreferrer"><h2>Voting-App <i class="fa-solid fa-arrow-up fa-rotate-by" style={{  '--fa-rotate-angle': '50deg' }}></i> </h2></a>
              <p>Voting platform with ReactJS, Redux-Saga: User/admin interfaces, auth routes, CRUD ops for parties, elections, votes.</p>
            </div>
          </div>
          <div className="project">
            <img src={shortUrl} alt="shortUrl" />
            <div className="projectDescription">
              <a href="https://github.com/puran66/ShortURL-NodeJs-Project" rel="noreferrer"><h2>ShortUrl-App <i class="fa-solid fa-arrow-up fa-rotate-by" style={{  '--fa-rotate-angle': '50deg' }}></i> </h2></a>
              <p>URL shortening app with Node.js & EJS: Generates short URLs, redirects users, offers URL management..</p>
            </div>
          </div>
          <div className="project">
            <img src={netflix} alt="netflix" />
            <div className="projectDescription">
              <a href="https://github.com/puran66/Netflix-Clone-" rel="noreferrer"><h2>Netflix-Clone-App <i class="fa-solid fa-arrow-up fa-rotate-by" style={{  '--fa-rotate-angle': '50deg' }}></i> </h2></a>
              <p>Netflix clone app with ReactJS & Tailwind CSS: Mimics Netflix UI, dynamic movie fetching, responsive design, seamless navigation.</p>
            </div>
          </div>
        </div>
        <a href="https://github.com/puran66?tab=repositories" rel="noreferrer"><button className="projectBtn btn">More Projects <i class="fa-solid fa-arrow-up fa-rotate-by" style={{'--fa-rotate-angle': '50deg' }}></i></button></a>
      </section>
    </>
  )
}

export default Projects