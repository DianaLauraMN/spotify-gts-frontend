import { createContext } from "react";
import { ConfigurationGame } from "../../api/interfaces/InterfacesContext";
import Artist from "../../entities/artist/Artist";

export type GameContextProps = {
    configurationGame: ConfigurationGame;
    handleOnSubmitConfigGame: (configurationGame: ConfigurationGame) => void,
    handleOnChangeLevel: (level: string) => void;
    handleOnChangeGenres: (genre: string) => void;
    handleOnChangeArtists: (artist: Artist) => void;
    handleOnChangeGuessFrom: (beggining: boolean) => void;
    handleOnChangeHowManySec: (durationMs: number) => void;
    handleOnChangeHowManySongs: (tracksQuantity: number) => void;
    handleOnChangeIsTrackAlreadyGuessed: (beggining: boolean) => void;
    handleOnActiveListen: (isListenActive: boolean) => void;
    activeListenTimer: (listenTime: number) => void;
    handleOnActiveGuess: (isGuessActive: boolean) => void;
    handleOnActiveSong: (isSongActive: boolean) => void;
}

export const GameContext = createContext<GameContextProps>({} as GameContextProps);