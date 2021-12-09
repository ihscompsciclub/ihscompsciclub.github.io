import React from "react"
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import Dropdown from 'react-bootstrap/Dropdown'
import "./styles/personCard.css"
import "./styles/topNavBar.css"

export class TopNavBar extends React.Component {
    // needs a property curPage

    render() {
        return (
            <div>
                <div className="topnav">
                    <img src="/transBGLogo.png" alt="logo" />
                    <p>IHS Comp Sci Club</p>
                    <Link to="/" onClick={() => { window.scroll({ 'top': 0, 'left': 0 }) }}>Home</Link>
                    <Link to="/faqs" onClick={() => { window.scroll({ 'top': 0, 'left': 0 }) }}>FAQs</Link>
                    <TopNavBarElement items={["Officers", "Members", "Gallery"]} idItems={["officers", "members", "gallery"]}
                        to="/about" curPage={this.props.curPage}>About Us</TopNavBarElement>
                    <TopNavBarElement items={["Workshops", "Hackathons", "Projects", "Upcoming Events", "Career Days"]}
                        to="/activities" idItems={["clubWorkshops", "hackathons", "projects", "upcomingEvents", "careerDays"]}
                        curPage={this.props.curPage}>
                        Activities</TopNavBarElement>
                    <TopNavBarElement items={["Form", "Socials"]} idItems={["airtableForm", "socials"]} to="/contact"
                        curPage={this.props.curPage}>
                        Contact Us</TopNavBarElement>
                </div>
                <p id="firstItem"></p>
            </div>
        )
    }
}

class TopNavBarElement extends React.Component {
    // props needed
    // items: []
    // to : string (the relative link where the page is)

    // optional argument:
    // iditems: []
    // these are the id references to the headers

    constructor(props) {
        super(props)

        // setup idItems
        this.idItems = (typeof this.props.idItems == 'undefined') ? this.props.items : this.props.idItems
        console.log(this.idItems)

        // setup the renderItems (the items to be in the list)
        this.renderItems = []
        for (var i = 0; i < this.props.items.length; i++) {
            this.renderItems.push(this.createHashLinks(i))
        }

        // shortcut reference for the title
        this.title = this.props.title

        this.state = { show_items: false }

        this.color = "white"

        this.timeout = (typeof this.props.timeout == 'undefined') ? 1000 : this.props.timeout
    }

    createHashLinks(number) {
        return <HashLink className="dropdown-item" to={this.props.to + "#" + this.idItems[number]} key={this.idItems[number]}>
            {this.props.items[number]}
        </HashLink>
    }


    render() {
        return (
            <Dropdown as="span" align="start" className="topnavdd"
                onMouseOver={() => { this.color = "black"; this.setState({ show_items: true }); console.log('entered'); }}
                onMouseLeave={() => { this.color = "white"; this.setState({ show_items: false }); console.log('left'); }}
                onClick={() => { this.setState({ show_items: false }); }}
                show={this.state.show_items}>

                <Link onClick={() => { window.scroll({ 'top': 0, 'left': 0 }); console.log("top") }} to={this.props.to}
                    style={{ textAlign: "center", width: "max-content", float: "center", color: this.color }}>
                    {this.props.children}
                </Link>
                <Dropdown.Menu show={this.state.show_items} style={{
                    backgroundColor: "#26428b", color: "white",
                    width: "unset", transform: ("translateY(" + 1 / this.renderItems.length * 100 + "%) translateX(-11.65%)")
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