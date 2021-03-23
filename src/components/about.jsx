import React from 'react';
import Alan from '../img/alan.png'

import './about.scss'

export default function About(props) {
  return (
    <div id="about">
      <h1>ABOUT ME</h1>
      <div className="information">
        <img src={Alan} alt="Profile Pic"/>
        <p>I am a Toronto based web developer with an interest in front end design. I studied at Ryerson University in Toronto for my Bachelors and Masters of Engineering in Aerospace Engineering. I then went to Lighthouse Lab's Web Development Bootcamp in 2020. <br/><br/>
        <div><i>Checkout my projects </i><a href="/projects">HERE</a></div></p>
      </div>
    </div>
  )
}