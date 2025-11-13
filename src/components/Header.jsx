import React from 'react';
import './Header.css';
import navLogo from '../assets/nav_logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__shell">
        <a href="/" className="header__brand" aria-label="Zambeel home">
          <img src={navLogo} alt="Zambeel" className="header__logo-image" />
        </a>
        <nav className="header__nav" aria-label="Primary navigation">
          <a href="#home" className="header__link header__link--active">Home</a>
          <a href="#locations" className="header__link">Where can you sell?</a>
          <a href="#services" className="header__link">All Services</a>
          <a href="#why" className="header__link">Why Zambeel?</a>
          <a href="#team" className="header__link">Our Team</a>
          <a href="#reviews" className="header__link">Reviews</a>
        </nav>
        <div className="header__actions">
          <button className="header__btn header__btn--ghost" type="button">Sign in</button>
          <button className="header__btn header__btn--primary" type="button">Sign up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
 