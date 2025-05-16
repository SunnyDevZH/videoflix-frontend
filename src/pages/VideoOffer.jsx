import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroVideo from '../components/HeroVideo';
import VideoThumbnail from '../components/VideoThumbnail';
import styles from '../styles/pages/VideoOffer.module.css';
import logo from '../assets/icons/symbol.svg';
import logoutIcon from '../assets/icons/logout.svg';

function VideoOfferPage() {
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [videosByCategory, setVideosByCategory] = useState({});
  const [heroVideo, setHeroVideo] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/videos/categories/')
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error('Error loading categories:', err));

    fetch('http://127.0.0.1:8000/api/videos/')
      .then(res => res.json())
      .then(data => {
        setVideos(data);
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setHeroVideo(data[randomIndex]);
        }
      })
      .catch(err => console.error('Error loading videos:', err));
  }, []);

  useEffect(() => {
    if (categories.length === 0) return;

    const grouped = categories.reduce((acc, category) => {
      acc[category.name] = [];
      return acc;
    }, {});

    videos.forEach(video => {
      (video.categories || []).forEach(catObj => {
        const category = categories.find(c => c.id === catObj.id);
        if (category) {
          grouped[category.name].push(video);
        }
      });
    });

    setVideosByCategory(grouped);
  }, [categories, videos]);

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    navigate('/login');
  };

  // Neuer Click-Handler für VideoThumbnails, um zum Player zu navigieren
  const onVideoClick = (videoId) => {
    navigate(`/video/${videoId}`);
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

      <HeroVideo
        videoUrl={heroVideo?.video_url}
        title={heroVideo?.title}
        description={heroVideo?.description}
      />

      {Object.entries(videosByCategory).map(([category, vids]) => (
        <section key={category} className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>{category}</h3>
          <div className={styles.horizontalScroll}>
            {vids.length === 0 && <p>Keine Videos in dieser Kategorie</p>}
            {vids.map(video => (
              // VideoThumbnail bekommt onClick-Handler als Prop
              <VideoThumbnail key={video.id} video={video} onClick={() => onVideoClick(video.id)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default VideoOfferPage;
