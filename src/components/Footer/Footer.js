import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

function Footer() {
  return (
    <footer>
      <div>
        <Link to="/#"><img alt="Rob Saunders Website Logo" src="./assets/images/rob-saunders-logo.png" /></Link>
        <p>2022 Copyright Rob Saunders</p>
      </div>

      <div>
        <strong>Where Next?</strong>

        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/projects/#" className="nav-link footer-nav">Projects</Link>
          </li>

          <li className="nav-item">
            <Link to="/#skills" className="nav-link footer-nav">My Skills</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact/#" className="nav-link footer-nav">Contact</Link>
          </li>

        </ul>
      </div>

    </footer>
  )
}

export default Footer