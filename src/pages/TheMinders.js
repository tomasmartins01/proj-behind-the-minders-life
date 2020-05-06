import React from "react";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";

import RandomPic from "../images/minders/pic.png";
import Play from "../images/play.png";

import "../styles/minders-styles/main.less";

const TheMinders = () => {
  document.title = "The Minders";

  return (
    <div className="TheMinders">
      <Header />
      <h1 className="title">The Minders</h1>
      <div className="container">
        <div className="container1">
          <button className="character">
            <p className="textName">Sara Cardoso</p>
            <img
              src={RandomPic}
              alt="profile picture"
              className="profilePicture"
            />
            <img src={Play} alt="play" className="play" />
            <p className="textJob">Operations Team</p>
          </button>
          <button className="character">
            <div className="insideButton">
              <p className="textName">Edgar Costa</p>
              <img
                src={RandomPic}
                alt="profile picture"
                className="profilePicture"
              />
              <img src={Play} alt="play" className="play" />
              <p className="textJob">Frontend Developer</p>
            </div>
          </button>
          <button className="character">
            <div className="insideButton">
              <p className="textName">Diogo Ferreira</p>
              <img
                src={RandomPic}
                alt="profile picture"
                className="profilePicture"
              />
              <img src={Play} alt="play" className="play" />
              <p className="textJob">Frontend Developer</p>
            </div>
          </button>
        </div>
        <div className="container1">
          <button className="character">
            <p className="textName">Vitor Mineiro</p>
            <img
              src={RandomPic}
              alt="profile picture"
              className="profilePicture"
            />
            <img src={Play} alt="play" className="play" />
            <p className="textJob">Quality Assurance</p>
          </button>
          <button className="character">
            <div className="insideButton">
              <p className="textName">Marco Escaleira</p>
              <img
                src={RandomPic}
                alt="profile picture"
                className="profilePicture"
              />
              <img src={Play} alt="play" className="play" />
              <p className="textJob">Frontend Developer</p>
            </div>
          </button>
          <button className="character">
            <div className="insideButton">
              <p className="textName">Mehul Irá</p>
              <img
                src={RandomPic}
                alt="profile picture"
                className="profilePicture"
              />
              <img src={Play} alt="play" className="play" />
              <p className="textJob">Backend Developer</p>
            </div>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TheMinders;
