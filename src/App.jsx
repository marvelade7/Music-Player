import React, { useRef, useState } from 'react'
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'
import Hero from './components/Hero'
import Songs from './components/Songs'
import Player from './components/Player'
// import SpotifyStreams from './components/SpotifyStreams';

const App = () => {
  const songsRef = useRef(null)
  const [currentSong, setCurrentSong] = useState(null);
  const scrollToSongs = () => {
    songsRef.current.scrollIntoView({ behavior: "smooth" });
  };

    const [search, setSearch] = useState('')


  
  return (
    <>
    {/* <SpotifyStreams/> */}
      <Hero scrollToSongs={scrollToSongs} setSearch={setSearch} />
      <Songs ref={songsRef} setCurrentSong={setCurrentSong} />
      {currentSong && (
        <Player
          song={currentSong}
          onClose={() => setCurrentSong(null)}
          search={search}
        />
      )}
      {/* <Player song={currentSong} onClose={() => setCurrentSong(null)} /> */}
    </>
  )
}

export default App