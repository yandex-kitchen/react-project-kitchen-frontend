import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Banner = ({ appName, token }) => {
  if (token) {
    return null;
  }

  return (
    <div className="banner">
      <h1 className="banner__title">{appName}</h1>
      <p className="banner__subtitle">Место, где готовится новый опыт</p>
    </div>
  );
};

export default Banner;

Banner.propTypes = {
  appName: PropTypes.string.isRequired,
  token: PropTypes.string,
};
