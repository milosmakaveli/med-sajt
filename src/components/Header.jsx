import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from '../assets/logo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingBag,
  faShoppingCart,
  faMoon,
  faSun,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";


function Header() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") return true;
    return false; 
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode((prevMode) => !prevMode);

  return (
    <header className="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo-img" />
        <h1 className="logo">Marjanović</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/" title="Home">
              <FontAwesomeIcon icon={faHome} className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link to="/products" title="Shop">
              <FontAwesomeIcon icon={faShoppingBag} className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link to="/cart" title="Cart">
              <FontAwesomeIcon icon={faShoppingCart} className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link to="/contact" title="Contact">
              <FontAwesomeIcon icon={faEnvelope} className="nav-icon" />
            </Link>
          </li>
        </ul>
      </nav>
      <button onClick={toggleTheme} className="theme-toggle-button" title="Toggle Theme">
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
      </button>
    </header>
  );
}

export default Header;
