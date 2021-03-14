import React, { useState } from 'react';
import './nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const navs = [
    {
      path: '/about',
      name: 'About'
    },
    {
      path: '/skills',
      name: 'Skills'
    },
    {
      path: '/projects',
      name: 'Projects'
    },
    {
      path: '/contact',
      name: 'Contact'
    },
    {
      path: 'https://resume.creddle.io/resume/gqkkfwgrc0l',
      name: 'Resume'
    }
  ]
  return (
    <div id="nav">
      <a href='/' id="logo">Alan Mak</a>
      <div 
        className="hamburger"
        style={ menu ? {color:'white'} : {color: 'black'}}>
        <FontAwesomeIcon
          id="fontBurger"
          icon={faBars}
          size='2x'
          onClick={()=> {
            menu ? (setMenu(false)): (setMenu(true))
        }}/>
        <ul className={ menu ? 'ul--show' : 'ul--hide' }>
          {navs.map((link, index) => 
            <a key={index} href={link.path}>{link.name}</a>
            )}
          <div className="circle" />
        </ul>
      </div>
    </div>
  )
}