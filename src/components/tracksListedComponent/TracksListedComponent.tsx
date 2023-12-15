import style from "./TracksListedComponent.module.css"
import React, { useEffect, useState } from "react";
import useGTS from "../../hooks/useGTS";
import Track from "../../entities/track/Track";
import usePlay from "../../hooks/usePlay";
import useGame from "../../hooks/useGame";
import { Steps } from "../../api/interfaces/InterfacesContext";

const TrackListedComponent = () => {
    const [searchResults, setSearchResults] = useState<Track[]>([]);
    const [trackCardEnabled, setTrackCardEnabled] = useState(true);
    const { gtsState: { tracksRecentlyPlayed, searchResultsTracks }, loadTracksRecentlyPlayed } = useGTS();
    const { playState: { trackAnswer, currentTrack, isGameOver }, handleOnChangeAsserts, handleOnChangeFailed, handleOnChangeTrackAnswer } = usePlay();
    const { handleIsTrackAlreadyGuessed, handleOnGameStep } = useGame();

    if (tracksRecentlyPlayed.length === 0) { loadTracksRecentlyPlayed(); }

    useEffect(() => {
        searchResultsTracks.length > 0 ? setSearchResults(searchResultsTracks) : setSearchResults(tracksRecentlyPlayed);
    }, [searchResultsTracks, tracksRecentlyPlayed]);

    useEffect(() => {
        trackAnswer ? handleIsTrackAlreadyGuessed(true) : handleIsTrackAlreadyGuessed(false);
        trackAnswer ? setTrackCardEnabled(false) : setTrackCardEnabled(true);
        assignsGameResults();
       if (trackAnswer) handleOnGameStep(Steps.SONG);
    }, [trackAnswer]);

    const assignsGameResults = () => {
        if (trackAnswer && currentTrack) {
            ((trackAnswer.id === currentTrack.id) || (trackAnswer.name === currentTrack.name)) ? handleOnChangeAsserts(currentTrack) : handleOnChangeFailed(currentTrack);
        }
    }

    return (
        <div className={style.recentlyPlayedContainer}>
            <div className={style.scrollContainer}>
                <div className={style.scrollContent}>
                    <div className={style.cards}>
                        {
                            searchResults.map((track, key) => (
                                <div key={key}>

                                    <div id="cardSong" className={style.cardSong} onClick={() => {
                                        if (trackCardEnabled && (!isGameOver)) handleOnChangeTrackAnswer(track);
                                    }}>
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
    )
}

export default TrackListedComponent