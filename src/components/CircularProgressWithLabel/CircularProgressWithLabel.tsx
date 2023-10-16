import React, { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import useGame from '../../hooks/useGame';
import WavesAudioComponent from '../wavesAudio/WavesAudioComponent';
import usePlay from '../../hooks/usePlay';

const CircularProgressWithLabel: React.FC = () => {
  const { playState: { currentTrack, trackAnswer, timerUser }, handleOnChangeTimerUser } = usePlay();
  const { configurationGame: { durationMs, timerListen }, handleOnActiveGuess, handleOnActiveListen, handleOnActiveSong } = useGame();
  const value = durationMs;
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let startTime: number; // Almacena el tiempo de inicio del timer

    // if (trackAnswer) {
    //   handleOnActiveListen(false);
    //   handleOnActiveGuess(false);
    //   handleOnActiveSong(true);
    // } else 
    if (timerListen.active) {

      startTime = Date.now(); // Guarda el tiempo de inicio cuando comienza el timer

      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= value ? durationMs : prevProgress + 1));

        // Calcula la duración del timer en segundos
        const endTime = Date.now();
        const elapsedSeconds = Math.floor((endTime - startTime) / 1000);
        handleOnChangeTimerUser(elapsedSeconds);
        console.log(`El timer se ejecutó durante ${elapsedSeconds} segundos.`);
      }, 1000);

      //const timerId = 
      setTimeout(() => {
        handleOnActiveListen(false);
        handleOnActiveSong(false);
        handleOnActiveGuess(true);
        //console.log('realmente el timer se detiene aqui');
      }, timerUser * 1000);
      return () => {
        clearInterval(timer);
        //  clearTimeout(timerId);
      };
    }
  }, []); //currentTrack, trackAnswer

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
