import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import useGameConfig from '../../hooks/useGameConfig';

const TimerComponent = () => {
    const [progress, setProgress] = React.useState(0);
    const { configurationGame: { timerGuess }, handleOnActiveGuess, handleOnActiveSong } = useGameConfig();
    const progressInterval = (100 / timerGuess.time);

    useEffect(() => {
        if (timerGuess.active) {
            const timer = setInterval(() => {
                setProgress((oldProgress) => {
                    return Math.min(oldProgress + 1, 10);
                });
            }, 1000);

            setTimeout(() => {
                handleOnActiveGuess(false)
                handleOnActiveSong(true);
            }, (timerGuess.time + 1) * 1000);


            return () => {
                clearInterval(timer);
            };
        } else {
            setProgress(0);
        }
    }, [timerGuess.active]);



    const backgroundStyle = {
        background: '#121212',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        height: '.3rem',

    };

    const filledStyle = {
        background: 'linear-gradient(to right, #532FE0, #D63372)',
        borderBottomLeftRadius: '1rem',
        borderBottomRightRadius: '1rem',
        height: '.3rem',

    };


    return (
        <Box sx={{ width: '100%' }}>
            <LinearProgress variant="determinate" value={progress * progressInterval}
                sx={{
                    ...backgroundStyle,
                    '& .MuiLinearProgress-bar': filledStyle,
                }}
            />
        </Box>
    );
}

export default TimerComponent