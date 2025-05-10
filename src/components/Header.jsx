import React from 'react';
import '../styles/components/Header.module.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>VIDEOFLIX</h1>
      </div>
      <nav className="nav">
        <button className="login-button">Log in</button>
      </nav>
    </header>
  );
}

export default Header;