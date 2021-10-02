import React from 'react'
import { TopNavBar, Filler } from './util'

export class Activities extends React.Component {
    render() {
        return (
            <div className="Content">
                <TopNavBar />
                <h1 className="centeredContent paddedContent">TODO</h1>

                <h1 id="clubWorkshops">CLUB WORKSHOPS TODO</h1>
                <Filler />
                <h1 id="hackathons">HACKATHONS TODO</h1>
                <Filler />
                <h1 id="projects">PROJECTS TODO</h1>
                <Filler />
                <h1 id="upcomingEvents">UPCOMING EVENTS TODO</h1>
                <Filler />
                <h1 id="careerDays">CAREER DAYS TODO</h1>
                <Filler />
            </div>
        )
    }
}