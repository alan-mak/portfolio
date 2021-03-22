import React from 'react';
import './footer.scss'

export default function Footer() {
  const year = new Date().getFullYear()
  return(
    <span id="foot">
      © Alan Mak, All Rights Reserved {year}
    </span>
  )
}