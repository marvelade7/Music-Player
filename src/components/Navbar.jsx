import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container-fluid">

                {/* Logo */}
                <a className="navbar-brand fw-bold" href="#">
                    🎧 VibePlay
                </a>

                {/* Toggle (mobile) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Links */}
                <div className="collapse navbar-collapse justify-content-between" id="navbarNav">

                    <ul className="navbar-nav mx-auto gap-4">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Browse</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Library</a>
                        </li>
                    </ul>

                    {/* Right side */}
                    <div className="d-flex align-items-center gap-3">
                        <i className="bi bi-search text-white"></i>
                        <i className="bi bi-person-circle text-white fs-5"></i>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default Navbar