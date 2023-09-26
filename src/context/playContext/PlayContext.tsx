import { createContext } from "react";
import Track from "../../entities/track/Track";

export interface IPlayState {
    tracksRecentlyPlayed: Track[],
    asserts: Track[],
    failed: Track[],
    trackAnswer: Track | null,
    score: number,
    trackIsPlaying: boolean,
    currentTrackIndex: number,
    tracksItemsSearchResults: Track[],
    timer:number,
}
export type PlayContextProps = {
    playState: IPlayState,
    handleOnChangeTrackPlaying: (trackIsPlaying: boolean) => void,
    handleOnChangeCurrentTrack: (currentTrackIndex: number) => void
    loadTracksRecentlyPlayed: () => void
    loadtracksItemsSearchResults: (itemName:string) => void
    // handleOnChangeAsserts: (asserts: Track[]) => void
    // handleOnChangeFailed: (failed: Track[]) => void

}

export const PlayContext = createContext<PlayContextProps>({} as PlayContextProps);