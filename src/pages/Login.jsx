import React from 'react';
import styles from '../styles/pages/Login.module.css';

function Login() {
  return (
    <div className={styles.loginPage}>
      <div className={styles.overlay}>
        <div className={styles.loginContainer}>
          <h1>Log in</h1>
          <form className={styles.loginForm}>
            <div className={styles.inputGroup}>
              <input type="email" id="email" placeholder="Email Address" />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" id="password" placeholder="Password" />
            </div>
            <button type="submit" className={styles.loginButton}>Log in</button>
          </form>
          <div className={styles.loginLinks}>
            <a href="/forgot-password">Forgot password?</a>
            <p>
              New to Videoflix? <a href="/signup">Sign Up now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;