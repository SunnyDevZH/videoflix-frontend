import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/pages/Login.module.css';
import { loginUser } from '../api/auth';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password); // Login mit E-Mail und Passwort
            localStorage.setItem('access_token', response.access); // Speichere das Access-Token
            localStorage.setItem('refresh_token', response.refresh); // Speichere das Refresh-Token
            setError('');
            console.log('Login successful:', response);

            // Weiterleitung zur Startseite
            navigate('/video-offer');
        } catch (err) {
            setError('Invalid email or password.');
        }
    };

    return (
        <div className={styles.loginpage}>
            <div className="overlay">
                <div className="container">
                    <h1>Log in</h1>
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
                        {error && <p className={styles.errorMessage}>{error}</p>}
                        <button type="submit">Log in</button>
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