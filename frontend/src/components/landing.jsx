import React from 'react';

import './landing.scss';

import Toronto from '../img/toronto.png'

export default function Landing () {
  return(
    <div id="landing">
      <img src={Toronto} alt="background" />
      <h1><strong>Hello I am Alan<br/>Full-Stack Web Developer</strong></h1>
    </div>
  )
}