import React from "react";

const Image = ({ imageSrc, alt, cName }) => {
  return <img src={imageSrc} alt={alt} className={cName} />;
};

export default Image;