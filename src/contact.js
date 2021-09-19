import React from "react";
import { TopNavBar, PersonCard } from './util'

export class Contact extends React.Component {
    render() {
        return (
            <div className="Content">
                <TopNavBar />
                <div className="centeredContent">
                    <h1>TODO</h1>
                    <PersonCard imgSrc="./memberImgs/headshot02 (1).jpg" name="Guy" shortDesc="A regular person just like you who likes to code" />
                </div>
            </div>
        )
    }
}