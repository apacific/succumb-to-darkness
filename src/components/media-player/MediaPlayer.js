import { AudioPlayer } from 'react-audio-play';
import { useState } from 'react';

const MediaPlayer = ({ link }) => {
    const [playing, setPlaying] = useState(false);
    return (
        <>
            <button id="play-ctrl" onClick={() => setPlaying(!playing)}>
                show/hide
            </button>
            { playing && <AudioPlayer
				backgroundColor="#2c2828"
				color="#cfcfcf"
                id="MediaPlayer"
				sliderColor="#94b9ff"
                src={link}
			/> }
        </>
    )
}

export default MediaPlayer;
