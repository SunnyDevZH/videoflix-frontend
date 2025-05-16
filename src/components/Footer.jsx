import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/components/Footer.module.css';

function Footer() {
  const location = useLocation();
  const isHiddenPage = location.pathname.startsWith('/video/') || location.pathname === '/video-offer'; // Footer ausblenden auf /video-player und /video-offer

  if (isHiddenPage) {
    return null; 
  }

  return (
    <footer className={styles.footer}>
      <a href="/text-page" className={styles.link}>
        Datenschutz
      </a>
      <a href="/text-page" className={styles.link}>
        Impressum
      </a>
    </footer>
  );
}

export default Footer;