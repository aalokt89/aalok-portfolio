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
      <path
        d="M59 7H5"
        fill="transparent"
        strokeWidth="4"
        stroke="rgba(50,54,72,1)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g transform="translate(0 2)">
        <path
          d="M59 5H5"
          fill="transparent"
          strokeWidth="4"
          stroke="rgba(50,54,72,1)"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M64 5a5 5 0 1 1-10 0 5 5 0 0 1 10 0M10 5A5 5 0 1 1 0 5a5 5 0 0 1 10 0"
          fill="rgba(50,54,72,1)"
        />
        <g transform="translate(13.324)">
          <path
            d="M13.676 5L.123 41.784a1.998 1.998 0 0 0 .436 2.077C2.64 46.021 7.676 52.066 7.676 60h22c0-7.934 5.035-13.979 7.116-16.139a1.994 1.994 0 0 0 .436-2.077L23.676 5z"
            fill="rgba(255,255,255,1)"
          />
          <path
            d="M3.676 47.75c2 3 4 7.25 4 12.25h22c0-7.934 5.035-13.979 7.116-16.139a1.994 1.994 0 0 0 .436-2.077L23.676 5l-5 6-1-2z"
            fill="rgba(0,220,237,1)"
          />
          <path
            d="M13.676 5L.123 41.784a1.998 1.998 0 0 0 .436 2.077C2.64 46.021 7.676 52.066 7.676 60h22c0-7.934 5.035-13.979 7.116-16.139a1.994 1.994 0 0 0 .436-2.077L23.676 5zM18.676 10v28"
            fill="transparent"
            strokeWidth="4"
            stroke="rgba(50,54,72,1)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.676 43a5 5 0 0 0-5-5 5 5 0 1 0 0 10 5 5 0 0 0 5-5zM23.676 5a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
            fill="#FFF"
            strokeWidth="4"
            stroke="rgba(50,54,72,1)"
            strokeMiterlimit="10"
          />
        </g>
      </g>
    </svg>
  );
};

export default SVG;
