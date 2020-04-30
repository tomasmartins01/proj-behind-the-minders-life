import React, { useState } from "react";

import "../../styles/game-styles/playerForm.less";

const PlayerForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(18);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  return (
    <form id="characterForm">
      <fieldset id="firstNameSection">
        <label>
          NAME:
          <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </fieldset>

      <fieldset id="lastNameSection">
        <label>
          LAST NAME:
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
      </fieldset>

      <fieldset id="ageSection">
        <label>
          AGE:
          <input
            type="number"
            placeholder="Age"
            min="18"
            max="56"
            value={age}
            onChange={e => setAge(e.target.value)}
          />
        </label>
      </fieldset>

      <fieldset id="genderSection">
        <label id="genderText">GENDER: </label>

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
        <label>
          COUNTRY:
          <select
            id="country"
            value={country}
            onChange={e => setCountry(e.target.value)}
          >
            <option value="lol">lol </option>
          </select>
        </label>
      </fieldset>

      <fieldset id="citySection">
        <label>
          CITY:
          <select
            id="city"
            value={city}
            onChange={e => setCity(e.target.value)}
          >
            <option value="lol1">lol1 </option>
          </select>
        </label>
      </fieldset>
    </form>
  );
};

export default PlayerForm;
