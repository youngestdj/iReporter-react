import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { type, text, onClick } = props;
  return (
    <button className={type} onClick={onClick}>{text}</button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  onClick: f => f,
};


export default Button;
