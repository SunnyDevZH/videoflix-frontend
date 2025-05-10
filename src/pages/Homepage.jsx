import React from 'react';
import '../styles/pages/Homepage.module.css';

function Homepage() {
  return (
    <div className="homepage">
      <div className="background">
        <div className="overlay">
          <div className="content">
            <h1>Movies, TV shows, and more</h1>
            <p>Enter your email to create or restart your subscription.</p>
            <form className="email-form">
              <input
                type="email"
                placeholder="Email Address"
                className="email-input"
              />
              <button type="submit" className="signup-button">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>Datenschutz</p>
        <p>Impressum</p>
      </footer>
    </div>
  );
}

export default Homepage;