import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/persons">persons</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
