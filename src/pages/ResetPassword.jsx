import React, { useState } from 'react';
import styles from '../styles/pages/ResetPassword.module.css';

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
            console.log('Password reset successfully!');
        }
    };

    return (
        <div className={styles.resetPasswordPage}>
            <div className="overlay">
                <div className="container">
                    <h1>Reset password</h1>
                    <p>
                        Create a new password for your Videoflix account.
                    </p>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input">
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter a password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={styles.inputField}
                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={styles.inputField}
                            />
                        </div>
                        {error && <p className={styles.errorMessage}>{error}</p>}
                        <button type="submit">
                            Reset my password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;