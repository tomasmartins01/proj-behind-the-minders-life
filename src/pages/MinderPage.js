import React from "react";
import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";

import mindersList from "../helpers/mindersList";

const MinderPage = () => {
  const { name } = useParams();

  const minderInfo = mindersList.find(minder => minder.urlName === name);
  document.title = minderInfo.name;
  return (
    <>
      <Header />
      <main>
        <h1>{minderInfo.name}</h1>
        <ReactPlayer url={minderInfo.youtubeVideo} />
        <h2>{minderInfo.job}</h2>
      </main>
      <Footer />
    </>
  );
};

export default MinderPage;
