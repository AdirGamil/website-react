import React from 'react'
import { NavLink } from 'react-router-dom'

export function AppHeader() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <div className="header-details">
          <h1 className="logo">myteam</h1>
          <ul>
            <li className="info">
              <NavLink to="#">home</NavLink>
            </li>
            <li className="info">
              <NavLink to="#">about</NavLink>
            </li>
            <li className="contact-btn">
              <NavLink to="#">contact us</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
