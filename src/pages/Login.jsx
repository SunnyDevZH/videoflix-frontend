import React from 'react';
import styles from '../styles/pages/Login.module.css';

function Login() {
    return (
        <div className={styles.loginpage}>
            <div className="overlay">
                <div className="container">
                    <h1>Log in</h1>
                    <form className="form">
                        <div className={"input"}>
                            <input type="email" id="email" placeholder="Email Address" />
                        </div>
                        <div className="input">
                            <input type="password" id="password" placeholder="Password" />
                        </div>
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