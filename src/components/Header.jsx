import React from 'react';
import logo from '../assets/images/logo.svg'; // Importiere das Logo
import styles from '../styles/components/Header.module.css'; // Importiere das CSS-Modul

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Videoflix Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        <button className={styles.loginButton}>Log in</button>
      </nav>
    </header>
  );
}

export default Header;