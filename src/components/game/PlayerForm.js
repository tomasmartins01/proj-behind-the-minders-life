import React, { useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ReactCountryFlag from "react-country-flag";

import getShortCode from "../../country/shortcode";

import "../../styles/game-styles/playerForm.less";

const PlayerForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(18);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  return (
    <form id="characterForm">
      <fieldset id="firstNameSection">
        <label>NAME:</label>
        <input
          type="text"
          placeholder="First Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </fieldset>

      <fieldset id="lastNameSection">
        <label>LAST NAME:</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          required
        />
      </fieldset>

      <fieldset id="ageSection">
        <label>AGE:</label>
        <input
          type="number"
          placeholder="Age"
          min="18"
          max="56"
          value={age}
          onChange={e => setAge(e.target.value)}
          required
        />
      </fieldset>

      <fieldset id="genderSection">
        <label id="genderText">GENDER:</label>

        <label>
          <input type="radio" id="male" name="gender" value="male" />
          MALE
        </label>
        <label>
          <input type="radio" id="female" name="gender" value="female" />
          FEMALE
        </label>
      </fieldset>

      <fieldset id="countrySection">
        <label>COUNTRY:</label>
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
      </fieldset>

      <fieldset id="regionSection">
        <label>REGION:</label>
        <RegionDropdown
          country={country}
          value={region}
          onChange={val => setRegion(val)}
        />
      </fieldset>
    </form>
  );
};

export default PlayerForm;
