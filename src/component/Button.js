import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ clickHandler, name, orange, wide }) => {
  const handleClick = () => {
    clickHandler(name);
  };

  const className = [
    "component-button",
    orange ? "orange" : "",
    wide ? "wide" : "",
  ];

  return (
    <div className={className.join(" ").trim()}>
      <button onClick={handleClick}>{name}</button>
    </div>
  );
};
Button.propTypes = {
  name: PropTypes.string,
  orange: PropTypes.bool,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func,
};
export default Button;
