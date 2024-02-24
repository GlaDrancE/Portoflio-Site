import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SideNav() {

    const iconRef = useRef(null);
    const mobileIconRef = useRef(null);
    const sideNavRef = useRef(null);
    const [showSideNav, setShowSideNav] = useState(false);

    //! close the menu when clicked outside
    useEffect(() => {
        const handleMenuClick = (event) => {
            if (iconRef.current && !iconRef.current.contains(event.target) && sideNavRef.current && !sideNavRef.current.contains(event.target) && !mobileIconRef.current.contains(event.target)) {
                setShowSideNav(false);
            }
        };
        document.addEventListener('click', handleMenuClick)
        return () => {
            document.removeEventListener('click', handleMenuClick);
        };
    }, []);
    function openNav() {
        setShowSideNav(true);
    }
    function closeNavbar() {
        setShowSideNav(false)
    }
    return (
        <>
            <div id="mobile-menu" onClick={openNav} ref={mobileIconRef}>
                <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 64 64" id="hamburger"><g fill="#000"><path d="M8.2 13h47.5v6.3H8.2zM8.2 28.8h47.5v6.4H8.2zM8.2 44.7h47.5V51H8.2z"></path></g></svg>
            </div>

            <div id="side-navbar" ref={sideNavRef} style={{ right: showSideNav ? '0' : '-320px' }}>
                <div className='position-absolute top-0 p-2' style={{ cursor: 'pointer' }} onClick={closeNavbar}>

                    <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} viewBox="0 0 24 24" id="close"><g data-name="Layer 2"><path fill={'#fff'} d="m13.41 12 4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" data-name="close"></path></g></svg>

                </div>
                <ul className='pl-2'>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/about'>
                        <li>About</li>
                    </Link>
                    <Link to='/projects'>
                        <li>Projects</li>
                    </Link>
                    <Link to='/education'>
                        <li>Education</li>
                    </Link>
                    <Link to="/blogs">
                        <li>Blog</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>
            <div id="openNav" >
                <div onClick={openNav} ref={iconRef}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 64 64" id="hamburger"><g fill="#fff"><path d="M8.2 13h47.5v6.3H8.2zM8.2 28.8h47.5v6.4H8.2zM8.2 44.7h47.5V51H8.2z"></path></g></svg>
                </div>
            </div>
        </>
    )
}
