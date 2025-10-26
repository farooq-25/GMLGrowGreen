import React from 'react';
import { FiUser, FiShoppingCart } from 'react-icons/fi';
import logo from '../assets/images/logo.png'; // Import your logo
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <nav className="navbar">
        {/* === LEFT: LOGO === */}
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Bonsie" className="logo-image" />
          </a>
        </div>

        {/* === CENTER: NAV LINKS === */}
        <ul className="navbar-links">
          <li>
            <a href="/shop">SHOP ▼</a>
          </li>
          <li>
            <a href="/sales">SALES</a>
          </li>
          <li>
            <a href="/about">ABOUT US</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
        </ul>

        {/* === RIGHT: ICONS === */}
        <div className="navbar-icons">
          <a href="/account" aria-label="Account">
            <FiUser />
          </a>
          <a href="/cart" aria-label="View cart">
            <div className="cart-icon-wrapper">
              <FiShoppingCart />
              <span className="cart-badge">0</span>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;