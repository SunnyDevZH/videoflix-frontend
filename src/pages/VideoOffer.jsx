import React from 'react';
import HeroVideo from '../components/HeroVideo';
import CategoryRow from '../components/CategoryRow';
import styles from '../styles/pages/VideoOffer.module.css';
import logo from '../assets/icons/symbol.svg'; // Importiere das Logo
import logoutIcon from '../assets/icons/logout.svg'; // Importiere das Logout-Icon

function VideoOfferPage() {
  const newVideos = [
    { thumbnail: '/images/video1.jpg', title: 'Video 1' },
    { thumbnail: '/images/video2.jpg', title: 'Video 2' },
    { thumbnail: '/images/video3.jpg', title: 'Video 3' },
  ];
  const documentaries = [
    { thumbnail: '/images/video1.jpg', title: 'Video 1' },
    { thumbnail: '/images/video2.jpg', title: 'Video 2' },
    { thumbnail: '/images/video3.jpg', title: 'Video 3' },
  ];
  const dramas = [
    { thumbnail: '/images/video1.jpg', title: 'Video 1' },
    { thumbnail: '/images/video2.jpg', title: 'Video 2' },
    { thumbnail: '/images/video3.jpg', title: 'Video 3' },
  ];
  const romances = [
    { thumbnail: '/images/video1.jpg', title: 'Video 1' },
    { thumbnail: '/images/video2.jpg', title: 'Video 2' },
    { thumbnail: '/images/video3.jpg', title: 'Video 3' },
  ];

  const handleLogout = () => {
    console.log('User logged out');
    // Hier kannst du die Logout-Logik implementieren
  };

  return (
    <div className={styles.videoOfferPage}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <button className={styles.logoutButton} onClick={handleLogout}>
          <img src={logoutIcon} alt="Logout" className={styles.logoutIcon} />
          Log Out
        </button>
      </header>
      <HeroVideo />
      <CategoryRow title="New on Videoflix" videos={newVideos} />
      <CategoryRow title="Documentary" videos={documentaries} />
      <CategoryRow title="Drama" videos={dramas} />
      <CategoryRow title="Romance" videos={romances} />
    </div>
  );
}

export default VideoOfferPage;