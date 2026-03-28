import React, { forwardRef, useEffect, useRef, useState } from 'react'

const Songs = forwardRef(({ setCurrentSong }, ref) => {
    const spinnerOverlay = {
        display: 'none',
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, .5)',
        zIndex: '1001',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }

    const [songs, setSongs] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState('')

    useEffect(() => {
        fetch('https://music-player-api-ybjs.onrender.com/api/music')
            .then(res => {
                if (!res.ok) {
                    throw new Error("Network response was not ok")
                }
                return res.json();
            })
            .then(result => {
                setSongs(result);
                setIsLoading(false)
                // console.log(result);
            })
            .catch(err => {
                setErrorMsg('Cannot load songs. Check your connection')
                setIsLoading(false)
            })
    }, [])
    return (
        <>
            {isLoading
                ? <div style={spinnerOverlay}>
                    <div className="spinner-border text-warning" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                : errorMsg ? (
                    <div className="text-center text-danger fw-semibold fs-5 px-3 py-5 ">
                        {errorMsg}
                    </div>
                )
                    : (
                        <div ref={ref} style={{ padding: '70px 20px' }} className='d-flex align-items-start justify-content-center gap-4 flex-wrap'>
                            {songs.map(song => (
                                <div key={song.id} className="card shadow-lg border-0" style={{ width: '18rem' }} >
                                    <img src={song.image} className="card-img-top" alt="..." />
                                    <div className="card-body d-flex align-items-start justify-content-between gap-3">
                                        <div>
                                            <h5 className="card-title">{song.name}</h5>
                                            <p className="card-text my-2 fw-semibold lh-sm">{song.artist}</p>
                                            <p className="card-text m-0">{song.duration}</p>
                                        </div>
                                        <a onClick={() => setCurrentSong(song)} className=" btn btn-warning  rounded-5"><i className="bi bi-play-fill fs-5 m-0"></i></a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
        </>
    )
})

export default Songs