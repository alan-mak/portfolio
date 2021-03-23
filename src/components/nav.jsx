import React, { useState } from 'react';
import './nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav(props) {
  const [menu, setMenu] = useState(false);

  const navs = [
    {
      path: '/contact',
      name: 'Contact',
      ref: 'contact'
    },
    {
      path: '/projects',
      name: 'Projects',
      ref: 'projects'
    },
    {
      path: '/skills',
      name: 'Skills',
      ref: 'skills'
    },
    {
      path: '/about',
      name: 'About',
      ref: 'about'
    },
    {
      path: '/',
      name: 'Home',
      ref: 'home'
    }
  ]

  function resume() {
    window.open("https://resume.creddle.io/resume/gqkkfwgrc0l")
  }
  return (
    <div id="nav">
      <a
        href={"/"}
        id="logo">Alan Mak</a>
      <div 
        className={ menu ? "hamburger show" : "hamburger" }>
        <FontAwesomeIcon
          id="fontBurger"
          icon={faBars}
          size='2x'
          onClick={()=> {
            menu ? (setMenu(false)): (setMenu(true))
        }}/>
        <ul className={ menu ? 'ul--show' : 'ul--hide' }>
            <li onClick={resume}>Resume</li>
          {navs.map((link, index) => 
            <a 
              key={index}
              href={link.path}>
                {link.name}
            </a>
          )}
        </ul>
      </div>
    </div>
  )
}