import React from 'react'
import './footer.css'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <>
      <section id="footer">
        <img src={logo} alt="logo" className="logo" />
        <div className="social">
          <h4>Please Follow Me</h4>
          <div className="socialNetwork">
            <a href='https://www.linkedin.com/in/puran-vishwakarma-a64819285/' className="linkdin" target="_blank">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/puran66" className="gitHub" target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/puran-vishwakarma-a64819285/" className="instagram" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/puran-vishwakarma-a64819285/" className="youtube" target="_blank">
              <i class="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
        <p>&copy; Made By : Puran Vishwakarma</p>
      </section>
    </>
  )
}

export default Footer