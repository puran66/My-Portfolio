import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Haeder/Navbar/Navbar';
import About from './components/Main/about/About';
import Contact from './components/Main/contact/Contact';
import Home from './components/Main/home/Home';
import Projects from './components/Main/projects/Projects';
import Skills from './components/Main/skills/Skills';
import { Element } from 'react-scroll';
import UpBtn from './components/scrollUpBtn/UpBtn';

function App() {
  return (
    <>
      <Navbar />
      <Element name="Home">
        <Home />
      </Element>
      <Element name="Skills">
        <Skills />
      </Element>
      <Element name="Projects">
        <Projects />
      </Element>
      <Element name="About">
        <About />
      </Element>
      <Element name="Contact">
        <Contact />
      </Element>
      <Footer />
      <UpBtn />
    </>
  )
}

export default App;
