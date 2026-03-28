import React from 'react'
import './Hero.css'
import heroImg from '../assets/images/hero-img.png'
import Navbar from './Navbar'


const Hero = ({ scrollToSongs }) => {
    return (
        <>
            <header className='header'>
                <Navbar />
                <div className='hero d-flex align-items-center justify-content-between text-white'>
                    <div>
                        <h2 className='mb-4'>Good <span>Music. </span> Better Vibes.</h2>
                        <p className='m-0 fs-5'>Discover and play gospel songs that uplift your mood anytime.</p>
                        <button onClick={scrollToSongs} className='btn btn-warning my-5 py-2 px-4 w-auto fw-semibold'>Start Listening <i className="bi bi-music-note-beamed"></i></button>
                    </div>
                    <img src={heroImg} alt="" />
                </div>
            </header>
        </>
    )
}

export default Hero