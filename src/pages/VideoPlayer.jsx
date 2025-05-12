import React from 'react';
import '../styles/pages/VideoPlayer.module.css';

function VideoPlayer() {
  return (
    <div className="video-player-page">
      <header className="video-player-header">
        <button className="back-button">←</button>
        <p className="optimization-text">Optimizing video for your screen 40%</p>
        <button className="next-button">▶</button>
      </header>
      <div className="video-container">
        <video
          className="video-element"
          controls
          autoPlay
          src="/src/assets/videos/majestic-whales.mp4"
          poster="/src/assets/images/whales-poster.jpg"
        >
          Your browser does not support the video tag.
        </video>
        <div className="video-controls">
          <div className="control-buttons">
            <button className="control-button">⏪</button>
            <button className="control-button">▶</button>
            <button className="control-button">⏩</button>
          </div>
          <div className="progress-bar">
            <input type="range" min="0" max="100" value="40" className="progress-slider" />
          </div>
          <div className="video-info">
            <p className="video-title">Majestic Whales</p>
            <p className="video-duration">1:00:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;