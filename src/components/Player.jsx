import React, { useEffect, useRef, useState } from 'react';

const Player = ({ song, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        setIsClosing(false);
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.load();
            audioRef.current.play().catch(() => { });
        }
    }, [song]);

    const handleClose = () => {
        setIsClosing(true);
        if (audioRef.current) audioRef.current.pause();
        setTimeout(() => {
            onClose();
        }, 300);
    };

    const player = {
        position: 'fixed',
        bottom: isClosing ? '-150px' : '0',
        width: '100%',
        background: '#111',
        color: 'white',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '10px',
        zIndex: 1000,
        transition: 'bottom 0.3s ease-in-out',
    };

    const topRow = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    const closeBtn = {
        background: 'transparent',
        border: 'none',
        color: 'white',
        fontSize: '1.2rem',
        cursor: 'pointer',
    };

    if (!song) return null;

    return (
        <div style={player} className='player'>
            <div style={topRow}>
                <p className='fs-4'>{song.name} - {song.artist}</p>
                <button style={closeBtn} onClick={handleClose}><i className='bi bi-x-lg'></i></button>
            </div>
            <audio ref={audioRef} controls autoPlay loop>
                <source src={song.audio} type="audio/mpeg" />
            </audio>
        </div>
    );
};

export default Player;