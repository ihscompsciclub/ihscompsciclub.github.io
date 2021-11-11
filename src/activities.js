import React from 'react'
import { TopNavBar, Filler, PersonCard } from './util'
import Dropdown from 'react-bootstrap/Dropdown'

export class Activities extends React.Component {
    render() {
        return (
            <div className="paddedContent Content">
                <TopNavBar curPage="activities" />

                {/**Club Workshops content */}
                <h1 id="clubWorkshops" className="centeredContent">CLUB WORKSHOPS</h1>
                <h3>We have workshops on multiple programming languages,
                    including workshops on web development,
                    game development as well as cybersecurity.
                    We also have guest speakers and career fairs.
                </h3>
                <h3>Links to our workshops:</h3>
                <li>September 15th - Intro to JS - <a href="https://docs.google.com/presentation/d/1X25EUVfhqo5IY37lySNBjxJYqObj5BOuPjR5zV7fLeE/edit?usp=sharing" target="blank">Slides</a></li>
                <li>September 22nd - JavaScript, Week 2 - <a href="https://docs.google.com/presentation/d/1otMvo6YIxJAhTd5OLH9v5R3QNlP_MREu2V1sIpGe8cc/edit?usp=sharing" target="blank">Slides</a></li>
                <li>October 6th - JavaScript, Week 3 - <a href="https://docs.google.com/presentation/d/1WzOG8fZYrqFmi6ocixuBlB6NCMY930bxYYa_4EycpbE/edit?usp=sharing" target="blank">Slides</a></li>
                <li>October 13th - JavaScript, Week 4 (Intro to HTML) - <a href="https://docs.google.com/presentation/d/1a6lQlZHAcveHT4g8ZwVLM43E46n84V_mqfWvaLyP1AY/edit?usp=sharing" target="blank">Slides</a></li>
                <li>October 20th - JavaScript, Week 5 (HTML, CSS, JS)- <a href="https://docs.google.com/presentation/d/13xbqdkeIoxD_CtR3cd2svG9oZrhhYJaTPpSRSISRdfU/edit?usp=sharing" target="blank">Slides</a></li>
                <li>October 27th - No Slides (had a guest speaker instead)</li>
                <li>November 3th - Version Control Week 1- <a href="https://docs.google.com/presentation/d/1GDZHlU9hCABsqSTGaLThmWfdxpPhizL-KcM12cVQnts/edit?usp=sharing" target="blank">Slides</a></li>
                <li>November 10th - Version Control Week 2- <a href="https://docs.google.com/presentation/d/1SIDPjSei_lMAtBdv6JW0HKDHN7bPe_4ZiBKx7hjGFWY/edit?usp=sharing" target="blank">Slides</a></li>

                {/** Club Hackathons content */}
                <h1 id="hackathons" className="centeredContent">HACKATHONS</h1>
                <h3>We host hackathons, which are themed competitions where our
                    members try to code the best solution to a problem</h3>
                <p>October Hackathon link: <a href="https://cs-club-2021-october.devpost.com/" target="blank">Here</a></p>

                {/**Club Projects content */}
                <h1 id="projects" className="centeredContent">PROJECTS</h1>
                <h3>As a club, we’re currently working on: this website!
                    We encourage our members to try developing their own projects.
                    heck out these magnificent projects made by our outstanding people in our club.
                </h3>
                <ProjectDisplayer linkArray={["https://replit.com/@ritza/demo-embed?embed=true", "https://replit.com/@Chreliot/CardGames?embed=true"]}
                    projectNames={['Python Demo', 'Black Jack']} />

                {/** Club events content */}
                <h1 id="upcomingEvents" className="centeredContent">UPCOMING EVENTS TODO</h1>
                <h3>Cool Calendar HERE</h3>
                <Filler />

                {/** Club career days content */}
                <h1 id="careerDays">CAREER DAYS TODO</h1>
                <p>In CS Club, we host career days where guest
                    speakers come to our meetings and give presentations about
                    how their experience the CS field has been! Our past guest
                    speakers:</p>
                <PersonCard imgSrc="./memberImgs/Philip Reasa.png" name="Philip Reasa" shortDesc="Former Google Software Engineer" />
            </div >
        )
    }
}

class ProjectDisplayer extends React.Component {
    // provide a property 'linkArray' : arr[String]
    // optionally, provide a property 'projectNames' : arr[String]
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