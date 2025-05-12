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
              <div style={{ display: 'flex', alignItems: 'center' }}>
                    Sign Up 
                    <img src="../src/assets/images/chevron_right.svg" alt="arrow" style={{ marginLeft: '10px', width: '8px' }} />   
                    </div>
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;