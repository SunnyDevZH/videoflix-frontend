import React from 'react';
import HeroVideo from '../components/HeroVideo';
import CategoryRow from '../components/CategoryRow';

function VideoOfferPage() {
  return (
    <div>
      <HeroVideo />
      <CategoryRow title="New on Videoflix" videos={newVideos} />
      <CategoryRow title="Documentary" videos={documentaries} />
      <CategoryRow title="Drama" videos={dramas} />
      <CategoryRow title="Romance" videos={romances} />
      <Footer />
    </div>
  );
}

export default VideoOfferPage;