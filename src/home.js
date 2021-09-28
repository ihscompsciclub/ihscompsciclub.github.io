import React from 'react'
import { TopNavBar } from './util'


export class Home extends React.Component {
    render() {
        return (
            <div className="Home Content">
                <TopNavBar />
                <h1 id="hp_header" className="centeredContent">Welcome to IHS Computer Science Club</h1>
                <video width="100%" autoPlay={true} loop={true}>
                    <source src="Videos/A.mp4" type="video/mp4" />
                </video>
            </div >
        )
    }
}