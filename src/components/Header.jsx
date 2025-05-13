import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/icons/logo.svg';
import styles from '../styles/components/Header.module.css';

function Header() {
  const location = useLocation();
  const isHiddenPage = location.pathname === '/login' || location.pathname === '/text-page';

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Videoflix Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        {!isHiddenPage && (
          <button className={styles.loginButton}>Log in</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
