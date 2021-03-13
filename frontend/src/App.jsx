import './App.scss';
import Nav from './components/nav'
import Footer from './components/footer'
import Contact from './components/contact'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router >
    <div id="pageContainer">
      <Nav />
      <div id="contentContainer">
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
      </Switch>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
    </Router>
  )
}

export default App;
