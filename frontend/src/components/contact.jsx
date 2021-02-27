import React from 'react';
import useApplicationData from '../hooks/useApplicationData'


export default function Contact() {
  const { handleInput } = useApplicationData();
  return (
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
        />
      </label>
      <button type="submit">
        Submit
      </button>

    </form>
  )
}