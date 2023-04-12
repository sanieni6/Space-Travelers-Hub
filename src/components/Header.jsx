import React from 'react';
import planet from '../images/planet.png';
import NavLinks from './NavLink';
import '../styles/Header.scss';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={planet} className="app-logo" alt="logo" />
      <h1 className="header-title">Space Travelers&apos; Hub</h1>
    </div>
    <NavLinks />
  </header>
);

export default Header;
