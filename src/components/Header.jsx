import React from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import styles from '../styles/components/Header.module.css';

function Header() {
    /* Login Button ausblenden in LoginPage */
  const location = useLocation(); 
  const isLoginPage = location.pathname === '/login';

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="Videoflix Logo" className={styles.logoImage} />
      </div>
      <nav className={styles.nav}>
        {!isLoginPage && (<button className={styles.loginButton}>Log in</button>)}
      </nav>
    </header>
  );
}

export default Header;
