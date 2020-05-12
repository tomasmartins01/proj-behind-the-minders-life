import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ReactCountryFlag from "react-country-flag";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import getShortCode from "../helpers/shortcode";

import "../styles/game-styles/gameForm.less";

const PlayGame = () => {
  document.title = "Create Your Character";

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const isButtonDisabled =
    !firstName || !lastName || age < 18 || age > 56 || !gender || !region;

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="GameForm">
      <Header />
      <main>
        <form>
          <section>
            <fieldset>
              <label className="characterInfo">
                <span>First Name</span>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </label>

              <label className="characterInfo">
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </label>

              <label className="characterInfo" id="ageSection">
                <span>Age</span>
                <input
                  type="number"
                  placeholder="Age"
                  min="18"
                  max="56"
                  value={age}
                  onChange={e => setAge(e.target.value)}
                  className="ageInput"
                />
              </label>

              <label className="characterInfo" id="genderSection">
                <span>Gender</span>
                <div>
                  <label onClick={() => setGender("M")}>
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="genderInput"
                    />
                    <span>♂️(male)</span>
                  </label>
                  <label onClick={() => setGender("F")}>
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="genderInput"
                    />
                    <span>♀️(female)</span>
                  </label>
                </div>
              </label>

              <label className="characterInfo">
                <span>Country</span>
                <div>
                  <ReactCountryFlag countryCode={getShortCode(country)} />
                  <CountryDropdown
                    value={country}
                    priorityOptions={[
                      getShortCode("Brazil"),
                      getShortCode("India"),
                      getShortCode("Portugal"),
                      getShortCode("United Kingdom"),
                      getShortCode("United States")
                    ]}
                    onChange={val => setCountry(val)}
                  />
                </div>
              </label>

              <label className="characterInfo">
                <span>Region</span>
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={val => setRegion(val)}
                />
              </label>
            </fieldset>

            <fieldset>Side B</fieldset>
          </section>

          <button
            className="startLife"
            disabled={isButtonDisabled}
            onClick={e => handleSubmit(e)}
          >
            Start Life
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default PlayGame;
