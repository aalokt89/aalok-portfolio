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
      <path d="M2 58h60V6H2z" fill="rgba(255,255,255,1)" />
      <path d="M61 58H7V10.103z" fill="rgba(0,220,237,1)" />
      <path
        d="M2 58h60V6H2zM2 6l60 52"
        fill="transparent"
        strokeWidth="4"
        stroke="rgba(50,54,72,1)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M36.19 28.662L11.001 7h51z" fill="rgba(0,220,237,1)" />
      <path
        d="M34.62 29.646L62 6H2l27.38 23.646a4 4 0 0 0 5.24 0z"
        fill="transparent"
        strokeWidth="4"
        stroke="rgba(50,54,72,1)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SVG;
