import React from "react";
import ReactCountryFlag from "react-country-flag";

import Image from "../utils/Image";
import getShortCode from "../../helpers/shortcode";

const Profile = ({ formDetails, especialization, happiness, bankBalance }) => {
  const emojiArray = [
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/facebook/230/crying-face_1f622.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/pensive-face_1f614.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/neutral-face_1f610.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/slightly-smiling-face_1f642.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/grinning-face_1f600.png"
  ];

  const selectedEmoji = happinessLevel => {
    if (happinessLevel <= 20) {
      return emojiArray[0];
    } else if (happinessLevel <= 40) {
      return emojiArray[1];
    } else if (happinessLevel <= 60) {
      return emojiArray[2];
    } else if (happinessLevel <= 80) {
      return emojiArray[3];
    } else {
      return emojiArray[4];
    }
  };

  const selectedHappiness = happinessLevel => {
    if (happinessLevel <= 20) {
      return "Super Sad";
    } else if (happinessLevel <= 40) {
      return "Sad";
    } else if (happinessLevel <= 60) {
      return "Neutral";
    } else if (happinessLevel <= 80) {
      return "Happy";
    } else {
      return "The Happiest I Could Ever Be";
    }
  };

  return (
    <div className="gameProfile">
      <Image imageSrc={formDetails.avatarUrl} alt="avatar" cName="gameAvatar" />
      <article>
        <p>Name: {formDetails.fullName}</p>
        <p>Age: {formDetails.age} years</p>
        <p>
          Country:
          <ReactCountryFlag countryCode={getShortCode(formDetails.country)} />
          {formDetails.country}
        </p>
        <p>Gender: {formDetails.gender === "F" ? "Female" : "Male"}</p>
        {especialization && (
          <p>
            Vocation:
            {especialization.charAt(0).toUpperCase() + especialization.slice(1)}
          </p>
        )}
        <p>Bank Balance: {bankBalance} euros</p>

        <Image
          imageSrc={selectedEmoji(happiness)}
          cName="happiness"
          alt={selectedHappiness(happiness)}
        />
        <p>Mood: {selectedHappiness(happiness)}</p>
      </article>
    </div>
  );
};

export default Profile;
