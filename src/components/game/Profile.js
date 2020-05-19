import React from "react";
import ReactCountryFlag from "react-country-flag";

import Image from "../utils/Image";
import getShortCode from "../../helpers/shortcode";

const Profile = ({ formDetails }) => {
  return (
    <div className="gameProfile">
      <Image imageSrc={formDetails.avatarUrl} alt="avatar" cName="gameAvatar" />
      <article>
        <p>Name: {formDetails.fullName}</p>
        <div>
          <p>Age: {formDetails.age} years</p>
          <p>
            Country:
            <ReactCountryFlag countryCode={getShortCode(formDetails.country)} />
            {formDetails.country}
          </p>
          <p>Gender: {formDetails.gender === "F" ? "Female" : "Male"}</p>
        </div>
      </article>
    </div>
  );
};

export default Profile;
