import React from 'react';

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
  return(
    <div id="skills">
      <div className="language">
        <h1>Languages</h1>
        <div className="icon">
          <img src={Javascript} alt="javascript" />
          <img src={Ruby} alt="ruby" />
          <img src={Matlab} alt="matlab" />
          <img src={Python} alt="python" />
        </div>
      </div>
      <div className="frontend">
        <h1>Web Frontend</h1>
        <div className="icon">
          <img src={Reactpic} alt="react" />
          <img src={HTMLpic} alt="html" />
          <img src={Jquery} alt="jQuery" />
          <img src={Sass} alt="sass" />
          <img src={CSS} alt="css" />
        </div>
      </div>
      <div className="backend">
        <h1>Web Backend</h1>
        <div className="icon">
          <img src={Express} alt="express" />
          <img src={Rails} alt="ruby on rails" />
          <img src={NodeJS} alt="nodeJS" />
        </div>
      </div>
      <div className="database">
        <h1>Databases</h1>
        <div className="icon">
          <img src={Postgresql} alt="postgresql" />
          <img src={MongoDB} alt="mongoDB" />
        </div>
      </div>
      <div className="scm">
        <h1>Source Code Management </h1>
        <div className="icon">
          <img src={Octocat} alt="octocat" />
          <img src={Git} alt="git" />
        </div>
      </div>
    </div>
  )
}