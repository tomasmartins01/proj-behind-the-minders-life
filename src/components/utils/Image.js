import React from "react";
import LazyLoad from "react-lazyload";

const Image = ({ imageSrc, alt, cName }) => {
  return (
    <LazyLoad once>
      <img src={imageSrc} alt={alt} className={cName} loading="lazy" />
    </LazyLoad>
  );
};

export default Image;
