import React,{ Fragment, memo }from 'react'


import top_line from '../assets/images/top_line.jpg'
import navanaami_logo from '../assets/images/navanaami-logo.png';
import header_bg from '../assets/images/header-bg.png';

function Header() {
    return (
        <Fragment>
            {/* HEADER START------------------------------------------ */ }
            < div id = "preloader" >
                <div id="status">&nbsp;</div>
            </div >
            <div className="header" >
                <div className="topLine">
                    <img src={top_line} className="w-100 align-top" alt="Top Line" />
                </div>

                <div className="headerWrap">
                    <div className="main-container">
                        <nav className="navbar navbar-expand-lg mainNav">
                            <a className="navbar-brand navanaaniLogo" href="#">
                                <img src={navanaami_logo} alt="Logo" className="w-100" />
                            </a>
                            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                    </button> 
                                */}
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="icon-bar top-bar" />
                                <span className="icon-bar middle-bar" />
                                <span className="icon-bar bottom-bar" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarTogglerDemo01" style = {{justifyContent:'flex-end'}}>
                                <ul className="navbar-nav ml-auto cstNavbar">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about-project">About Projects</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#floor-plan">Floor Plan</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#aminities">Amenities</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#specification">Specification</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#location-map">Location Map</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#get-in-tuach">Get in Touch</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="headerBg">
                    <img src={header_bg} className="w-100" alt="Header BG" />
                </div>
            </div>
            {/* HEADER END-------------------------------------------- */ }
        </Fragment>
    )
}


export default memo(Header)

