import React from 'react'
import logo from '../../images/rob-saunders-logo2.png';


function NavBar() {
  return (
    <header>
    <nav className="navbar fixed-top navbar-expand-lg navbar-light customNav">
      <a className="navbar-brand" href="#"><img id="logoImg" src={logo} alt="Purple and white logo for Rob Saunders" /></a>

      <div>
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className="nav-item">
              <a className="nav-link" href="#work">My Work</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#skills">My Skills</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>

            <li className="nav-item dropdown">
              <a aria-expanded="false" aria-haspopup="true" className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdown" role="button">Portfolio</a>

              <div aria-labelledby="navbarDropdown" className="dropdown-menu">
                <a className="dropdown-item" href="#journalist">Freelance Journalist</a>
                <div className="dropdown-divider"></div>

                <a className="dropdown-item" href="#photography">Photography Website</a>
                <div className="dropdown-divider"></div>
                
                <a className="dropdown-item" href="#cleaner">Window Cleaner Website</a>
              </div>
            </li>

            <li className="nav-item">
              <a className="btn btn-primary btn-lg navCTA" href="./files/Robert Saunders CV.pdf" target="_blank" role="button">My CV</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  </header>
  )
}
export default NavBar