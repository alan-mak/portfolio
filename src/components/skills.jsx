import React, { useState } from 'react';

import CSS from '../img/css.png';
import Express from '../img/express.png';
import HTMLpic from '../img/html.png';
import Javascript from '../img/javascript.png';
import Jquery from '../img/jQuery.png';
import Matlab from '../img/matlab.png';
import MongoDB from '../img/mongoDB.png';
import NodeJS from '../img/nodeJS.png';
import Postgresql from '../img/postgresql.png';
import Python from '../img/python.png';
import Rails from '../img/rails.png';
import Reactpic from '../img/react.png';
import Ruby from '../img/ruby.png';
import Sass from '../img/sass.png';
import Git from '../img/git.png';
import Octocat from '../img/octocat.png';

import './skills.scss';

export default function Skills(props) {
  const [tab, setTab] = useState(0)

  const skillCat = ['Languages', 'Web Frontend', 'Web Backend', 'Databases', 'Source Code Management'];

  const toggleTab = (index) => {
    setTab(index);
  }

  return(
    <div id="skills">
      <h1 id="skillsHead">SKILLS</h1>
      <div className="tab">
        <div className="skillsTab">
          {skillCat.map((skill, index) => 
            <button
              key={index}
              onClick={() => toggleTab(index) }
              className={tab === index ? 'head active-head' : 'head'}
            >
              <h2>{skill}</h2>
            </button>
            )
          }
        </div>
        <div className="contentsTab">
          <div className={tab===0 ? "content active-content" : "content"} >
            <div className="icons">
              <img src={Javascript} alt="javascript" />
              <img src={Ruby} alt="ruby" />
              <img src={Matlab} alt="matlab" />
              <img src={Python} alt="python" />
            </div>
          </div>
          <div className={tab===1 ? "content active-content" : "content"} >
            <div className="icons">
              <img src={Reactpic} alt="react" />
              <img src={HTMLpic} alt="html" />
              <img src={Jquery} alt="jQuery" />
              <img src={Sass} alt="sass" />
              <img src={CSS} alt="css" />
            </div>
          </div>
          <div className={tab===2 ? "content active-content" : "content"} >
            <div className="icons">
              <img src={Express} alt="express" />
              <img src={Rails} alt="ruby on rails" />
              <img src={NodeJS} alt="nodeJS" />
            </div>
          </div>
          <div className={tab===3 ? "content active-content" : "content"} >
            <div className="icons">
              <img src={Postgresql} alt="postgresql" />
              <img src={MongoDB} alt="mongoDB" />
            </div>
          </div>
          <div className={tab===4 ? "content active-content" : "content"} >
            <div className="icons">
              <img src={Octocat} alt="octocat" />
              <img src={Git} alt="git" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}