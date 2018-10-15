import React from 'react';

const SVG = ({
  style = {},
  fill = '#000',
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
      <g transform="translate(2 2)">
        <path d="M54 24L30 0 6 24v36h48z" fill="rgba(255,255,255,1)" />
        <path d="M34 4L6 32v28h48V24z" fill="rgba(0,220,237,1)" />
        <path
          d="M54 24L30 0 6 24v36h48z"
          fill="transparent"
          strokeWidth="4"
          stroke="rgba(50,54,72,1)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25 60h10V38H25z"
          fill="#FFF"
          strokeWidth="4"
          stroke="rgba(50,54,72,1)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M35 24a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
          fill="#FFF"
          strokeWidth="4"
          stroke="rgba(50,54,72,1)"
          strokeMiterlimit="10"
        />
        <path
          d="M60 30L29.76 0 0 30"
          fill="transparent"
          strokeWidth="4"
          stroke="rgba(50, 54, 72, 1.00)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default SVG;
