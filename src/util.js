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
                    <Link to="/faqs">FAQs</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/activities">Activities</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <p id="firstItem"></p>
            </div>
        )
    }
}

export class PersonCard extends React.Component {
    // props needed:
    // imgSrc
    // name
    // shortDesc

    render() {
        return (
            //assumes white background is wanted for cards
            <div className="card">
                <img src={this.props.imgSrc} alt={this.props.name}></img>
                <h3>{this.props.name}</h3>
                <p>{this.props.shortDesc}</p>
            </div>
        )
    }
}

export class CoolScrollEffect extends React.Component {
    render() {
        return (
            <div className="coolScrollEffect">
                {this.props.children}
                <hr />
            </div>
        )
    }
}

export class Filler extends React.Component {
    fill(times) {
        var text = "Filler<br/>\n"
        var retText = ""
        for (var i = 0; i < times; i++) {
            retText += text;
        }
        return retText;
    }

    render() {
        return <h2>{this.fill(300)}</h2>
    }
}