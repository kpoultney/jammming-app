import '../index.css'
import { bedtimePlaylist } from './Fake Data/BedtimePlaylist';

export function Playlist() {

  function savePlaylist(): string[] {
    const playlistNames: string[] = [];

    for (let i = 0; i < bedtimePlaylist.length; i++) {
      playlistNames.push(bedtimePlaylist[i].name);
    }

    console.log(playlistNames);
    return playlistNames;
  }

  return (
    <>
      <div id="playlist-styles">
        <button id="special" onClick={() => savePlaylist()}>Save to Spotify</button>
      </div>
    </>
  )
}