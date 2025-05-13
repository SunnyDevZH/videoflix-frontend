import React from 'react';
import styles from '../styles/pages/VideoPlayer.module.css';

function VideoPlayer() {
    return (
        <div className={styles.videoPlayerPage}>
            <video
                className={styles.videoElement}
                controls
                autoPlay
                src="/videos/majestic-whales.mp4"
                poster="/images/whales-poster.jpg"
            >
                Your browser does not support the video tag.
            </video>
            <div className={styles.videoOverlay}>
                <p className={styles.videoTitle}>Majestic whales</p>
            </div>
        </div>
    );
}

export default VideoPlayer;
