import React from 'react';
import '../styles/pages/VideoOffer.module.css';

function VideoOffer() {
  const categories = [
    {
      title: 'New on Videoflix',
      videos: [
        { title: 'Majestic Whales', image: '/src/assets/images/whales.jpg' },
        { title: 'Whispering Shadows', image: '/src/assets/images/shadows.jpg' },
        { title: 'World of Wonders', image: '/src/assets/images/wonders.jpg' },
        { title: '48 Hours to Survive', image: '/src/assets/images/survive.jpg' },
      ],
    },
    {
      title: 'Documentary',
      videos: [
        { title: 'Majestic Whales', image: '/src/assets/images/whales.jpg' },
        { title: 'World of Wonders', image: '/src/assets/images/wonders.jpg' },
        { title: 'Baby\'s Secret Language', image: '/src/assets/images/baby.jpg' },
      ],
    },
    {
      title: 'Drama',
      videos: [
        { title: 'Breakout', image: '/src/assets/images/breakout.jpg' },
        { title: 'Crime', image: '/src/assets/images/crime.jpg' },
        { title: '48 Hours to Survive', image: '/src/assets/images/survive.jpg' },
      ],
    },
    {
      title: 'Romance',
      videos: [
        { title: 'When We Met', image: '/src/assets/images/romance1.jpg' },
        { title: 'Hate You?', image: '/src/assets/images/romance2.jpg' },
      ],
    },
  ];

  return (
    <div className="video-offer-page">
      <header className="video-offer-header">
        <div className="logo">▶</div>
        <button className="logout-button">Log Out</button>
      </header>
      <div className="hero-section">
        <div className="hero-content">
          <h1>Breakout</h1>
          <p>
            In a high-security prison, a wrongly convicted man formulates a meticulous plan to break out and prove his innocence. He must navigate a web of alliances and betrayals to reclaim his freedom and expose the truth.
          </p>
          <button className="play-button">▶ Play</button>
        </div>
      </div>
      <main className="categories">
        {categories.map((category, index) => (
          <section key={index} className="category">
            <h2>{category.title}</h2>
            <div className="video-list">
              {category.videos.map((video, idx) => (
                <div key={idx} className="video-card">
                  <img src={video.image} alt={video.title} />
                  <p>{video.title}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
      <footer className="video-offer-footer">
        <p>Datenschutz</p>
        <p>Impressum</p>
      </footer>
    </div>
  );
}

export default VideoOffer;