import React, { useState } from 'react'
import logo from '../../../images/logo.png';
import { Link } from 'react-scroll';
import './navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="nav-sec">
      <div className="nav-items">
        <img src={logo} alt="nav-logo" className="nav-logo" />
        <div className="nav-lists">
          <ul>
            <li className="list-item"> <Link activeClass="active"
              to="Home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}>Home</Link></li>
            <li className="list-item"> <Link activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}>Skills</Link></li>
            <li className="list-item"> <Link activeClass="active"
              to="Projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>Projects</Link></li>
            <li className="list-item"> <Link activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}>About</Link></li>
          </ul>
          <Link activeClass="active"
            to="Contact"
            spy={true}
            smooth={true}
            offset={-20}
            duration={500}><button className="contact btn">
              Contact
            </button></Link>
        </div>
        <i class="fa-solid fa-bars" style={{ color: "#ffffff", display: "none", cursor: "pointer" }} onClick={() => setShow(!show)}></i>
      </div>
      <div className="sideBar" style={show ? { transform: "scaleY(1)" } : { transform: "scale(0)" }} onMouseLeave={() => setShow(false)}>
        <h5 className="menu">
          Menu
          <i class="fa-solid fa-xmark" style={{ color: "#ffffff", cursor: "pointer" }} onClick={() => setShow(!show)}></i>
        </h5>
        <ul>
          <li className="list-item"> <Link activeClass="active"
            to="Home"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}>Home</Link></li>
          <li className="list-item"> <Link activeClass="active"
            to="Skills"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}>Skills</Link></li>
          <li className="list-item"> <Link activeClass="active"
            to="Projects"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}>Projects</Link></li>
          <li className="list-item"> <Link activeClass="active"
            to="About"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}>About</Link></li>
        </ul>
        <Link activeClass="active"
          to="Contact"
          spy={true}
          smooth={true}
          offset={-20}
          duration={500}><button className="contact btn">
            Contact
          </button></Link>
      </div>
    </nav>
  )
}

export default Navbar