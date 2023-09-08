import style from "./LoadUserTopArtists.module.css";
import { useEffect, useState } from "react";
import ApiArtists from "../../api/ApiArtists";
import { IApiArtistsControllerCalls } from "../../api/interfaces/IApiArtists";
import Artist from "../../entities/artist/Artist";
import GenericButtonComponent from "../utilitiesComponents/genericButton/GenericButtonComponent";
import { IApiTracksControllerCalls } from "../../api/interfaces/IApiTracks";
import ApiTracks from "../../api/ApiTracks";

const apiArtists: IApiArtistsControllerCalls = new ApiArtists();
const apiTracks: IApiTracksControllerCalls = new ApiTracks();

const LoadUserTopArtists = () => {
    const [artists, setArtists] = useState<Artist[] | undefined>(undefined);

    useEffect(() => {
        (async () => {
            const userTopArtists = await apiArtists.getUserTopArtists();
            const top = userTopArtists.slice(0, 5);
            //tryTracksBackend();
            setArtists(top);
        })();
    }, []);

    async function tryTracksBackend() {
        const savedTracks = await apiTracks.getUserSavedTracks();
        const topTracks = await apiTracks.getUserTopTracks();
        console.log("SAVED TRACKS");
        console.log(savedTracks);
        console.log("TOP TRACKS");
        console.log(topTracks);
    }

    return (
        <div className={style.artistsBtnOptions}>
            {
                artists?.map((artist, key) => (
                    <div key={key}>
                        <GenericButtonComponent text={artist.name} onClick={() => { }} />
                    </div>
                ))
            }
        </div>
    )
}

export default LoadUserTopArtists;