import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/logo.svg'

export function AppHeader() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <div className="header-left">
          <img src={Logo} alt="Logo" />
          <ul className="ul-info">
            <li className="info">
              <NavLink to="#">home</NavLink>
            </li>
            <li className="info">
              <NavLink to="#">about</NavLink>
            </li>
          </ul>
        </div>
        <div className="header-right">
          <NavLink to="#" className="contact-btn">
            contact us
          </NavLink>
        </div>
      </nav>
    </header>
  )
}
