import { Playlist } from './components/Playlist'
import { SearchBar } from './components/SearchBar'
import { SearchResults } from './components/SearchResults'
import './index.css'

function App() {

  return (
    <>
      <section id='header'>
        <div className="site-head">
          <div className="title">Ja<div className="emphasis">mmm</div>ing</div>
        </div>
      </section>
      <section id="search">
        <SearchBar />
      </section>

      <div className="container">
        <section id="results">
          <div id="centered">
            <h1>Results</h1>
            <hr />
            {/* <SearchResults /> */}
          </div>
        </section >

        <section id="new-playlist">
          <div id="centered">
            <h1>New Playlist</h1>
            <hr />
          </div>
          <Playlist />
        </section>
      </div>
    </>
  )
}

export default App
