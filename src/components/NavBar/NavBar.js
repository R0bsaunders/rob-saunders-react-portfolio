import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


function NavBar() {
  return (
    <header>

      <nav className="navbar fixed-top navbar-expand-lg navbar-light customNav">
        <Link to='/#' className="navbar-brand"><img id="logoImg" src="../rob-saunders-react-portfolio/assets/images/rob-saunders-logo2.png" alt="Purple and white logo for Rob Saunders" /></Link>

        <div>
          <button aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation" className="navbar-toggler" data-target="#navbarSupportedContent" data-toggle="collapse" type="button"><span className="navbar-toggler-icon"></span></button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                <Link to='/projects/#' className="nav-link">Projects</Link>
              </li>

              <li className="nav-item">
                <Link to='/contact/#' className="nav-link">Contact</Link>
              </li>

              <li className="nav-item">
                <a className="btn btn-primary btn-lg navCTA" href="./assets/files/Robert-Saunders-CV.pdf" target="_blank" role="button">My CV</a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
  </header>
  );
};

export default NavBar;