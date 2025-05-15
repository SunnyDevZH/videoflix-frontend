import React from 'react';
import { useNavigate } from 'react-router-dom';
import HeroVideo from '../components/HeroVideo';
import CategoryRow from '../components/CategoryRow';
import styles from '../styles/pages/VideoOffer.module.css';
import logo from '../assets/icons/symbol.svg';
import logoutIcon from '../assets/icons/logout.svg';
import Frame1 from '../assets/images/Frame1.jpg';
import Frame2 from '../assets/images/Frame2.jpg';
import Frame3 from '../assets/images/Frame3.jpg';
import Frame4 from '../assets/images/Frame4.jpg';
import Frame5 from '../assets/images/Frame5.jpg';
import Frame6 from '../assets/images/Frame6.jpg';
import Frame7 from '../assets/images/Frame7.jpg';

export const newVideos = [
    { thumbnail: Frame1, title: 'Frame 1' },
    { thumbnail: Frame2, title: 'Frame 2' },
    { thumbnail: Frame3, title: 'Frame 3' },
    { thumbnail: Frame4, title: 'Frame 4' },
    { thumbnail: Frame5, title: 'Frame 5' },
    { thumbnail: Frame6, title: 'Frame 6' },
    { thumbnail: Frame7, title: 'Frame 7' },
];

export const documentaries = [...newVideos];
export const dramas = [...newVideos];
export const romances = [...newVideos];

function VideoOfferPage() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        navigate('/login');
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