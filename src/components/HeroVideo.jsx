import React from 'react';
import styles from '../styles/components/HeroVideo.module.css';

function HeroVideo({ videoUrl, title, description }) {
    if (!videoUrl) return null;

    return (
        <div className={styles.heroContainer}>
            <video
                className={styles.heroVideo}
                src={videoUrl}
                autoPlay
                muted
                loop
                playsInline
                controls={false}
            />
            <div className={styles.overlay}>
                <h1>{title}</h1>
                <p>{description}</p>
                <button className={styles.playButton}>▶ Play</button>
            </div>
        </div>
    );
}

export default HeroVideo;
