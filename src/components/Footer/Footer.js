import React from 'react'

function Footer() {
  return (
    <footer>
      <div>
        <a href="/"><img alt="Rob Saunders Website Logo" src="./images/rob-saunders-logo.png" /></a>
        <p>2022 Copyright Rob Saunders</p>
      </div>

      <div>
        <strong>Where Next?</strong>

        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active footer-nav" href="/projects">My Work</a>
          </li>


          <li className="nav-item">
            <a className="nav-link footer-nav" href="#skills">My Skills</a>
          </li>


          <li className="nav-item">
            <a className="nav-link footer-nav" href="/">Contact</a>
          </li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer