import React from 'react';
import useApplicationData from '../hooks/useApplicationData';

import './contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  const { handleInput } = useApplicationData();
  return (
    <div className="contact">
      Feel free to contact me!
      <div className="socials">
        <a href="https://twitter.com/alan_mak13">
          <FontAwesomeIcon icon={faTwitter} size="4x" id="twitter"/>
        </a>
        <a href="https://www.linkedin.com/in/alanmak95/">
          <FontAwesomeIcon icon={faLinkedin} size="4x" id="linkedin"/>
        </a>
        <a href="https://www.instagram.com/alan_mak13/">
          <FontAwesomeIcon icon={faInstagram} size="4x" id="instagram"/>
        </a>
      </div>
    <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
      <label>Name
        <input
          type="text"
          name="name"
          onChange = {handleInput}
        />
      </label>
      <label>Email
        <input 
          type="email"
          name="email"
          onChange = {handleInput}
        />
      </label>
      <label>Message
        <input
          type="text"
          name="message"
          onChange = {handleInput}
          id="messageBox"
        />
      </label>
      <button onClick={() => console.log("BEEP")}>
        Submit
      </button>
    </form>
    </div>
  )
}