import React from 'react';
import styled from 'styled-components';

const Icon = props => {
  let svg = null;
  switch (props.icon) {
    case 'home':
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width}
          height={props.height}
        >
          <g transform="translate(0 2)">
            <path
              d="M 59 5 L 5 5"
              fill="transparent"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 18.676 10 L 18.676 38"
              fill="transparent"
              strokeWidth="4"
              stroke={'rgba(50,54,72,1)'}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 23.676 43 C 23.676 40.238 21.438 38 18.676 38 C 15.914 38 13.676 40.238 13.676 43 C 13.676 45.762 15.915 48 18.676 48 C 21.437 48 23.676 45.762 23.676 43 Z"
              fill="#FFFFFF"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeMiterlimit="10"
            />
            <path
              d="M 23.676 5 C 23.676 2.239 21.438 0 18.676 0 C 15.914 0 13.676 2.239 13.676 5 C 13.676 7.761 15.915 10 18.676 10 C 21.437 10 23.676 7.761 23.676 5 Z"
              fill="#FFFFFF"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeMiterlimit="10"
            />
          </g>
        </svg>
      );
      break;

    case 'work':
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width}
          height={props.height}
        >
          <g transform="translate(0 2)">
            <path
              d="M 59 5 L 5 5"
              fill="transparent"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeLinecap="round"
              strokeLinejoin="round"
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
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 18.676 10 L 18.676 38"
              fill="transparent"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 23.676 43 C 23.676 40.238 21.438 38 18.676 38 C 15.914 38 13.676 40.238 13.676 43 C 13.676 45.762 15.915 48 18.676 48 C 21.437 48 23.676 45.762 23.676 43 Z"
              fill="#FFFFFF"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeMiterlimit="10"
            />
            <path
              d="M 23.676 5 C 23.676 2.239 21.438 0 18.676 0 C 15.914 0 13.676 2.239 13.676 5 C 13.676 7.761 15.915 10 18.676 10 C 21.437 10 23.676 7.761 23.676 5 Z"
              fill="#FFFFFF"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeMiterlimit="10"
            />
          </g>
        </svg>
      );
      break;

    case 'experience':
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width}
          height={props.height}
        >
          <g transform="translate(2 52)">
            <path
              d="M 43.305 10 L 9.696 10 C 4.341 10 0 5.659 0 0.305 L 0 0.161 C 0 0.072 0.073 0 0.161 0 L 52.839 0 C 52.928 0 53 0.072 53 0.161 L 53 0.305 C 53 5.659 48.659 10 43.305 10"
              fill="rgba(255,255,255,1)"
            />
            <path
              d="M 43.466 10 L 20.001 10 C 13.001 10 5.466 5.731 5.466 0.466 L 5.466 0 L 53.001 0 L 53.001 0.466 C 53.001 5.731 48.732 10 43.466 10"
              fill="rgba(0,220,237,1)"
            />
            <path
              d="M 43.305 10 L 9.696 10 C 4.341 10 0 5.659 0 0.305 L 0 0.161 C 0 0.072 0.073 0 0.161 0 L 52.839 0 C 52.928 0 53 0.072 53 0.161 L 53 0.305 C 53 5.659 48.659 10 43.305 10 Z"
              fill="transparent"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeMiterlimit="10"
            />
            <path
              d="M 47 0 L 60 0"
              fill="transparent"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeLinecap="round"
              strokeMiterlimit="10"
            />
          </g>
          <g transform="translate(32 2)">
            <path
              d="M 0 0 L 0 38 L 22 38 Z"
              fill="#FFFFFF"
              strokeWidth="4"
              stroke="#323648"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M 5 38 L 22 38 L 5.028 8 Z" fill="rgba(0,220,237,1)" />
            <path
              d="M 0 0 L 0 38 L 22 38 Z"
              fill="transparent"
              strokeWidth="4"
              stroke="#323648"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <g transform="translate(2 2)">
            <path
              d="M 30 0 L 30 44 L 0 44 Z"
              fill="rgba(255,255,255,1)"
              strokeWidth="4"
              stroke="#323648"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 9 44 L 30 12"
              fill="transparent"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeMiterlimit="10"
            />
            <path
              d="M 18 44 L 30 25"
              fill="transparent"
              strokeWidth="4"
              stroke="rgba(50,54,72,1)"
              strokeMiterlimit="10"
            />
          </g>
          <path
            d="M 32 52 L 32 2"
            fill="transparent"
            strokeWidth="4"
            stroke="rgba(50,54,72,1)"
            strokeLinecap="round"
            strokeMiterlimit="10"
          />
        </svg>
      );
      break;
    case 'contact':
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={props.width}
          height={props.height}
        >
          <path d="M 2 58 L 62 58 L 62 6 L 2 6 Z" fill="rgba(255,255,255,1)" />
          <path d="M 61 58 L 7 58 L 7 10.103 Z" fill="rgba(0,220,237,1)" />
          <path
            d="M 2 58 L 62 58 L 62 6 L 2 6 Z"
            fill="transparent"
            strokeWidth="4"
            stroke="rgba(50,54,72,1)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 2 6 L 62 58"
            fill="transparent"
            strokeWidth="4"
            stroke="rgba(50,54,72,1)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 36.19 28.662 L 11.001 7 L 62.001 7 Z"
            fill="rgba(0,220,237,1)"
          />
          <path
            d="M 34.62 29.646 L 62 6 L 2 6 L 29.38 29.646 C 30.884 30.949 33.116 30.949 34.62 29.646 Z"
            fill="transparent"
            strokeWidth="4"
            stroke="rgba(50,54,72,1)"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
      break;

    case 'arrow-right-bounded':
      svg = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64px"
          height="64px"
          scale={props.scale}
        >
          <path
            d="M 32 2 C 48.569 2 62 15.431 62 32 C 62 48.569 48.569 62 32 62 C 15.431 62 2 48.569 2 32 C 2 15.431 15.431 2 32 2 Z"
            fill="transparent"
            strokeWidth="4"
            stroke={props.strokeColor}
          />
          <g transform="translate(22 17) rotate(-90 10 15)">
            <path
              d="M 20 20 L 10 30 L 0 20"
              fill="transparent"
              strokeWidth="4"
              stroke={props.strokeColor}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 10 30 L 10 8"
              fill="transparent"
              strokeWidth="4"
              stroke={props.strokeColor}
              strokeLinecap="round"
            />
            <path
              d="M 10 0 C 11.105 0 12 0.895 12 2 C 12 3.105 11.105 4 10 4 C 8.895 4 8 3.105 8 2 C 8 0.895 8.895 0 10 0 Z"
              fill={props.strokeColor}
            />
          </g>
        </svg>
      );
      break;

    default:
      svg = null;
      break;
  }
  return <Container>{svg}</Container>;
};

//Styles
const Container = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
`;

export default Icon;
