import style from "./RecentlyPlayedComponent.module.css";
import React, { useEffect } from "react";
import useGTS from "../../hooks/useGTS";

const RecentlyPlayedComponent = () => {
    const { gtsState: { tracksRecentlyPlayed }, loadTracksRecentlyPlayed } = useGTS();

    useEffect(() => {
        loadTracksRecentlyPlayed();
    }, [])

    return (
        <div className={style.recentlyPlayedContainer}>
            <div className={style.scrollContainer}>
                <div className={style.scrollContent}>
                    <div className={style.cards}>
                        {
                            tracksRecentlyPlayed.map((track, key) => (
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