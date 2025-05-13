import React from 'react';
import styles from '../styles/pages/VideoPlayer.module.css';

function VideoPlayer() {
  return (
    <div className={styles.videoPlayerPage}>
      <div className={styles.videoContainer}>
        <video
          className={styles.videoElement}
          controls
          autoPlay
          src="/src/assets/videos/majestic-whales.mp4"
          poster="/src/assets/images/whales-poster.jpg"
        >
          Your browser does not support the video tag.
        </video>
        <div className={styles.videoControls}>
          <div className={styles.controlButtons}>
            <button className={styles.controlButton}>⏪</button>
            <button className={styles.controlButton}>▶</button>
            <button className={styles.controlButton}>⏩</button>
          </div>
          <div className={styles.progressBar}>
            <input type="range" min="0" max="100" value="40" className={styles.progressSlider} />
          </div>
          <div className={styles.videoInfo}>
            <p className={styles.videoTitle}>Majestic Whales</p>
            <p className={styles.videoDuration}>1:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;