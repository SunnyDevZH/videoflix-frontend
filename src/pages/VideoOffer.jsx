import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroVideo from '../components/HeroVideo';
import VideoPlayer from '../pages/VideoPlayer';  
import styles from '../styles/pages/VideoOffer.module.css';
import logo from '../assets/icons/symbol.svg';
import logoutIcon from '../assets/icons/logout.svg';

function VideoOfferPage() {
    const navigate = useNavigate();
    const [videos, setVideos] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/login');
    };

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/videos/')
            .then(res => res.json())
            .then(data => setVideos(data))
            .catch(err => console.error('Error loading videos:', err));
    }, []);

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

            <h2>Available Videos</h2>
            <div>
                {videos.length === 0 && <p>Loading videos...</p>}
                {videos.map(video => (
                    <VideoPlayer
                        key={video.id}
                        videoUrl={video.video_file}  // URL aus Django API
                        title={video.title}
                        thumbnail={video.thumbnail}  // falls du Thumbnails hast
                    />
                ))}
            </div>
        </div>
    );
}

export default VideoOfferPage;
