import { createContext } from "react";
import Track from "../../entities/track/Track";

export interface IPlayState {
    asserts: Track[],
    failed: Track[],
    trackAnswer: Track | null,
    score: number,
    trackIsPlaying: boolean,
    currentTrackIndex: number,
    timer:number,
}
export type PlayContextProps = {
    playState: IPlayState,
    handleOnChangeTrackPlaying: (trackIsPlaying: boolean) => void,
    handleOnChangeCurrentTrack: (currentTrackIndex: number) => void
    // handleOnChangeAsserts: (asserts: Track[]) => void
    // handleOnChangeFailed: (failed: Track[]) => void

}

export const PlayContext = createContext<PlayContextProps>({} as PlayContextProps);