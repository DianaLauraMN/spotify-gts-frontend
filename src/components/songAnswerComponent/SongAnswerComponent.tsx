import React, { useEffect } from 'react'
import Track from '../../entities/track/Track';
import style from './SongAnswerComponent.module.css'
import useGameConfig from '../../hooks/useGameConfig';

interface songAnswerComponentProps {
    track: Track;
}
const SongAnswerComponent: React.FC<songAnswerComponentProps> = ({ track }) => {
    const { name, album, artists } = track;
    const coverAlbum = album.images[0].url;
    const { handleOnActiveSong, handleOnActiveListen, configurationGame: { timerGuess, timerSong } } = useGameConfig();

    useEffect(() => {
        if (timerSong.active && (!timerGuess.active)) {
            const timer = setTimeout(() => {
                handleOnActiveSong(false);
                handleOnActiveListen(true);
            }, timerSong.time * 1000);

            return () => {
                clearTimeout(timer);
            };

        }
    }, [timerSong.active, timerGuess.active])


    return (
        <div>
            <div className={style.albumCover}>
                <img src={coverAlbum} alt="Album" />
            </div>
            <div className={style.albumDataContainer}>
                <h2 className={style.titleSong}>{name}</h2>
                <h3 className={style.artistSong}>
                    {artists.map((artist) => (
                        <React.Fragment key={artist.id}>{artist.name}</React.Fragment>
                    ))}
                </h3>
                <h3 className={style.albumSong}>{album.name}</h3>
            </div>
        </div>
    )
}

export default SongAnswerComponent