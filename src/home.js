import React from 'react'
import { TopNavBar, CoolScrollEffect, Filler } from './util'


export class Home extends React.Component {
    render() {
        return (
            <div className="Home Content">
                <TopNavBar />

                <CoolScrollEffect>
                    <h1 id="hp_header" className="centeredContent paddedContent">Welcome to IHS Computer Science Club</h1>
                    <video playsInline={true} id="hp_vid" width="100%" autoPlay={true} loop={true} muted={true} >
                        <source src="Videos/A.mp4" type="video/mp4" />
                    </video>
                </CoolScrollEffect>

                <CoolScrollEffect>
                    <h1 className="centeredContent paddedContent">K-33 | 3:30 - 4:30 PM PST | Wednesdays</h1>
                    <table>
                        <tbody>
                            <tr>

                                <th><img alt="club" className="centeredContent paddedContent" id="clubpic"></img></th>
                                <th>
                                    <h1>Yeah, us</h1>
                                    <p>
                                        Club Description<br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </CoolScrollEffect>
                <Filler />
            </div >
        )
    }
}