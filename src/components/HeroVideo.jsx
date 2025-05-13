import React from 'react';
import styles from '../styles/components/HeroVideo.module.css';

function HeroVideo() {
  return (
    <div className={styles.heroContainer}>
      <video
        className={styles.heroVideo}
        autoPlay
        muted
        loop
        playsInline
        src="/videos/breakout-trailer.mp4"
        poster="/images/breakout-poster.jpg"
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
