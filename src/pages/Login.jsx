import React from 'react';
import '../styles/pages/Login.module.css';

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Log in</h1>
        <form className="login-form">
          <div className="input-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Email Address" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <button type="submit" className="login-button">Log in</button>
        </form>
        <div className="login-links">
          <a href="/forgot-password">Forgot password?</a>
          <p>
            New to Videoflix? <a href="/signup">Sign Up now</a>
          </p>
        </div>
      </div>
      <footer className="login-footer">
        <p>Datenschutz</p>
        <p>Impressum</p>
      </footer>
    </div>
  );
}

export default Login;