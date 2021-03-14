import React, { useState } from 'react';
import './nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav(props) {
  const [menu, setMenu] = useState(false);

  const navs = [
    {
      path: '/about',
      name: 'About',
      ref: 'about'
    },
    {
      path: '/skills',
      name: 'Skills',
      ref: 'skills'
    },
    {
      path: '/projects',
      name: 'Projects',
      ref: 'projects'
    },
    {
      path: '/contact',
      name: 'Contact',
      ref: 'contact'
    }
  ]

  function handleClick(obj) {
    const anchor = document.querySelector(`#${obj}`)
    anchor.scrollIntoView({behavior: 'smooth'})
  }

  function resume() {
    window.open("https://resume.creddle.io/resume/gqkkfwgrc0l")
  }
  return (
    <div id="nav">
      <a
        href={"/"}
        id="logo">Alan Mak</a>
      <div 
        className="hamburger"
        style={ menu ? {color:'white'} : {color: '#4056A1'}}>
        <FontAwesomeIcon
          id="fontBurger"
          icon={faBars}
          size='2x'
          onClick={()=> {
            menu ? (setMenu(false)): (setMenu(true))
        }}/>
        <ul className={ menu ? 'ul--show' : 'ul--hide' }>
          {navs.map((link, index) => 
            <a 
              key={index}
              href={link.path}>
                {link.name}
            </a>
          )}
          <li onClick={resume}>Resume</li>
          <div className="circle" />
        </ul>
      </div>
    </div>
  )
}