import React from 'react'
import { TopNavBar } from './util'

export class Activities extends React.Component {
    render() {
        return (
            <div className="Content">
                <TopNavBar />
                <h1 className="centeredContent paddedContent">TODO</h1>
            </div>
        )
    }
}