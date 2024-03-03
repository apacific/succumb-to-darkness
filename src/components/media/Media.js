import MediaPlayer from "../media-player/MediaPlayer";
import balloons from "./assets/chaos-balloons.mp3";
import reality from "./assets/distant-reality.mp3";
import american from "./assets/i-am-an-american.mp3";
import music from "./assets/lets-talk-about-music.mp3";

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
        <div id="player-wrapper">
          <MediaPlayer link={s.link} title={s.title} />
        </div>
      </div>
    )
  );
};

export default Media;
