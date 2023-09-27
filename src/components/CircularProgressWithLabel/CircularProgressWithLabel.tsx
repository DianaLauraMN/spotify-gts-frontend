import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useGame from '../../hooks/useGame';
import WavesAudioComponent from '../wavesAudio/WavesAudioComponent';

const CircularProgressWithLabel: React.FC = () => {
  const { configurationGame: { durationMs, timerListen }, handleOnActiveGuess, handleOnActiveListen, handleOnActiveSong } = useGame();
  const value = durationMs;
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (timerListen.active) {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= value ? durationMs : prevProgress + 1));
      }, 1000);

      setTimeout(() => {
        handleOnActiveListen(false);
        handleOnActiveSong(false);
        handleOnActiveGuess(true);
      }, timerListen.time * 1000);
      return () => {
        clearInterval(timer);
      };
    }
  }, []);

  const circularProgressStyle = {
    color: '#181818'
  };
  return (
    <div>
      <Box sx={{ position: 'relative', display: 'inline-flex' }}>
        <CircularProgress
          variant="determinate"
          value={(progress / value) * 100}
          size={300}
          thickness={1.2}
          sx={circularProgressStyle}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <WavesAudioComponent />
        </Box>
      </Box>
    </div>
  );
};

export default CircularProgressWithLabel;
