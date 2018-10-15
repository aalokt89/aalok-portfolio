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
        d="M32 2a30 30 0 1 1 0 60 30 30 0 0 1 0-60z"
        fill="transparent"
        strokeWidth="4"
        stroke={color}
      />
      <path
        d="M37 22l10 10-10 10"
        fill="transparent"
        strokeWidth="4"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 32H25"
        fill="transparent"
        strokeWidth="4"
        stroke={color}
        strokeLinecap="round"
      />
      <path d="M17 32a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" fill={color} />
    </svg>
  );
};

//Styles
export default SVG;
