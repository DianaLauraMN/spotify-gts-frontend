import style from './GameEnded.module.css';
import SpotifyButton from '../utilitiesComponents/spotifyButton/SpotifyButton'
import usePlay from '../../hooks/usePlay'
import useGame from '../../hooks/useGame';
import useGTS from '../../hooks/useGTS';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const GameEnded = () => {
    const { resetStateGame } = useGame();
    const { playState: { score, failed }, resetStatePlay } = usePlay();
    const { resetStateGTS } = useGTS();
    const navigate = useNavigate();

    let message;

    if (score >= 0 && score <= 59) {
        message = 'Try Again';
    } else if (score >= 60 && score <= 99) {
        message = 'Good Job!';
    } else if (score === 100) {
        message = '🔥 On Fire!! 🔥';
    }

    const handleOnClick = () => {
        resetStateGame();
        resetStatePlay();
        resetStateGTS();
        navigate('/configGame');
    }
    return (
        <div>
            <div className={style.gameResultsContainer}>
                <h1>{message}</h1>
            </div>
            {failed.length > 0 &&
                <div className={style.failedTracksContainer}>
                    <div className={style.scrollContainer}>
                        <div className={style.scrollContent}>
                            <div className={style.cards}>
                                {
                                    failed?.map((track, key) => (
                                        <div key={key}>

                                            <div id="cardSong" className={style.cardSong}>
                                                <div className={style.coverAlbum}>
                                                    <img src={track.album.images[0].url} alt="" />
                                                </div>
                                                <div className={style.albumData}>
                                                    <h3>{track.name}</h3>
                                                    <h4>
                                                        {track.artists.map((artist) => (
                                                            <React.Fragment key={artist.id}>{artist.name + ' '}</React.Fragment>
                                                        ))}
                                                    </h4>
                                                </div>

                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }

            <SpotifyButton
                title={'Play Again'}
                type={'gameOver'}
                onClick={handleOnClick}
            />
        </div>
    )
}

export default GameEnded