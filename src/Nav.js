import React, { useState, useEffect } from 'react';
import './Nav.css';
import netflixLogo from './img/netflix.png';

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img className="nav_logo" src={netflixLogo} alt="netflixLogo" />
    </div>
  );
}

export default Nav;
