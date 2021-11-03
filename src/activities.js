import React from 'react'
import { TopNavBar, Filler } from './util'
import Dropdown from 'react-bootstrap/Dropdown'

export class Activities extends React.Component {
    render() {
        return (
            <div className="paddedContent Content">
                <TopNavBar curPage="activities" />
                <h1 id="clubWorkshops" className="centeredContent">CLUB WORKSHOPS</h1>
                <h2>We have workshops on multiple programming languages,
                    including workshops on web development,
                    game development as well as cybersecurity.
                    We also have guest speakers and career fairs.
                </h2>

                <h1 id="hackathons" className="centeredContent">HACKATHONS TODO</h1>
                <Filler />
                <h1 id="projects" className="centeredContent">PROJECTS</h1>
                <h2>As a club, we’re currently working on: this website!
                    We encourage our members to try developing their own projects.
                    heck out these magnificent projects made by our outstanding people in our club.
                </h2>

                {/*TODO have real projects here*/}
                <ProjectDisplayer linkArray={["https://replit.com/@ritza/demo-embed?embed=true", "https://replit.com/@Chreliot/CardGames?embed=true"]} />
                {/*<iframe title="project1" frameborder="0" width="100%" height="500px" src="https://replit.com/@ritza/demo-embed?embed=true"></iframe>*/}
                <h1 id="upcomingEvents" className="centeredContent">UPCOMING EVENTS TODO</h1>
                <h2>Cool Calendar HERE</h2>
                <Filler />
                <h1 id="careerDays">CAREER DAYS TODO</h1>
                <Filler />
            </div >
        )
    }
}

class ProjectDisplayer extends React.Component {
    // provide a property 'linkArray'
    constructor(props) {
        super(props)
        this.items = this.props.linkArray
        this.names = this.props.projectNames
        if (typeof this.names == 'undefined') {
            this.names = []
            for (let i = 0; i < this.items.length; i++) {
                this.names.push("project " + i)
            }
        }

        this.renderItems = []
        this.menuItems = []
        for (let i = 0; i < this.items.length; i++) {
            this.menuItems.push(this.createMenuItems(i))
            this.renderItems.push(<iframe title={"project" + i} frameborder="0" width="100%" height="500px" src={this.items[i]}></iframe>)
        }
        this.state = { index: 0 }
    }

    createMenuItems(number) {
        return <Dropdown.Item onClick={() => { this.setState({ index: number }); console.log('will set state to' + number) }}>
            {this.names[number]}
        </Dropdown.Item>
    }

    render() {
        return (
            <div>
                {/* the project chooser*/}
                <Dropdown>
                    <Dropdown.Toggle>See All of our Projects</Dropdown.Toggle>
                    <Dropdown.Menu style={{ backgroundColor: "lightblue" }}>
                        {this.menuItems}
                    </Dropdown.Menu>
                </Dropdown >
                <br />
                {/*The project displayer*/}
                {this.renderItems[this.state.index]}
            </div>
        )
    }
}