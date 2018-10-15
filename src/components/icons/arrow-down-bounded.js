import React from 'react';

const SVG = ({
  style = {},
  color = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 64 64'
}) => {
  return (
    <svg
      width={width}
      style={style}
      height={width}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      className={`svg-icon ${className || ''}`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M32 2c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30C15.431 62 2 48.569 2 32 2 15.431 15.431 2 32 2z"
        fill="transparent"
        strokeWidth="4"
        stroke={color}
      />
      <path
        d="M42 37L32 47 22 37"
        fill="transparent"
        strokeWidth="4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 47V25"
        fill="transparent"
        strokeWidth="4"
        stroke={color}
        strokeLinecap="round"
      />
      <path d="M32 17a2 2 0 1 1 .001 3.999A2 2 0 0 1 32 17z" fill={color} />
    </svg>
  );
};

//Styles
export default SVG;
