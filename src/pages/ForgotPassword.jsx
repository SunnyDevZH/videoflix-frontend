import { useState } from 'react';
import styles from '../styles/pages/ForgotPassword.module.css';
import { CURRENT_URL } from '../api/api';

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setError('');

        try {
            const response = await fetch(`${CURRENT_URL}password-reset-request/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('If your email exists, you will receive password reset instructions.');
                setEmail('');
            } else {
                const data = await response.json();
                setError(data.error || 'Something went wrong');
            }
        } catch {
            setError('Network error, try again later');
        }
    };

    return (
        <div className={styles.forgotPasswordPage}>
            <div className="overlay">
                <div className="container">
                    <h1>Forgot your password?</h1>
                    <p>We will send you an email with instructions to reset your password.</p>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="input">
                            <input
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit">Send Email</button>
                    </form>
                    {message && <p style={{ color: 'green' }}>{message}</p>}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
