// components/Button.js
"use client";

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ title, type = 'button', onClick, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white flex justify-center items-center px-8 py-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    >
      <span className="font-semibold text-lg whitespace-nowrap">{title}</span>
    </button>
  );
};

// PropTypes for validation
Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

// Default Props
Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  className: '',
};

export default Button;
