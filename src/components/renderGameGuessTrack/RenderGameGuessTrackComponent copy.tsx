import React, { useState, useEffect } from 'react'
import SongAnswerComponent from '../songAnswerComponent/SongAnswerComponent';
import CircularProgressWithLabel from '../CircularProgressWithLabel/CircularProgressWithLabel';
import Track from '../../entities/track/Track';
import style from './RenderGameGuessTrackComponent.module.css'
import usePlay from '../../hooks/usePlay';
import useGame from '../../hooks/useGame';
import AudioPlayerComponent from '../audioPlayerComponent/AudioPlayerComponent';


interface renderGameGuesTrackProps {
    track: Track,
}
const RenderGameGuessTrackComponent: React.FC<renderGameGuesTrackProps> = ({ track }) => {
    const [showComponent1, setShowComponent1] = useState(true);
    const [showComponent2, setShowComponent2] = useState(false);
    const { playState: { timer } } = usePlay();
    const { configurationGame: { durationMs, timerListen }, handleOnChangeIsTrackAlreadyGuessed,
        handleOnActiveListen, handleOnActiveGuess } = useGame();
    const { preview_url } = track;
    const [prevTrack, setPrevTrack] = useState<Track | null>(null);
    
    handleOnActiveListen(true);


    // useEffect(() => {
    //     // Restablecer los estados cuando cambia la prop 'track'
    //     setShowComponent1(true);
    //     setShowComponent2(false);

    //     if (prevTrack && prevTrack.id !== track.id) {
    //         console.log('El track cambió:', prevTrack.name, track.name);
    //         // Realiza alguna acción si el track cambió
    //     }

    //     setPrevTrack(track);

    //     setTimeout(() => {
    //         if (showComponent2) {
    //             handleOnChangeIsTrackAlreadyGuessed(true)
    //         }
    //         setShowComponent1(!showComponent1);
    //         setShowComponent2(!showComponent2);
    //     }, (((durationMs + 1) * 1000) + ((timer) * 1000)));

    // }, [track, prevTrack, durationMs, timer]);

    return (
        <div>

            {showComponent2 &&
                <div>
                    <AudioPlayerComponent
                        url={preview_url}
                        secondsToPlay={5}
                    />
                    <SongAnswerComponent
                        track={track} />
                </div>}
            {timerListen.active &&
                <div>
                    <AudioPlayerComponent
                        url={preview_url}
                        secondsToPlay={durationMs}
                    />
                    <div className={style.guessingContainer}>
                        <div className={style.circularTimerContainer}>
                            <CircularProgressWithLabel />
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default RenderGameGuessTrackComponent