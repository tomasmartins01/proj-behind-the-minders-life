import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

import Header from "../components/utils/Header";
import Image from "../components/utils/Image";
import Footer from "../components/utils/Footer";
import mindersList from "../helpers/mindersList";
import getMinderProfilePic from "../helpers/minderAvatar";

import "../styles/minders-styles/characters.less";

const MinderPage = () => {
  const { name } = useParams();
  let otherMinders = [{}, {}, {}];

  const minderInfo = mindersList.find(minder => minder.urlName === name);
  document.title = minderInfo.name;

  const minders = mindersList.filter(minder => minder.urlName !== name);

  const getMinders = () => {
    for (let i = 0; i < 3; i++) {
      let index = parseInt(Math.random() * minders.length);
      otherMinders[i] = minders[index];

      if (i === 1) {
        while (otherMinders[0].name === otherMinders[1].name) {
          let index = parseInt(Math.random() * minders.length);
          otherMinders[i] = minders[index];
        }
      } else if (i === 2) {
        while (
          otherMinders[0].name === otherMinders[2].name ||
          otherMinders[1].name === otherMinders[2].name
        ) {
          let index = parseInt(Math.random() * minders.length);
          otherMinders[i] = minders[index];
        }
      }
    }
  };

  getMinders();

  return (
    <>
      <Header />
      <main className="characterPage">
        <section className="Characters">
          <h1 id="characterTitle">{minderInfo.name}</h1>
          <ReactPlayer
            controls
            url={minderInfo.youtubeVideo}
            width="100%"
            height="100%"
            className="minderVideo"
          />
        </section>

        <section className="displayMinders">
          <h2>Other Minders</h2>
          <div className="mindersSuggestions">
            {otherMinders.map((minder, index) => (
              <Link to={`/${minder.urlName}`}>
                <article key={index} className="minderPhoto">
                  <Image
                    imageSrc={getMinderProfilePic(minder.name)}
                    alt={minder.name}
                    cName="minderSectionPic"
                  />
                  <h3>{minder.name}</h3>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MinderPage;
