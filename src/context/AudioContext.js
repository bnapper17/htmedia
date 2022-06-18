import { createContext, useState } from 'react';
import {library} from './Library';

const AudioContext = createContext();

function AudioProvider({children}) {

    const [play, setPlay] = useState(false);
    const [track, setTrack] = useState(null);
    const [duration, setDuration] = useState('0:00');
    const [currentTime, setCurrentTime] = useState(0);

    const togglePlay = () => {
        track !== null ? setPlay(prevPlay => !prevPlay) : setPlay(play);
    }

    const selectTrack = (selected) => {
        setTrack(selected);
        setPlay(false);
    }

    const getDuration = (dur) => {
        setDuration(dur)
    }

    const getCurrentTime = cur => {
        setCurrentTime(cur);
    }


    const trackArray = library;
    return (
        <AudioContext.Provider value={{trackArray, play, togglePlay, selectTrack, track, 
                    getDuration, duration, currentTime, getCurrentTime}}>
            {children}
        </AudioContext.Provider>
    )
}

export {AudioContext, AudioProvider}