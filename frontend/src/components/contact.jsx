import React from 'react';
import useApplicationData from '../hooks/useApplicationData'
import './contact.scss'

export default function Contact() {
  const { handleInput } = useApplicationData();
  return (
    <div className="contact">
      Feel free to contact me!
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