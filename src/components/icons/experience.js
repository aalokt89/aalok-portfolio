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
        d="M45.305 62H11.696C6.341 62 2 57.659 2 52.305v-.144c0-.089.073-.161.161-.161h52.678c.089 0 .161.072.161.161v.144C55 57.659 50.659 62 45.305 62"
        fill="rgba(255,255,255,1)"
      />
      <path
        d="M45.466 62H22.001c-7 0-14.535-4.269-14.535-9.534V52h47.535v.466c0 5.265-4.269 9.534-9.535 9.534"
        fill="rgba(0,220,237,1)"
      />
      <path
        d="M45.305 62H11.696C6.341 62 2 57.659 2 52.305v-.144c0-.089.073-.161.161-.161h52.678c.089 0 .161.072.161.161v.144C55 57.659 50.659 62 45.305 62z"
        fill="transparent"
        strokeWidth="4"
        stroke="rgba(50,54,72,1)"
        strokeMiterlimit="10"
      />
      <path
        d="M49 52h13"
        fill="transparent"
        strokeWidth="4"
        stroke="rgba(50,54,72,1)"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
      <g>
        <path
          d="M32 2v38h22z"
          fill="#FFF"
          strokeWidth="4"
          stroke="#323648"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M37 40h17L37.028 10z" fill="rgba(0,220,237,1)" />
        <path
          d="M32 2v38h22z"
          fill="transparent"
          strokeWidth="4"
          stroke="#323648"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g strokeWidth="4">
        <path
          d="M32 2v44H2z"
          fill="rgba(255,255,255,1)"
          stroke="#323648"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M11 46l21-32M20 46l12-19"
          fill="transparent"
          stroke="rgba(50,54,72,1)"
          strokeMiterlimit="10"
        />
      </g>
      <path
        d="M32 52V2"
        fill="transparent"
        strokeWidth="4"
        stroke="rgba(50,54,72,1)"
        strokeLinecap="round"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default SVG;
