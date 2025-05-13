import React from 'react';
import styles from '../styles/pages/ForgotPassword.module.css';

function ForgotPassword() {
  return (
    <div className={styles.forgotPasswordPage}>
      <div className={styles.overlay}>
        <div className={styles.forgotPasswordContainer}>
          <h1>Forgot your password?</h1>
          <p>
            We will send you an email with instructions to reset your password.
          </p>
          <form className={styles.forgotPasswordForm}>
            <div className={styles.inputGroup}>
             <div className={styles.inputGroup}>
                           <input
                             type="email"
                             id="email"
                             placeholder="Email Address"
                           />
                         </div>
            </div>
            <button type="submit" className={styles.sendEmailButton}>
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;