import React, { useState } from 'react';

export default function Contact() {
  const [email, useEmail] = useState("");
  const [name, useName] = useState("");
  const [message, useMessage] = useState("");

  return (
    <form autoComplete="off">
      <input
        type="text"
        name="name"
        value={useName}
        placeholder="eg. John Smith"
      />
      <input 
        type="email"
        name="email"
        value={useEmail}
        placeholder="eg. JSmith@example.com"
      />
      <input
        type="text"
        name="message"
        value={useMessage}
        placeholder="Send me a message"
      />
      <button
        type="submit"
        onClick={(event) => event.preventDefault()}
      >Submit
      </button>

    </form>
  )
}