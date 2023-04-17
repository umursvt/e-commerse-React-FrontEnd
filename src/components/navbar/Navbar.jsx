import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const istop = window.scrollY < 100;
      if (istop !== isTop) {
        setIsTop(istop);
      }
    });
  }, [isTop]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className={isTop ? 'navbar' : 'navbar navbar-scroll'}>
      <div className="logo">
        <Link to="/">Logo</Link>
      </div>
      <ul className={showMenu ? 'nav-links active' : 'nav-links'}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/likes">Likes</Link>
        </li>
      </ul>
      <div className="burger" onClick={toggleMenu}>
        <div className={showMenu ? 'line line1 change' : 'line line1'}></div>
        <div className={showMenu ? 'line line2 change' : 'line line2'}></div>
        <div className={showMenu ? 'line line3 change' : 'line line3'}></div>
      </div>
    </nav>
  );
}

export default Navbar;
