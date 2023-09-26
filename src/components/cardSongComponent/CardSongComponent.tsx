import style from "./CardSongComponent.module.css";
import Track from "../../entities/track/Track";
import React, { useEffect } from "react";
import usePlay from "../../hooks/usePlay";
import useGameConfig from "../../hooks/useGameConfig";
import RenderGameGuessTrackComponent from "../renderGameGuessTrack/RenderGameGuessTrackComponent";

interface CardSongComponentProps {
    tracks: Track[];
}

const CardSongComponent: React.FC<CardSongComponentProps> = ({ tracks }) => {

    const { playState: { currentTrackIndex }, handleOnChangeCurrentTrack } = usePlay();
    const { configurationGame: { timerListen, timerSong, timerGuess }, handleOnActiveSong, handleOnActiveListen } = useGameConfig();
    const currentTrack = tracks[currentTrackIndex];

    const timerToLoadNextTrack = () => {
        return ((timerListen.time * 1000) + (timerGuess.time * 1000) + (timerSong.time * 1000))
    }

    useEffect(() => {
        setTimeout(() => {
            handleOnActiveSong(false);
            handleOnChangeCurrentTrack(currentTrackIndex < tracks.length - 1 ? currentTrackIndex + 1 : 0);
            handleOnActiveListen(true);
        }, timerToLoadNextTrack());
    }, [currentTrack]);

    return (
        <div className={style.cardSongContainer}>
            <div className={style.titleContainer}>
                <h1>Guess The Song</h1>
            </div>
            <div className={style.trackContainer}>
                {currentTrack && (
                    <div>
                        <RenderGameGuessTrackComponent
                            track={currentTrack}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardSongComponent;
