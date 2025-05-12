import React, { useState } from 'react';
import styles from '../styles/pages/Signup.module.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords must match.');
    } else {
      setError('');
      // Handle signup logic here
      console.log('Account created successfully!');
    }
  };

  return (
    <div className={styles.signupPage}>
      <div className={styles.signupContainer}>
        <h1>Sign up</h1>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className={styles.errorMessage}>{error}</p>}
          <button type="submit" className={styles.signupButton}>Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default Signup;