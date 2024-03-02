import MediaPlayer from "../media-player/MediaPlayer";

const balloons = 'https://dl.musopen.org/recordings/9dae5fa1-9d59-4381-a8c2-acfc8885aec3.mp3';
const reality = 'https://dl.musopen.org/recordings/e974578e-4133-418e-8d09-a3c2d66635f6.mp3';
const american = 'https://dl.musopen.org/recordings/816026fd-971d-4b19-87a6-8d8c74436a82.mp3';
const music = 'https://dl.musopen.org/recordings/79a9a14a-66f8-4a52-aefb-c174efab8b6c.mp3';

function Media() {
  const Balloons = {
    title: "Chaos Balloons",
    link: balloons
  };
  const Reality = {
    title: "Distant Reality",
    link: reality
  };
  const American = {
    title: "I am an American",
    link: american
  };
  const Music = {
    title: "Let's Talk About Music",
    link: music
  };

  const Playlist = [Balloons, Reality, American, Music];

  return (
    Playlist.map(s =>
      <div id="audio-selection">
        <h2 id="selection-title" >
          {s.title}
        </h2>
        <div id="player-wrapper">
          <MediaPlayer link={s.link}/>
        </div>
      </div>
    )
  );
};

export default Media;
