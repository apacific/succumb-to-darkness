import MediaPlayer from "../media-player/MediaPlayer";
import balloons from "./assets/chaos-balloons.mp3";
import exquisiteCorpse from "./assets/exquisite-corpse.mp3";
import plagueOfCorruption from "./assets/plague-of-corruption.mp3";
import saturnCalls from "./assets/saturn-calls.mp3";
import reality from "./assets/distant-reality.mp3";

function Media() {
  const Plague = {
    title: "Plague of Corruption (demo)",
    link: plagueOfCorruption
  };
  const Exquisite = {
    title: "Exquisite Corpse (demo)",
    link: exquisiteCorpse
  };
  const Saturn = {
    title: "Saturn Calls (demo)",
    link: saturnCalls
  };
  const Balloons = {
    title: "Chaos Balloons",
    link: balloons
  };
  const Reality = {
    title: "Distant Reality",
    link: reality
  };

  const Playlist = [Exquisite, Saturn, Plague, Balloons, Reality];

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
