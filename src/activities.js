import React from 'react'
import { TopNavBar, Filler } from './util'

export class Activities extends React.Component {
    render() {
        return (
            <div className="paddedContent Content">
                <TopNavBar curPage="activities" />
                <h1 className="centeredContent paddedContent">TODO</h1>

                <h1 id="clubWorkshops">CLUB WORKSHOPS TODO</h1>
                <Filler />
                <h1 id="hackathons">HACKATHONS TODO</h1>
                <Filler />
                <h1 id="projects">PROJECTS TODO</h1>
                <h2>As a club, we’re currently working on: this website!
                    We encourage our members to try developing their own projects.
                    heck out these magnificent projects made by our outstanding people in our club.
                </h2>

                {/*TODO have real projects here*/}
                <iframe title="project1" frameborder="0" width="100%" height="500px" src="https://replit.com/@ritza/demo-embed?embed=true"></iframe>
                <iframe title="project2" frameborder="0" width="100%" height="500px" src="https://replit.com/@ritza/demo-embed?embed=true"></iframe>
                <iframe title="project3" frameborder="0" width="100%" height="500px" src="https://replit.com/@ritza/demo-embed?embed=true"></iframe>
                <iframe title="project4" frameborder="0" width="100%" height="500px" src="https://replit.com/@ritza/demo-embed?embed=true"></iframe>
                <h1 id="upcomingEvents">UPCOMING EVENTS TODO</h1>
                <h2>Cool Calendar HERE</h2>
                <Filler />
                <h1 id="careerDays">CAREER DAYS TODO</h1>
                <Filler />
            </div>
        )
    }
}