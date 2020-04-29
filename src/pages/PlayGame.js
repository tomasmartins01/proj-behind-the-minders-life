import React from "react";

import HeaderWithImage from "../components/utils/HeaderWithImage";
import Footer from "../components/utils/Footer";

import "../styles/reset.less";
import "../styles/gameForm.less";

const PlayGame = () => {
  document.title = "Create Your Character";
  return (
    <>
      <HeaderWithImage />
      <main>
        <section>
          <div className="form">a</div>
          <div className="avatar">a</div>
        </section>
        <button>Start Life</button>
      </main>
      <Footer />
    </>
  );
};

export default PlayGame;
