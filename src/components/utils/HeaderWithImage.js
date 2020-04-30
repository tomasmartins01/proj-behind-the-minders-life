import React from "react";
import { Link, withRouter } from "react-router-dom";

import Image from "./Image";
import logoWhite from "../../images/logoWhite.png";

import "../../styles/utils/header.less";

const HeaderWithImage = ({children}) => {
  return (
    <header>
      <Link to="/">
      <Image imageSrc={logoWhite} alt="white logo" cName="header-logo" />
      </Link>
      {children}
    </header>
  );
};

export default HeaderWithImage;
