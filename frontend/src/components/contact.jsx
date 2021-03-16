import React from 'react';

import './contact.scss';

import Linkedin from '../img/linkedin.png'
import Email from '../img/email.png'
import Twitter from '../img/twitter.png'
import Gitdark from '../img/github.png'

export default function Contact() {

  return (
    <div id="contact">
      <h1 id="contactHead">CONTACT</h1>
      <div className="contactContainer">
        <h1>Thanks For Visiting!<br />Get in touch</h1>
        <div className="socials">
          <div>
            <img src={Twitter} alt="Twitter"
              onClick={() => window.open("https://www.twitter.com/alan_mak13")} />
            <img src={Linkedin} alt="Linkedin" onClick={() => {
              window.open("https://www.linkedin.com/in/alanmak95/")
            }}/>
          </div>
          <div>
            <a href="mailto: mak_alan@icloud.com">
              <img src={Email} alt="email"/>
            </a>
            <img src={Gitdark} alt="Github" onClick={() => {
              window.open("https://www.github.com/alan-mak")
            }}/>
          </div>
        </div>
      </ div>
    </div>
  )
}
