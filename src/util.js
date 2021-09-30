import React from "react"
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'

export class TopNavBar extends React.Component {
    render() {
        return (
            <div>
                <div className="topnav">
                    <img src="/transBGLogo.png" alt="logo" />
                    <p>IHS Comp Sci Club</p>
                    <Link to="/" onClick={() => { window.scroll({ 'top': 0, 'left': 0 }) }}>Home</Link>
                    <Link to="/faqs" onClick={() => { window.scroll({ 'top': 0, 'left': 0 }) }}>FAQs</Link>
                    <TopNavBarElement items={["officers", "members", "gallery"]} title="About Us" to="/about" />
                    <Link to="/activities" onClick={() => { window.scroll({ 'top': 0, 'left': 0 }) }}>Activities</Link>
                    <Link to="/contact" onClick={() => { window.scroll({ 'top': 0, 'left': 0 }) }}>Contact Us</Link>
                </div>
                <p id="firstItem"></p>
            </div>
        )
    }
}

class TopNavBarElement extends React.Component {
    // props needed
    // items: []

    constructor(props) {
        super(props)

        this.renderItems = []
        for (var i = 0; i < this.props.items.length; i++) {
            this.renderItems.push(<Dropdown.Item href={this.props.to + "#" + this.props.items[i]}>
                {this.props.items[i]}
            </Dropdown.Item>)
        }
        this.title = this.props.title

        this.state = { show_items: false }

        this.color = "white"
    }



    render() {
        return (
            <Dropdown as="span" align="start" className="topnavdd"
                onMouseEnter={() => { this.color = "black"; this.setState({ show_items: true }); console.log('entered'); }}
                onMouseLeave={() => { this.color = "white"; this.setState({ show_items: false }); console.log('left'); }}>

                <Link to={this.props.to} style={{ textAlign: "center", width: "max-content", float: "center", color: this.color }}>
                    {this.title}
                </Link>
                <Dropdown.Menu show={this.state.show_items} style={{
                    backgroundColor: "#26428b", color: "white",
                    width: "unset", transform: ("translateY(" + 1 / this.renderItems.length * 100 + "%) translateX(-10%)")
                }}>
                    {this.renderItems}
                </Dropdown.Menu>

            </Dropdown >
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