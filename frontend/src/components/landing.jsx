import React from 'react';

import './landing.scss';

import Toronto from '../img/toronto.png'

export default function Landing () {
  return(
    <div id="landing">
      <img src={Toronto} alt="background" />
      <div id="first">
        <h1><strong>Hello my name is Alan</strong></h1>
      </div>
      <div id="second">
        <h1><strong>Full-Stack Web Developer</strong></h1>
      </div>
    </div>
  )
}