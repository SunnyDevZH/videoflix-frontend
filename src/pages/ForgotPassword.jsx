import React from 'react';
import styles from '../styles/pages/ForgotPassword.module.css';

function ForgotPassword() {
    return (
        <div className={styles.forgotPasswordPage}>
            <div className="overlay">
                <div className="container">
                    <h1>Forgot your password?</h1>
                    <p>
                        We will send you an email with instructions to reset your password.
                    </p>
                    <form className="form">
                        <div className="input">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                            />
                        </div>
                        <button type="submit">
                            Send Email
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;