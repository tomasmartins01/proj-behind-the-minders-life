import React from "react";

import Image from "./Image";
import logoWhite from "../../images/logoWhite.png";

import "../../styles/utils/header.less";

const HeaderWithImage = () => {
  return (
    <header>
      <Image imageSrc={logoWhite} alt="white logo" cName="header-logo" />
    </header>
  );
};

export default HeaderWithImage;
