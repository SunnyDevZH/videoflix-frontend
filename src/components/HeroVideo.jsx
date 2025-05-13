import React from 'react';
import styles from '../styles/components/HeroVideo.module.css';
import bild from '../assets/images/Frame3.jpg';

function HeroVideo() {
    return (
        <div className={styles.heroContainer}>
            {/* Bild anstelle des Videos */}
            <img
                className={styles.heroVideo}
                src={bild}
                alt="Breakout Poster"
            />
            <div className={styles.overlay}>
                <h1>Breakout</h1>
                <p>In a high-security prison, a wrongly convicted man plans his escape...</p>
                <button className={styles.playButton}>▶ Play</button>
            </div>
        </div>
    );
}

export default HeroVideo;
