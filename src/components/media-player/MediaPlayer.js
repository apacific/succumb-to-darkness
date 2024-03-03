import { AudioPlayer } from 'react-audio-play';
import { useState } from 'react';

const MediaPlayer = ({ title, link }) => {
    const [playing, setPlaying] = useState(false);
    return (
        <>
            
        <h2 id="selection-title" onClick={() => setPlaying(!playing)}>
            {title}
        </h2>
            { playing && <AudioPlayer
				backgroundColor="transparent"
				color="#cfcfcf"
                id="MediaPlayer"
				sliderColor="#94b9ff"
                src={link}
			/> }
        </>
    )
}

export default MediaPlayer;
