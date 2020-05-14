import React from "react";
import ReactCountryFlag from "react-country-flag";
import { connect } from "react-redux";

import Header from "../components/utils/Header";
import Image from "../components/utils/Image";
import Footer from "../components/utils/Footer";
import getShortCode from "../helpers/shortcode";

import "../styles/game-styles/gamePage.less";

const Game = ({ formDetails }) => {
  document.title = "Game";

  return (
    <>
      <Header />
      <main className="gameParts">
        <section className="game">Game</section>
        <aside>
          <section>
            <Image
              imageSrc={formDetails.avatarUrl}
              alt="avatar"
              cName="gameAvatar"
            />
            <article>
              <p>{formDetails.fullName}</p>
              <div>
                <p>{formDetails.age} years</p>
                <p>
                  <ReactCountryFlag
                    countryCode={getShortCode(formDetails.country)}
                  />
                  {formDetails.country}
                </p>
                <p>{formDetails.gender}</p>
              </div>
            </article>
          </section>
          <section>Progress bars</section>
          <section>Minder Preview</section>
        </aside>
      </main>
      <Footer />
    </>
  );
};

const mapStateToProps = state => {
  return { formDetails: state.form.formDetails };
};

export default connect(mapStateToProps)(Game);
