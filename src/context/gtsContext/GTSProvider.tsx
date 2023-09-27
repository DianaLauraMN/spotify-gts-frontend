import { useReducer } from "react";
import { IStateGTS, GTSContext } from "./GTSContext";
import { GTSReducer, ApiAction } from "./GTSReducer";
import { IApiUserControllerCalls } from "../../api/interfaces/IApiUser";
import { IApiArtistsControllerCalls } from "../../api/interfaces/IApiArtists";
import ApiUser from "../../api/ApiUser";
import ApiArtists from "../../api/ApiArtists";

const apiUser: IApiUserControllerCalls = new ApiUser();
const apiArtists: IApiArtistsControllerCalls = new ApiArtists();

interface props {
    children: JSX.Element | JSX.Element[];
}

const initial_state: IStateGTS = {
    user: null,
    userTopArtists: [],
    userTopGenresSeeds: [],
}

const GTSProvider = ({ children }: props) => {
    const [apiState, dispatch] = useReducer(GTSReducer, initial_state);

    const loadUserProfile = async () => {
        dispatch({ type: ApiAction.LOAD_USER_PROFILE, payload: await apiUser.getUserData() })
    }

    const loadUserTop6Artists = async () => {
        const topArtists = await apiArtists.getUserTopArtists();
        dispatch({ type: ApiAction.LOAD_USER_TOP_ARTISTS, payload: topArtists.length > 6 ? topArtists.slice(0, 6) : topArtists })
    }

    const loadUserTop6GenresSeeds = async () => {
        const topGenresSeeds = await apiUser.getUserTopGenres();
        dispatch({ type: ApiAction.LOAD_USER_TOP_GENRES_SEEDS, payload: topGenresSeeds.length > 6 ? topGenresSeeds.slice(0, 6) : topGenresSeeds })
    }

    return (
        <GTSContext.Provider value={{
            apiState,
            loadUserProfile,
            loadUserTop6Artists,
            loadUserTop6GenresSeeds
        }}>
            {children}
        </GTSContext.Provider>
    )
}

export default GTSProvider;