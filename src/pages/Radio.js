import { AudioContext } from '../context/AudioContext.js';
import {useContext} from 'react';
import {Controls} from '../components/Controls.js';
import './Radio.css';

function Radio() {

    const {trackArray, selectTrack} = useContext(AudioContext);

    const radioList = trackArray.filter(track => track.type === 'radio');

    const selectRadioTrack = (e) => {
            const trackId = e.target.getAttribute('id');
            selectTrack(radioList[trackId])
    }
    
    return(

        <div className="trackList">
            {radioList.map((track, i) => {
                return (
                    <div className="track" key={i} 
                        id={i} onClick={selectRadioTrack}>
                        {/* <h2 className="info track_name">{track.name}</h2> */}
                        <h2 className="info track_date">{track.date}</h2>
                    </div>
                )
            })}
            <Controls />
        </div>
    )
}

export {Radio};