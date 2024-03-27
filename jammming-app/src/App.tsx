import { useCallback, useState } from 'react';
import { Playlist } from './components/Playlist'
import { SearchBar } from './components/SearchBar'
import SearchResults from './components/SearchResults';
import { Spotify } from './util/Spotify';
import './index.css'

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([])

  const search = useCallback((term: any) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track: any) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
      return;

      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track: any) => {
    setPlaylistTracks((prevTracks) =>
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name: any) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <>
      <section id='header'>
        <div className="site-head">
          <div className="title">Ja<div className="emphasis">mmm</div>ing</div>
        </div>
      </section>
      <section id="search">
        <SearchBar onSearch={search}/>
      </section>

      <div className="container">
        <section id="results">
          <div id="centered">
            <h1>Results</h1>
            <hr />
            <SearchResults searchResults={searchResults} onAdd={addTrack} />
          </div>
        </section >

        <section id="new-playlist">
          <div id="centered">
            <h1>New Playlist</h1>
            <hr />
            <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist} 
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default App
