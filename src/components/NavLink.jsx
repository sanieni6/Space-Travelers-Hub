import React from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
  <nav className="nav-bar">
    <ul className="nav-var-list">
      <li>
        <NavLink className="link" to="/">Rockets</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/Missions">Missions</NavLink>
      </li>
      <li>
        <NavLink className="link" to="/Dragons">Dragons</NavLink>
      </li>
      <li>
        <NavLink className="link separator" to="/Profile">My Profile</NavLink>
      </li>

    </ul>
  </nav>
);

export default NavLinks;
