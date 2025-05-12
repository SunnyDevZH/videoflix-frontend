import React from 'react';
import styles from '../styles/pages/Homepage.module.css';

function Homepage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.background}>
        <div className={styles.overlay}>
          <div className={styles.content}>
            <h1>Movies, TV shows, and more</h1>
            <p>Enter your email to create or restart your subscription.</p>
            <form className={styles.emailform}>
              <input
                type="email"
                placeholder="Email Address"
                className={styles.emailInput}
              />
              <button type="submit" className={styles.signupButton}>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        <p>Datenschutz</p>
        <p>Impressum</p>
      </footer>
    </div>
  );
}

export default Homepage;