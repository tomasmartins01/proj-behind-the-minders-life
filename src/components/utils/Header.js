import React from "react";
import { Link, withRouter } from "react-router-dom";

import Image from "./Image";
import logoWhite from "../../images/logoWhite.png";

import "../../styles/utils/header.less";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <Image imageSrc={logoWhite} alt="white logo" cName="header-logo" />
      </Link>
    </header>
  );
};

export default Header;
