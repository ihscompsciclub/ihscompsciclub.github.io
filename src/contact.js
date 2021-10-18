import React from "react";
import { TopNavBar, Filler } from './util'

export class Contact extends React.Component {
  render() {
    document.getElementsByTagName('html')[0].style = "background:#212121"
    return (
      <div className="Content">
        <TopNavBar curPage="contact" />
        <div className="centeredContent paddedContent">
          <h1 id="airtableForm">AIRTABLE FORM TODO</h1>
          <Filler />
          <h1 id="socials">SOCIALS TODO</h1>
          <Filler />
        </div>
      </div >
    )
  }
}