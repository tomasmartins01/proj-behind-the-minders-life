import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ReactCountryFlag from "react-country-flag";

import Header from "../components/utils/Header";
import Footer from "../components/utils/Footer";
import Image from "../components/utils/Image";
import getShortCode from "../helpers/shortcode";
import { femaleVersion, maleVersion } from "../helpers/avatarImages";

import { saveInfoAction } from "../redux/formInfo/actions";

import "../styles/game-styles/gameForm.less";

const PlayGame = ({ saveInfo, history }) => {
  document.title = "Create Your Character";

  const [imageArr, setImageArr] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(18);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [avatarImage, setAvatarImage] = useState("");

  const isButtonDisabled =
    !firstName.trim() ||
    !lastName.trim() ||
    age < 18 ||
    age > 56 ||
    !gender ||
    !region;

  const handleSubmit = e => {
    e.preventDefault();
    const fullName = firstName + " " + lastName;
    saveInfo(fullName, age, gender, country, region, avatarImage);
    history.push("/game");
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
                  <label
                    onClick={() => {
                      setGender("M");
                      setImageArr(maleVersion);
                      setImageIndex(0);
                      setAvatarImage(maleVersion[0]);
                    }}
                  >
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="genderInput"
                    />
                    <span>♂️(male)</span>
                  </label>
                  <label
                    onClick={() => {
                      setGender("F");
                      setImageArr(femaleVersion);
                      setImageIndex(0);
                      setAvatarImage(femaleVersion[0]);
                    }}
                  >
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

            <fieldset>
              <p>Select Your Avatar</p>

              <div className="avatarSelector">
                {gender ? (
                  <>
                    <button
                      className="goPrev"
                      onClick={e => {
                        e.preventDefault();
                        setImageIndex(imageIndex - 1);
                        setAvatarImage(imageArr[imageIndex - 1]);
                      }}
                      disabled={imageIndex === 0}
                    />
                    <Image
                      imageSrc={imageArr[imageIndex]}
                      alt="avatar"
                      cName="avatarImage"
                    />
                    <button
                      className="goNext"
                      onClick={e => {
                        e.preventDefault();
                        setImageIndex(imageIndex + 1);
                        setAvatarImage(imageArr[imageIndex + 1]);
                      }}
                      disabled={imageIndex === imageArr.length - 1}
                    />
                  </>
                ) : null}
              </div>
            </fieldset>
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

const mapDispatchToProps = dispatch => ({
  saveInfo: (fullName, age, gender, country, region, avatarUrl) =>
    dispatch(saveInfoAction(fullName, age, gender, country, region, avatarUrl))
});

export default withRouter(connect(undefined, mapDispatchToProps)(PlayGame));
