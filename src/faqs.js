import React from 'react'
import { TopNavBar } from './util'

export class Faqs extends React.Component {
    render() {
        return (
            <div className="Content">
                <TopNavBar />
                <h1 className="centeredContent">FAQs</h1>
                <div className="paddedContent larger">
                    <li className="numberedList">
                        How much experience will we need? Are you required to already know any type of programming?
                        <li className="letteredList">No experience required, we will teach you the basics of
                            programming and many different skills and languages!</li>
                    </li>
                    <li className="numberedList">
                        What languages do you use?
                        <div className="letteredList">
                            <li>Python</li>
                            <li>Html</li>
                            <li>LaTeX</li>
                            <li>Css</li>
                            <li>Java</li>
                            <li>Js</li>
                            <li>Rust</li>
                            <li>Lua</li>
                            <li>Scratch</li>
                            <li>Julia</li>
                            <li>Vim Script</li>
                        </div>
                    </li>
                </div>
            </div>
        )
    }
}