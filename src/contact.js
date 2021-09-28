import React from "react";
import { TopNavBar, PersonCard } from './util'

export class Contact extends React.Component {
  render() {
    document.getElementsByTagName('html')[0].style = "background:#212121"
    return (
      <div className="Content">
        <TopNavBar />
        <div className="centeredContent">
          <h1>Our Officers</h1>
          <div className="personBlock">
            {/*Put real PersonCard's here instead of just using my picture*/}
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Guy" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Girl" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Guy" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Girl" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Guy" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Girl" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Guy" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Girl" shortDesc="A regular person who likes to code/design" />
          </div>
          <h1>Our Members</h1>
          <div className="personBlock">
            {/* Put real PersonCard's here insteaed of just using a bunch of fillers */}
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Guy" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Girl" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Guy" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Girl" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Guy" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Girl" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Guy" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Girl" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Guy" shortDesc="A regular person who likes to code/design" />
            <PersonCard imgSrc="./memberImgs/cpic.png" name="Girl" shortDesc="A regular person who likes to code/design" />
          </div>
        </div>
      </div >
    )
  }
}