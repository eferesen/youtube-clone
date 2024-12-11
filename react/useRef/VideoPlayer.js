import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleSpeedUp = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
  };

  const handleNormalSpeed = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0;
    }
  };

  return (
    <div className='p-4 space-y-4'>
      <h2 className='text-xl font-bold'>Video Player with useRef</h2>
      <video
        ref={videoRef}
        className='w-full max-w-md rounded'
        src='/api/placeholder/400/320'
      />
      <div className='space-x-2'>
        <button
          onClick={handlePlay}
          className='px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600'
        >
          Play
        </button>
        <button
          onClick={handlePause}
          className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'
        >
          Pause
        </button>
        <button
          onClick={handleSpeedUp}
          className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        >
          2x Speed
        </button>
        <button
          onClick={handleNormalSpeed}
          className='px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
        >
          Normal Speed
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
