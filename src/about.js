import React from 'react'
import { TopNavBar, Filler } from './util'

export class About extends React.Component {
    render() {
        return (
            <div className="Content">
                <TopNavBar />
                <h1 className="centeredContent paddedContent" id="officers">Officers</h1>
                <Filler />
                <h1 className="centeredContent paddedContent" id="members">Members</h1>
                <Filler />
                <h1 className="centeredContent paddedContent" id="gallery">Gallery</h1>
                <Filler />
            </div>
        )
    }
}