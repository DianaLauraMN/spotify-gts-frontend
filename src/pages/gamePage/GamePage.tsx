import { useEffect } from 'react';
import ApiSpotify from '../../api/ApiSpotify';
import { IApiControllerCalls } from '../../api/IApiSpotify';

const apiSpotify: IApiControllerCalls = new ApiSpotify();
const GamePage = () => {

    useEffect(() => {
        (async () => {
            //const item = await apiSpotify.getTrackById('11dFghVXANMlKmJXsNCbNl');
            // const item = await apiSpotify.getArtistById('0ghlgldX5Dd6720Q3qFyQB');
            const item = await apiSpotify.getUserData();
            //const item = await apiSpotify.getTracksByName('forget me not');
            //const item = await apiSpotify.getUserTopTracks();
            //const item = await apiSpotify.getArtistTopTracks('bts');
            //const item = await apiSpotify.getArtistAllTracks('seventeen');
            //const item = await apiSpotify.getUserTopArtists();
            //const item = await apiSpotify.getUserPlaylists();
            //const item = await apiSpotify.getUserSavedTracks();
            //const item = await apiSpotify.getUserRecommendations();
            //const item = await apiSpotify.getTracksByGenre('kpop');
            //const item = await apiSpotify.getUserTopGenres();

            console.log(item);
        })();
    }, []);

    return (
        <div>
            <h2>Bienvenido gracias por autenticarte</h2>
            {localStorage.access_token && <h3>Tu token se ha almacenado correctamente</h3>}
        </div>
    )
}

export default GamePage