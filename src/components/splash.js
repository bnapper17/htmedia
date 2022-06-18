import './splash.css'
import {gsap, Power3} from 'gsap';
import {useRef, useEffect} from 'react';

function Splash() {

    const splash = useRef();
    const title= useRef();
    const subtitle = useRef();

    useEffect(() => {
        const timeline = gsap.timeline();

        timeline.fromTo(title.current, { y:'-250%', opacity:0}, {duration: 2, y:0, opacity:1})
        timeline.fromTo(subtitle.current, { opacity: 0}, {duration: 1, opacity: 1})
        timeline.fromTo(splash.current, {opacity: 1}, {duration: 2, opacity: 0, ease: Power3})
    }, []);

    return(
        <div className="splash" ref={splash}>
            <h1 className='splash_title' ref={title}>Heavenly Treasures</h1>
            <h2 className='splash_subtitle' ref={subtitle}>Media Archive</h2>
        </div>
    )
}

export {Splash}