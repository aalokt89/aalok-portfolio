import React from 'react';
import { Link } from 'gatsby';

import logoDark from '../images/aalok-logo-dark.svg';
import homeIcon from '../images/icons/home-icon.svg';
import workIcon from '../images/icons/work-icon.svg';
import experienceIcon from '../images/icons/experience-icon.svg';
import contactIcon from '../images/icons/contact-icon.svg';

const NavPanel = props => (
  <header id="main-nav">
    <Link className="logo" to="/">
      <img width="64" src={logoDark} alt="Aalok Trivedi" />{' '}
    </Link>

    <nav>
      <ul>
        <li>
          {' '}
          <Link to="/">
            <span>
              <img src={homeIcon} alt="Home" />{' '}
            </span>
            Home
          </Link>
        </li>
        <li>
          <Link to="/work">
            <span>
              <img src={workIcon} alt="work" />
            </span>
            Work
          </Link>
        </li>
        <li>
          <Link to="/experience">
            <span>
              <img src={experienceIcon} alt="experience" />
            </span>
            Experience
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <span>
              <img src={contactIcon} alt="contact" />
            </span>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavPanel;
