import React, { useState } from 'react';
import '../styles/pages/ResetPassword.module.css';

function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords must match.');
    } else {
      setError('');
      // Handle password reset logic here
      console.log('Password reset successfully!');
    }
  };

  return (
    <div className="reset-password-page">
      <div className="reset-password-container">
        <h1>Reset password</h1>
        <p>
          Create a new password for your <span className="brand">Videoflix</span> account.
        </p>
        <form className="reset-password-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="password">Enter a password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="reset-button">
            Reset my password
          </button>
        </form>
      </div>
      <footer className="reset-password-footer">
        <p>Datenschutz</p>
        <p>Impressum</p>
      </footer>
    </div>
  );
}

export default ResetPassword;