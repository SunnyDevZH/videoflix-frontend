import React from 'react';
import styles from '../styles/pages/VideoPlayer.module.css';

function VideoPlayer({ videoUrl, title, thumbnail }) {
    return (
        <div className={styles.videoPlayerPage}>
            <video
                className={styles.videoElement}
                controls
                autoPlay={false}
                src={videoUrl}
                poster={thumbnail}
            >
                Your browser does not support the video tag.
            </video>
            <div className={styles.videoOverlay}>
                <p className={styles.videoTitle}>{title}</p>
            </div>
        </div>
    );
}

export default VideoPlayer;
