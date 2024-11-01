import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import sidebar_img from '../Images/sidebar_icon.png'
import settings_icon from '../Images/settings_icon.png'
import logout_icon from '../Images/logout_icon.png'

const Sidebar = () => {
    const navigate = useNavigate();

    const logout = () => {
        sessionStorage.clear();
        navigate('/')
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark " tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body" >
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <img src={sidebar_img} className="rounded mx-auto d-block sidebar_logo " alt="..." />
                                </li>

                                <hr />

                                <li class="nav-item d-flex">
                                    <img src={settings_icon} alt="" className='sidebar_icons' />
                                    <Link className="nav-link" to='/User'>&nbsp;Profile Settings</Link>
                                </li>

                                <li class="nav-item d-flex">
                                    <img src={logout_icon} alt="" className='sidebar_icons' />
                                    <Link className="nav-link" to='/' onClick={logout}>&nbsp;Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Sidebar