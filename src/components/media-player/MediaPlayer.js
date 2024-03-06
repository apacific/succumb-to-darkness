import AudioPlayer from 'react-h5-audio-player';
import { useState } from 'react';
import './MediaPlayer.module.css';

const MediaPlayer = ({ title, link }) => {
    const [playing, setPlaying] = useState(false);
    return (
        <>
            <h2 id="selection-title" onClick={() => setPlaying(!playing)}>
                {title}
            </h2>
            { playing && <AudioPlayer
				autoPlay={true}
                customAdditionalControls={[]}
                id="MediaPlayer"
                onEnded={() => setPlaying(!playing)}
                src={link}
			/> }
        </>
    )
}

export default MediaPlayer;
