import './App.scss';
import Nav from './components/nav'
import Footer from './components/footer'
import Contact from './components/contact'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Landing from './components/landing'


function App() {
  return (
    <div id="pageContainer">
      <Nav />
      <div id="contentContainer">
        <Landing />
        {/* <About /> */}
        {/* <Skills /> */}
        {/* <Projects /> */}
        <Contact />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App;
