import style from "./RecentlyPlayedComponent.module.css";
import React, { useEffect, useState } from "react";
import useGTS from "../../hooks/useGTS";
import Track from "../../entities/track/Track";

const RecentlyPlayedComponent = () => {
    const { gtsState: { tracksRecentlyPlayed, searchResultsTracks }, loadTracksRecentlyPlayed } = useGTS();
    const [tracks, setTracks] = useState<Track[]>([]);
    loadTracksRecentlyPlayed();

    useEffect(() => {
        searchResultsTracks.length > 0 ? setTracks(searchResultsTracks) : setTracks(tracksRecentlyPlayed);
    }, [searchResultsTracks,tracksRecentlyPlayed]);

    return (
        <div className={style.recentlyPlayedContainer}>
            <div className={style.scrollContainer}>
                <div className={style.scrollContent}>
                    <div className={style.cards}>
                        {
                            tracks.map((track, key) => (
                                <div key={key}>

                                    <div className={style.cardSong}>
                                        <div className={style.coverAlbum}>
                                            <img src={track.album.images[0].url} alt="" />
                                        </div>
                                        <div className={style.albumData}>
                                            <h3>{track.name}</h3>
                                            <h4>
                                                {track.artists.map((artist) => (
                                                    <React.Fragment key={artist.id}>{artist.name}</React.Fragment>
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

export default RecentlyPlayedComponent