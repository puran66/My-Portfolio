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
            <a href='https://www.instagram.com/puran__3333?igsh=d2luNDNieXE4aWEx&utm_source=qr' className="linkdin" rel="noreferrer">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/puran66" className="gitHub" rel="noreferrer">
              <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.instagram.com/puran__3333?igsh=d2luNDNieXE4aWEx&utm_source=qr" className="instagram" rel="noreferrer">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCb9yrhqNkzga-_JdC-ffyEQ" className="youtube" rel="noreferrer">
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
