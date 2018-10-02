import React from 'react';

const Icon = () => {
  icons = ['work', 'home', 'experience', 'contact'];

  if (this.props.icon == 'home') {
    this.props.svg = (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <path
          d="M 56 26 L 32 2 L 8 26 L 8 62 L 56 62 Z"
          fill="rgba(255,255,255,1)"
        />
        <path
          d="M 36 6 L 8 34 L 8 62 L 56 62 L 56 26 Z"
          fill="rgba(0,220,237,1)"
        />
        <path
          d="M 56 26 L 32 2 L 8 26 L 8 62 L 56 62 Z"
          fill="transparent"
          stroke-width="4"
          stroke="rgba(50,54,72,1)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M 27 62 L 37 62 L 37 40 L 27 40 Z"
          fill="#FFFFFF"
          stroke-width="4"
          stroke="rgba(50,54,72,1)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M 37 26 C 37 23.238 34.762 21 32 21 C 29.238 21 27 23.238 27 26 C 27 28.762 29.238 31 32 31 C 34.762 31 37 28.762 37 26 Z"
          fill="#FFFFFF"
          stroke-width="4"
          stroke="rgba(50,54,72,1)"
          stroke-miterlimit="10"
        />
        <path
          d="M 62 32 L 31.76 2 L 2 32"
          fill="transparent"
          stroke-width="4"
          stroke="rgba(50, 54, 72, 1.00)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (this.props.icon == 'work') {
    this.props.svg = (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <g transform="translate(0 2)">
          <path
            d="M 59 5 L 5 5"
            fill="transparent"
            stroke-width="4"
            stroke="rgba(50,54,72,1)"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M 64 5 C 64 7.761 61.762 10 59 10 C 56.238 10 54 7.761 54 5 C 54 2.239 56.239 0 59 0 C 61.761 0 64 2.239 64 5"
            fill="rgba(50,54,72,1)"
          />
          <path
            d="M 10 5 C 10 7.761 7.762 10 5 10 C 2.238 10 0 7.761 0 5 C 0 2.239 2.239 0 5 0 C 7.761 0 10 2.239 10 5"
            fill="rgba(50,54,72,1)"
          />
        </g>
        <g transform="translate(13.324 2)">
          <path
            d="M 13.676 5 L 0.123 41.784 C -0.141 42.505 0.027 43.309 0.559 43.861 C 2.64 46.021 7.676 52.066 7.676 60 L 29.676 60 C 29.676 52.066 34.711 46.021 36.792 43.861 C 37.325 43.309 37.493 42.505 37.228 41.784 L 23.676 5 Z"
            fill="rgba(255,255,255,1)"
          />
          <path
            d="M 3.676 47.75 C 5.676 50.75 7.676 55 7.676 60 L 29.676 60 C 29.676 52.066 34.711 46.021 36.792 43.861 C 37.325 43.309 37.493 42.505 37.228 41.784 L 23.676 5 L 18.676 11 L 17.676 9 Z"
            fill="rgba(0,220,237,1)"
          />
          <path
            d="M 13.676 5 L 0.123 41.784 C -0.141 42.505 0.027 43.309 0.559 43.861 C 2.64 46.021 7.676 52.066 7.676 60 L 29.676 60 C 29.676 52.066 34.711 46.021 36.792 43.861 C 37.325 43.309 37.493 42.505 37.228 41.784 L 23.676 5 Z"
            fill="transparent"
            stroke-width="4"
            stroke="rgba(50,54,72,1)"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M 18.676 10 L 18.676 38"
            fill="transparent"
            stroke-width="4"
            stroke="rgba(50,54,72,1)"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M 23.676 43 C 23.676 40.238 21.438 38 18.676 38 C 15.914 38 13.676 40.238 13.676 43 C 13.676 45.762 15.915 48 18.676 48 C 21.437 48 23.676 45.762 23.676 43 Z"
            fill="#FFFFFF"
            stroke-width="4"
            stroke="rgba(50,54,72,1)"
            stroke-miterlimit="10"
          />
          <path
            d="M 23.676 5 C 23.676 2.239 21.438 0 18.676 0 C 15.914 0 13.676 2.239 13.676 5 C 13.676 7.761 15.915 10 18.676 10 C 21.437 10 23.676 7.761 23.676 5 Z"
            fill="#FFFFFF"
            stroke-width="4"
            stroke="rgba(50,54,72,1)"
            stroke-miterlimit="10"
          />
        </g>
      </svg>
    );
  } else if (this.props.icon == 'experience') {
    this.props.svg = (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <path d="M 2 58 L 62 58 L 62 6 L 2 6 Z" fill="rgba(255,255,255,1)" />
        <path d="M 61 58 L 7 58 L 7 10.103 Z" fill="rgba(0,220,237,1)" />
        <path
          d="M 2 58 L 62 58 L 62 6 L 2 6 Z"
          fill="transparent"
          stroke-width="4"
          stroke="rgba(50,54,72,1)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M 2 6 L 62 58"
          fill="transparent"
          stroke-width="4"
          stroke="rgba(50,54,72,1)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M 36.19 28.662 L 11.001 7 L 62.001 7 Z"
          fill="rgba(0,220,237,1)"
        />
        <path
          d="M 34.62 29.646 L 62 6 L 2 6 L 29.38 29.646 C 30.884 30.949 33.116 30.949 34.62 29.646 Z"
          fill="transparent"
          stroke-width="4"
          stroke="rgba(50,54,72,1)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  } else if (this.props.icon == 'home') {
    this.props.svg = (
      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64">
        <path d="M 2 58 L 62 58 L 62 6 L 2 6 Z" fill="rgba(255,255,255,1)" />
        <path d="M 61 58 L 7 58 L 7 10.103 Z" fill="rgba(0,220,237,1)" />
        <path
          d="M 2 58 L 62 58 L 62 6 L 2 6 Z"
          fill="transparent"
          stroke-width="4"
          stroke="rgba(50,54,72,1)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M 2 6 L 62 58"
          fill="transparent"
          stroke-width="4"
          stroke="rgba(50,54,72,1)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M 36.19 28.662 L 11.001 7 L 62.001 7 Z"
          fill="rgba(0,220,237,1)"
        />
        <path
          d="M 34.62 29.646 L 62 6 L 2 6 L 29.38 29.646 C 30.884 30.949 33.116 30.949 34.62 29.646 Z"
          fill="transparent"
          stroke-width="4"
          stroke="rgba(50,54,72,1)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  }
  return;
};

export default Icon;
