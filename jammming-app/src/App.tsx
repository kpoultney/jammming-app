import { Playlist } from './components/Playlist'
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
      </section>

      <div className="container">
        <section id="results">
          <div id="centered">
            <h1>Results</h1>
            <hr />
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
