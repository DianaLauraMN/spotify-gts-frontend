import { createContext } from "react";
import Track from "../../entities/track/Track";

export interface IPlayState {
    asserts: Track[],
    failed: Track[],
    trackAnswer: Track | null,
    score: number,
    trackIsPlaying: boolean,
    currentTrackIndex: number,
    currentTrack: Track | null,
    timerUser: number,
    isGameOver: boolean,
    [key: string]: any; // Firma de índice para permitir cualquier propiedad de tipo 'any'
}
export type PlayContextProps = {
    playState: IPlayState,
    handleOnChangeTrackPlaying: (trackIsPlaying: boolean) => void,
    handleOnChangeCurrentTrackIndex: (currentTrackIndex: number) => void,
    handleOnChangeAsserts: (assert: Track) => void,
    handleOnChangeFailed: (fail: Track) => void,
    handleOnChangeScore: (score: number) => void,
    handleOnChangeTrackAnswer: (trackChosen: Track) => void,
    handleOnChangeCurrentTrack: (currentTrack: Track) => void,
    toggleIsGameOver: (isGameOver: boolean) => void,
    restartGameValues: (attributeToRestart: string) => void,
    handleOnChangeTimerUser: (timerUser: number) => void,
}

export const PlayContext = createContext<PlayContextProps>({} as PlayContextProps);