import React from 'react';

const SVG = ({
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 100 100'
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
        d="M50.19-.3c27.614 0 50 22.386 50 50s-22.386 50-50 50-50-22.386-50-50 22.386-50 50-50z"
        fill="rgba(0, 220, 237, 1.00)"
      />
      <g fill="rgba(50,54,72,1)">
        <path d="M70.867 64.052a2.528 2.528 0 0 1 .444 3.548 10.427 10.427 0 0 1-1.585 1.714 10.309 10.309 0 0 1-6.78 2.513 10.344 10.344 0 0 1-8.949-5.187c-2.177 4.013-6.462 5.645-11.538 5.636-5.837-.011-12.286-4.298-12.269-12.998.017-8.7 7.525-13.185 15.849-13.169 2.668.005 4.946.122 6.606.244l.013-6.944a5.85 5.85 0 0 0-10.307-3.797c.009.009 1.162 1.14 1.158 3.48-.002 1.135-.65 2.478-1.648 3.426-.998.949-1.723 1.217-2.761 1.215-2.4-.005-4.796-1.809-4.79-5.009.003-1.649 1.032-3.564 1.388-4.178.074-.129.12-.202.12-.202l.002.001c2.46-3.994 6.875-6.654 11.91-6.645 7.704.015 13.938 6.272 13.923 13.976l-.037 19.799a3.6 3.6 0 0 0 5.021 3.315c.438-.188.314-.149.461-.239.147-.09.46-.322.658-.519l.016.016a2.525 2.525 0 0 1 3.095.004zM45.92 65.795c2.822.005 5.096-1.378 6.724-3.591a10.843 10.843 0 0 1-.028-.746l.018-9.655a87.992 87.992 0 0 0-5.081-.142c-4.142-.008-8.541 2.395-8.551 7.595-.008 4.05 3.418 6.532 6.918 6.539z" />
        <path d="M66.126 52.378a2.7 2.7 0 1 0 .01-5.4 2.7 2.7 0 0 0-.01 5.4" />
      </g>
    </svg>
  );
};

export default SVG;
