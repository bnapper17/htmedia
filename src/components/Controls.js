import './Controls.css';
import { AudioContext } from '../context/AudioContext';
import { useContext, useRef, useEffect} from 'react';
import {IoPlayBack} from 'react-icons/io5';
import {IoPlayForward} from 'react-icons/io5';
import {IoPlay} from 'react-icons/io5';
import {IoPause} from 'react-icons/io5';

function Controls() {
    const {togglePlay, play, track, getDuration, duration, currentTime, getCurrentTime} = useContext(AudioContext);

    const progressBar = useRef();
    const audioPlayer = useRef();

    const progressLength = isNaN(duration) ? 1 : Math.floor(duration)

    useEffect(() => {
        progressBar.current.value = currentTime;
    })

    const formatTime = (time) => {
        const seconds = Math.floor(time);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
        return (minutes + ':' + formattedSeconds);
    }

    const setDuration = () => {
        const dur = audioPlayer.current.duration;
        getDuration(dur);
    };

    const updateTime = () => {
        const cur = audioPlayer.current.currentTime;
        getCurrentTime(cur);
    };

    const playPause = () => {
        togglePlay();
        !play ? audioPlayer.current.play() : audioPlayer.current.pause();
    }


    const skipForward = () => {
       audioPlayer.current.currentTime = currentTime + 30;
    }

    const skipBack = () => {
        audioPlayer.current.currentTime = currentTime - 30;
     }

    const changeTime = () => {
        audioPlayer.current.currentTime = progressBar.current.value;
    }
    

        return(
        <div className="control_bar" style={track ? {display:'flex'} : {display: 'none'}}>
            <div className="progress current">
                <p className="time">{!isNaN(currentTime) ? formatTime(currentTime) : '0:00'}</p>
                <input type="range" className='progress_bar' defaultValue='0'
                     max={progressLength} ref={progressBar} onChange={changeTime}/>
                <p className='time duration'>{!isNaN(duration) ? formatTime(duration - currentTime) : '0:00'}</p>
            </div>
            <div className="title_bar">
                <p className='track_info'>{track !== null ? `${track.name} ${track.date}` : 'Heavenly Treasures Archive'}</p>
            </div>
            <div className="controls">
                <button onClick={skipBack}><span className='skip'>30s</span> <IoPlayBack /></button>
                <button onClick={playPause}>{play ? <IoPause /> : <IoPlay/>}</button>
                <button onClick={skipForward}><IoPlayForward /> <span className='skip'>30s</span></button>
            </div>
            <audio src={track !== null ? track.source : ''} ref={audioPlayer}
            onLoadedMetadata={setDuration} onTimeUpdate={updateTime}></audio>
        </div>
    )
}

export {Controls};