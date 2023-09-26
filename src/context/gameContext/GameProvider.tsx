import { useReducer } from "react";
import { ConfigurationGame, Steps } from "../../api/interfaces/InterfacesContext";
import { GameContext } from "./GameContext";
import { ConfigurationAction, GameReducer } from "./GameReducer";
import Artist from "../../entities/artist/Artist";
import ApiLevels from "../../api/levels/ApiLevels";

const apiLevels = new ApiLevels();

interface props {
    children: JSX.Element | JSX.Element[];
}

const initial_state: ConfigurationGame = {
    level: "",
    genres: [],
    artists: [],
    guessFromBeggining: false,
    durationMs: 5,
    tracksQuantity: 5,
    tracks: [],
    isTrackAlreadyGuessed: false,
    timerListen: {
        time: 5, 
        active: true
    },
    timerSong: {
        time: 5,
        active: false
    },
    timerGuess: {
        time: 10,
        active: false
    },
    stepGuess: Steps.LISTEN
}

const GameProvider = ({ children }: props) => {
    const [configurationGame, dispatch] = useReducer(GameReducer, initial_state);

    const handleOnSubmitConfigGame = async (configurationGame: ConfigurationGame) => {
        const tracks = await apiLevels.getTracksByLevel(configurationGame);
        dispatch({ type: ConfigurationAction.SUBMIT_CONFIG, payload: tracks });
    }
    const handleOnChangeLevel = (level: string) => {
        dispatch({ type: ConfigurationAction.CHANGE_LEVEL, payload: level })
    }
    const handleOnChangeGenres = (genre: string) => {
        dispatch({ type: ConfigurationAction.CHANGE_GENRE, payload: genre })
    }
    const handleOnChangeArtists = (artist: Artist) => {
        dispatch({ type: ConfigurationAction.CHANGE_ARTIST, payload: artist })
    }
    const handleOnChangeGuessFrom = (beggining: boolean) => {
        dispatch({ type: ConfigurationAction.CHANGE_BEGGINING, payload: beggining })
    }
    const handleOnChangeHowManySec = (durationMs: number) => {
        dispatch({ type: ConfigurationAction.CHANGE_DURATION_MS, payload: durationMs })
    }
    const handleOnChangeHowManySongs = (tracksQuantity: number) => {
        dispatch({ type: ConfigurationAction.CHANGE_TRACKS_QUANTITY, payload: tracksQuantity })
    }
    const handleOnChangeIsTrackAlreadyGuessed = (isAlreadyGuessed: boolean) => {
        dispatch({ type: ConfigurationAction.CHANGE_IS_TRACK_ALREADY_GUESSED, payload: isAlreadyGuessed })
    }
    const handleOnActiveListen = (isActiveListen: boolean) => {
        dispatch({ type: ConfigurationAction.ACTIVE_LISTEN, payload: isActiveListen })
    }
    const activeListenTimer = (listenTime: number) => {
        dispatch({ type: ConfigurationAction.TIME_LISTEN, payload: listenTime })
    }
    const handleOnActiveGuess = (isGuessActive: boolean) => {
        dispatch({ type: ConfigurationAction.ACTIVE_GUESS, payload: isGuessActive })
    }
    const handleOnActiveSong = (isSongActive: boolean) => {
        dispatch({ type: ConfigurationAction.ACTIVE_SONG, payload: isSongActive })
    }

    return (
        <GameContext.Provider value={{
            configurationGame,
            handleOnSubmitConfigGame,
            handleOnChangeLevel,
            handleOnChangeGenres,
            handleOnChangeArtists,
            handleOnChangeGuessFrom,
            handleOnChangeHowManySec,
            handleOnChangeHowManySongs,
            handleOnChangeIsTrackAlreadyGuessed,
            handleOnActiveListen,
            handleOnActiveGuess,
            handleOnActiveSong,
            activeListenTimer,
        }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameProvider;