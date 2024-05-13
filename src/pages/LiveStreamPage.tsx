// src/pages/LiveStreamPage.tsx
import React, { useState } from 'react';
import SearchComponent from '../components/SearchComponent';
import VideoPlayer from '../components/VideoPlayer';

const LiveStreamPage: React.FC = () => {
  const [activeUrl, setActiveUrl] = useState<string>('');

  return (
    <div>
      <h1>Live Streaming</h1>
      <SearchComponent onStreamSelect={setActiveUrl} />
      <VideoPlayer url={activeUrl} />
    </div>
  );
};

export default LiveStreamPage;
