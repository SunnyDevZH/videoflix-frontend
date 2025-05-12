import React, { useState } from 'react';
import '../styles/pages/Signup.module.css';

function Signup() {
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
    <div className="signup-page">
      <div className="signup-container">
        <h1>Sign up</h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="password">Enter a password</label>
            <div className="input-wrapper">
              <input
                type="password"
                id="password"
                placeholder="Enter a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="toggle-visibility">👁️</span>
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span className="toggle-visibility">👁️</span>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">
            Get Started
          </button>
        </form>
      </div>
      <footer className="signup-footer">
        <p>Datenschutz</p>
        <p>Impressum</p>
      </footer>
    </div>
  );
}

export default Signup;