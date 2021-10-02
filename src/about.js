import React from 'react'
import { TopNavBar, PersonCard, Filler } from './util'

export class About extends React.Component {
  render() {
    return (
      <div className="Content">
        <TopNavBar />
        <div className="centeredContent paddedContent">
          <h1 id="officers">Our Officers</h1>
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
          <h1 id="members">Our Members</h1>
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
            <PersonCard imgSrc="./memberImgs/yorinamu.png" name="Yori Namu" shortDesc="lol" />
          </div>
          <h1 id="gallery">Gallery</h1>
          <Filler />
        </div>
      </div>
    )
  }
}