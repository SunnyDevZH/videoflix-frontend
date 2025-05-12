import React from 'react';
import styles from '../styles/components/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/privacy" className={styles.link}>
        Datenschutz
      </a>
      <a href="/imprint" className={styles.link}>
        Impressum
      </a>
    </footer>
  );
}

export default Footer;