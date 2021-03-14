import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Nav from './components/nav'
import Footer from './components/footer'
import Contact from './components/contact'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Landing from './components/landing'

import './App.scss';

function App() {
  return (
  <Router>
    <div id="pageContainer">
      <div id="contentContainer">
        <Switch>
          <Route path="/about">
            <Nav />
            <About />
          </Route>
          <Route path="/skills">
            <Nav />
            <Skills />
          </Route>
          <Route path="/projects">
            <Nav />
            <Projects />
          </Route>
          <Route path="/">
            <Nav logic={true}/>
            <Landing />
          </Route>

        </Switch>
        {/* <Contact /> */}
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  </Router>
  )
}

export default App;
