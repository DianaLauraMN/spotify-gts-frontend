import React, { useRef, useEffect } from "react";

interface AudioPlayerComponentProps {
    url: string;
    secondsToPlay: number;
}

const AudioPlayerComponent: React.FC<AudioPlayerComponentProps> = ({ url, secondsToPlay }) => {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (audioRef.current) {
            setTimeout(() => {
                pauseSong();
            }, (secondsToPlay) * 1000);
        }
    }, [url]);

    const pauseSong = () => {
        if (audioRef.current) {
            audioRef.current.pause();
        }
    }

    const playSong = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }

    return (
        <audio autoPlay ref={audioRef}>
            <source src={url} type="audio/mpeg" />
            Your browser doesn't support audio player.
        </audio>
    )
}

export default AudioPlayerComponent;
