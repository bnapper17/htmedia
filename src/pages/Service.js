import { AudioContext } from '../context/AudioContext.js';
import { useContext } from 'react';
import {Controls} from '../components/Controls.js';
import './Service.css';


function Service() {
    const {trackArray, selectTrack} = useContext(AudioContext)
    const serviceList = trackArray.filter(track => track.type === 'service');
    
    const selectServiceTrack = (e) => {
        const trackId = e.target.getAttribute('id');
        selectTrack(serviceList[trackId])
    }
    return(
        <div className="service_trackList">
            {serviceList.map((track, i) => {
                return (
                    <div className="service_track" key={i} 
                        id={i} onClick={selectServiceTrack}>
                        <h2 className="info service_track_name">{track.name}</h2>
                        <h3 className="info service_track_date">{track.date}</h3>
                    </div>
                )
            })}
            <Controls />
        </div>
    )
}

export {Service};