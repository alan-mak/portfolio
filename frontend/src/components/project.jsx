import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLink } from '@fortawesome/free-solid-svg-icons';


import Help from '../img/helpmehelpyou.png';
import Lite from '../img/litevote.png';
import Scheduler from '../img/scheduler.png';
import Speer from '../img/speer.png';
import Tiny from '../img/tinyapp.png';
import Tweeter from '../img/tweeter.png';

import './project.scss'

export default function Projects() {
  return(
    <div id="projects">
      <h1 id="projectsHead">Projects</h1>
      <div className="containContainer">
        <div className="indProject">
          <img src={Help} alt="HelpMeHelpYou" />
          <div className="overlay">
            <div className="description">
              <h1>HelpMeHelpYou</h1>
              <p>A community helping application built using  React, Ruby on Rails and Express.js</p>
              <div className="link">
                <a href="https://github.com/alan-mak/HelpMeHelpYou">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="indProject">
          <img src={Lite} alt="LiteVote" />
          <div className="overlay">
            <div className="description">
            <h1>LiteVote</h1>
              <p>A full stack rank voting application that sends the results through email to the poll of the creator built using   jQuery and Express.js</p>
              <div className="link">
                <a href="https://github.com/alan-mak/LiteVote">
                <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="indProject">
          <img src={Scheduler} alt="Scheduler" />
          <div className="overlay">
            <div className="description">
              <h1>Scheduler</h1>
              <p>A single page appointment scheduling application responsible for booking, deleting and editing appointments built  using React and Express.js</p>
              <div className="link">
                <a href="https://github.com/alan-mak/scheduler">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
                <a href="https://alan-mak-scheduler.netlify.app/">
                  <FontAwesomeIcon icon={faLink} size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="indProject">
          <img src={Speer} alt="Speer Frontend" />
          <div className="overlay">
            <div className="description">
              <h1>Speer</h1>
              <p>A mock frontend site used to advertise a music subscription service built using React</p>
              <div className="link">
                <a href="https://github.com/alan-mak/SpeerFrontend">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="indProject">
          <img src={Tweeter} alt="Tweeter" />
          <div className="overlay">
            <div className="description">
              <h1>Tweeter</h1>
              <p>A single page mock Twitter application built using jQuery and Express.js</p>
              <div className="link">
                <a href="https://github.com/alan-mak/tweeter">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="indProject">
          <img src={Tiny} alt="Tiny" />
          <div className="overlay">
            <div className="description">
              <h1>Tiny App</h1>
              <p>An URL shortening application built using nodeJS and Express.js</p>
              <div className="link">
                <a href="https://github.com/alan-mak/tinyapp">
                  <FontAwesomeIcon icon={faGithub} size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}