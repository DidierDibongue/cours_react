import React from 'react';
import "./Navbar.scss";
import {FiMenu} from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="laptop">
        <h2 className="logo">Home Sweet Home</h2>
          <div className="navigation">
            <ul className="links-conteneur">
              <li className="link">Résidences</li>
              <li className="link">Nos Valeurs</li>
              <li className="link">Contact</li>
              <li className="link">C'est parti</li>
              <li className="link">Louer</li>
            </ul>
            <FiMenu className="menu-icon"/>
          </div>
      </div>
    </div>
  )
}

export default Navbar;
