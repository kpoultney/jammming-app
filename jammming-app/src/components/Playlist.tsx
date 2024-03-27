import { useCallback } from 'react';
import '../index.css'
import TrackList from './Tracklist';

export function Playlist(props: any) {

  const handleNameChange = useCallback(
    (event: any) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
  );

  return (
    <>
      <div id="playlist-styles">
        <input onChange={handleNameChange} defaultValue={"New Playlist"} />
        <TrackList
          tracks={props.playlistTracks}
          isRemoval={true}
          onRemove={props.onRemove}
        />
        <button id="special" onClick={props.onSave}>Save to Spotify</button>
      </div>
    </>
  )
}