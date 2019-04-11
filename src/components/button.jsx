import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { type, text } = props;
  return (
    <button className={type}>{text}</button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Button;
