import React from "react"
import { Link } from 'react-router-dom'

export class TopNavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <img src="/transBGLogo.png" alt="logo" />
                    <p>IHS Comp Sci Club</p>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/activities">Activities</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <p id="firstItem"></p>
            </div>
        )
    }
}

