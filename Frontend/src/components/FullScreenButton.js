import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';

function FullScreenButton() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    if (!isFullScreen) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen().catch((err) => {
          console.error('Error attempting to enable full-screen mode:', err);
        });
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleFullscreenChange = () => {
    setIsFullScreen(document.fullscreenElement !== null);
  };

  return (
    <Button variant='outlined' onClick={toggleFullScreen}>
      {isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
    </Button>
  );
}

export default FullScreenButton;