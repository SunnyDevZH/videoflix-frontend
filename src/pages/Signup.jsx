import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importiere useNavigate
import styles from '../styles/pages/Signup.module.css';
import { registerUser } from '../api/auth';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Initialisiere useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Passwords must match.');
            setSuccess('');
        } else {
            try {
                setError('');
                console.log(email, password); // <--- Hier prüfen!
                const response = await registerUser(email, password);
                setSuccess('Account created successfully!');
                setTimeout(() => navigate('/login'), 2000);
            } catch (err) {
                setError(err?.message || 'An error occurred during registration.');
                setSuccess('');
            }
        }
    };

    return (
        <div className={styles.signupPage}>
            <div className="overlay">
                <div className="container">
                    <h1>Sign up</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input">
                            <input
                                type="email"
                                id="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input">
                            <input
                                type="password"
                                id="confirm-password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className={styles.errorMessage}>{error}</p>}
                        {success && <p className={styles.successMessage}>{success}</p>}
                        <button type="submit" className={styles.signupButton}>Get Started</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;