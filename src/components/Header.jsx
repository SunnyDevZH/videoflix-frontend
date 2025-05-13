import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import styles from '../styles/components/Header.module.css';

function Header() {
  const location = useLocation();
  const isHiddenButton = location.pathname === '/login' || location.pathname === '/text-page';
  const isHiddenPage = location.pathname === '/video-offer' || location.pathname === '/video-player';

  if (isHiddenPage) {
    return null; // Header nicht anzeigen, wenn die Seite ausgeblendet werden soll
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Videoflix Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        {!isHiddenButton && (
          <button className={styles.loginButton}>Log in</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
