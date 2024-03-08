import AudioPlayer from 'react-h5-audio-player';
import { useState } from 'react';
import './MediaPlayer.module.css';

const MediaPlayer = ({ title, link }) => {
    const [playing, setPlaying] = useState(false);
    return (
        <div>
            <h2
                style={{ color: playing ? 'white' : '' }}
                id="selection-title"
                onClick={() => setPlaying(!playing)}>
                {title}
            </h2>
            { playing && <AudioPlayer
				autoPlay={true}
                customAdditionalControls={[]}
                id="MediaPlayer"
                onEnded={() => setPlaying(!playing)}
                src={link}
			/> }
        </div>
    )
}

export default MediaPlayer;
