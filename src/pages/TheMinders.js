import React from "react";

import HeaderWithImage from "../components/utils/HeaderWithImage";
import Footer from "../components/utils/Footer";

import RandomPic from "../images/minders/pic.png";
import Play from "../images/play.png";

import "../styles/minders-styles/main.less";

const TheMinders = () => {
  return (
    <div className="TheMinders">
      <HeaderWithImage />
      <h1 className="title">The Minders</h1>
      <div className="container">
        <div className="container1">
        <button className="character">
          <p className="textName">Sara Cardoso</p>
            <img src={RandomPic} alt="profile picture" className="profilePicture"/>
            <img src={Play} alt="play" className="play"/>
            <p className="textJob">Operations Team</p>
        </button>
        <button className="character">
          <div className="insideButton">
          <p className="textName">Sara Cardoso</p>
          <img src={RandomPic} alt="profile picture" className="profilePicture"/>
          <img src={Play} alt="play" className="play"/>
            <p className="textJob">Operations Team</p>
          </div>
        </button>
        <button className="character">
          <div className="insideButton">
            <p className="textName">Sara Cardoso</p>
            <img src={RandomPic} alt="profile picture" className="profilePicture"/>
            <img src={Play} alt="play" className="play"/>
            <p className="textJob">Operations Team</p>
          </div>
        </button>
        </div>  
        <div className="container1">
        <button className="character">
          <p className="textName">Sara Cardoso</p>
            <img src={RandomPic} alt="profile picture" className="profilePicture"/>
            <img src={Play} alt="play" className="play"/>
            <p className="textJob">Operations Team</p>
        </button>
        <button className="character">
          <div className="insideButton">
          <p className="textName">Sara Cardoso</p>
          <img src={RandomPic} alt="profile picture" className="profilePicture"/>
          <img src={Play} alt="play" className="play"/>
            <p className="textJob">Operations Team</p>
          </div>
        </button>
        <button className="character">
          <div className="insideButton">
            <p className="textName">Sara Cardoso</p>
            <img src={RandomPic} alt="profile picture" className="profilePicture"/>
            <img src={Play} alt="play" className="play"/>
            <p className="textJob">Operations Team</p>
          </div>
        </button>
        </div>  
      </div>
      <Footer />
    </div>
  );
};

export default TheMinders;
