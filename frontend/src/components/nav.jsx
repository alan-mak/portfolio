import React from 'react';
import './nav.scss'

export default function Nav() {
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
      path: '/contact',
      name: 'Contact'
    },
    {
      path: '/projects',
      name: 'Projects'
    },
    {
      path: 'https://resume.creddle.io/resume/gqkkfwgrc0l',
      name: 'Resume'
    }
  ]
  return (
    <div>
      Alan Mak
      <ul>
        {navs.map(link => 
          <a href={link.path}>{link.name}</a>
        )}
      </ul>
    </div>
  )
}