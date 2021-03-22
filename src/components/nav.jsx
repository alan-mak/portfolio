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
          {navs.map((link, index) => 
            <a 
              key={index}
              href={link.path}>
                {link.name}
            </a>
          )}
          <li onClick={resume}>Resume</li>
        </ul>
      </div>
    </div>
  )
}