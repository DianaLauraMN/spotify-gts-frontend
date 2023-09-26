import React, { useState, useEffect } from 'react'
import SongAnswerComponent from '../songAnswerComponent/SongAnswerComponent';
import CircularProgressWithLabel from '../CircularProgressWithLabel/CircularProgressWithLabel';
import Track from '../../entities/track/Track';
import style from './RenderGameGuessTrackComponent.module.css'
import useGameConfig from '../../hooks/useGameConfig';
import AudioPlayerComponent from '../audioPlayerComponent/AudioPlayerComponent';


interface renderGameGuesTrackProps {
    track: Track,
}
const RenderGameGuessTrackComponent: React.FC<renderGameGuesTrackProps> = ({ track }) => {
    const { configurationGame: { durationMs, timerListen, timerSong, timerGuess } } = useGameConfig();
    const [showComponent1, setShowComponent1] = useState(true);
    const [showComponent2, setShowComponent2] = useState(false);
    const { preview_url } = track;


    // useEffect(() => {
    //     // if (timerListen.active || timerGuess.active) {
    //     //     setShowComponent1(true);
    //     //     setShowComponent2(false);
    //     // } 
        
    //     // if (timerSong.active) {
    //     //     setShowComponent1(false);
    //     //     setShowComponent2(true);
    //     // }
    // }, [timerSong.active, timerListen.active])

    return (
        <div>

            {timerSong.active &&
                <div>
                    <AudioPlayerComponent
                        url={preview_url}
                        secondsToPlay={5}
                    />
                    <SongAnswerComponent
                        track={track} />
                </div>}
            {(timerListen.active || timerGuess.active) &&
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