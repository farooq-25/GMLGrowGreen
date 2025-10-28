// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { FiUser, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import logo from '../assets/images/logo.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state } = useCart(); 
  const { items: cartItems } = state; 
  const location = useLocation();

  // --- 3. Calculate total items ---
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  // --- END Calculation ---

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false); // Close menu on route change
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/products', label: 'SHOP' },

    { path: '/about', label: 'ABOUT US' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <header className={`navbar-container ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar">
        
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="GML Grow Green Logo" className="logo-image" />
          </Link>
        </div>

        
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        
        <div className="navbar-icons">
          <Link to="/account" aria-label="Account" className="icon-link">
            <FiUser />
          </Link>
          <Link to="/cart" aria-label="View cart" className="icon-link">
            <div className="cart-icon-wrapper">
              <FiShoppingCart />
              
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems}</span>
              )}
              
            </div>
          </Link>

          
          <button
            className="mobile-menu-button"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        
        <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-link ${location.pathname === link.path ? 'active' : ''}`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-menu-icons">
              <Link to="/account" className="mobile-icon-link">
                <FiUser />
                <span>Account</span>
              </Link>
              <Link to="/cart" className="mobile-icon-link">
                <FiShoppingCart />
                <span>Cart</span>
                
                {totalItems > 0 && (
                  <span className="mobile-cart-counter">{totalItems}</span>
                )}
                
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;