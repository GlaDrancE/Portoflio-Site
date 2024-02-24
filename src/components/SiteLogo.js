import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
export default function SiteLogo() {
    return (
        <header id="channel-logo">
            <Link to="/">
                <img src={logo} alt="" />
            </Link>
        </header>
    )
}
