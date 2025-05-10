import React from 'react';
import '../styles/pages/ForgotPassword.module.css';

function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <h1>Forgot your password?</h1>
        <p>
          We will send you an email with instructions to reset your password.
        </p>
        <form className="forgot-password-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="email-input"
            />
          </div>
          <button type="submit" className="send-email-button">
            Send Email
          </button>
        </form>
      </div>
      <footer className="forgot-password-footer">
        <p>Datenschutz</p>
        <p>Impressum</p>
      </footer>
    </div>
  );
}

export default ForgotPassword;