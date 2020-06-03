import React from "react";
import ReactCountryFlag from "react-country-flag";

import Image from "../utils/Image";
import getShortCode from "../../helpers/shortcode";

const Profile = ({ formDetails, specialization, happiness, bankBalance }) => {
  const emojiArray = [
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/facebook/230/crying-face_1f622.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/pensive-face_1f614.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/neutral-face_1f610.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/slightly-smiling-face_1f642.png",
    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/facebook/230/grinning-face_1f600.png"
  ];

  const happinessPart = happinessLevel => {
    if (happinessLevel <= 20) {
      return { emoji: emojiArray[0], text: "Super Sad" };
    } else if (happinessLevel <= 40) {
      return { emoji: emojiArray[1], text: "Sad" };
    } else if (happinessLevel <= 60) {
      return { emoji: emojiArray[2], text: "Neutral" };
    } else if (happinessLevel <= 80) {
      return { emoji: emojiArray[3], text: "Happy" };
    } else {
      return { emoji: emojiArray[4], text: "The Happiest I Could Ever Be" };
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
        {specialization && (
          <p>
            Vocation:
            {specialization.charAt(0).toUpperCase() + specialization.slice(1)}
          </p>
        )}
        <p>Bank Balance: {bankBalance} euros</p>

        <Image
          imageSrc={happinessPart(happiness).emoji}
          cName="happiness"
          alt={happinessPart(happiness).text}
        />
        <p>Mood: {happinessPart(happiness).text}</p>
      </article>
    </div>
  );
};

export default Profile;
