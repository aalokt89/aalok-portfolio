import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { transparentize, getLuminance } from 'polished';

const ShowcaseProject2 = props => (
  <ShowcaseProjectWrapper featuredImage={props.featuredImage}>
    <ShowcaseProjectLabel
      to={props.path}
      primaryColor={props.primaryColor}
      secondaryColor={props.secondaryColor}
    >
      <div className="project-label">
        <Arrow
          className="arrow-right"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
        >
          <path
            d="M 16 1 C 24.284 1 31 7.716 31 16 C 31 24.284 24.284 31 16 31 C 7.716 31 1 24.284 1 16 C 1 7.716 7.716 1 16 1 Z"
            fill="transparent"
            stroke-width="2"
            stroke={getLuminance(props.primaryColor) < 0.5 ? 'white' : '#333'}
          />
          <g transform="translate(10.667 8) rotate(-90 5.333 8)">
            <path
              d="M 10.667 10.667 L 5.333 16 L 0 10.667"
              fill="transparent"
              stroke-width="2"
              stroke={getLuminance(props.primaryColor) < 0.5 ? 'white' : '#333'}
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M 5.333 16 L 5.333 4.267"
              fill="transparent"
              stroke-width="2"
              stroke={getLuminance(props.primaryColor) < 0.5 ? 'white' : '#333'}
              stroke-linecap="round"
            />
            <path
              d="M 5.267 0 C 5.819 0 6.267 0.448 6.267 1 C 6.267 1.552 5.819 2 5.267 2 C 4.714 2 4.267 1.552 4.267 1 C 4.267 0.448 4.714 0 5.267 0 Z"
              fill={getLuminance(props.primaryColor) < 0.5 ? 'white' : '#333'}
            />
          </g>
        </Arrow>
        <h2>{props.projectTitle}</h2>
        <p>{props.services}</p>
      </div>
    </ShowcaseProjectLabel>
  </ShowcaseProjectWrapper>
);

const ShowcaseProjectWrapper = styled.div`
  background: ${props => transparentize(0.5, props.theme.color.purple)};
  background-image: url(${props => props.featuredImage});
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
`;

const ShowcaseProjectLabel = styled(Link)`
  padding: 0 ${props => props.theme.spacing.reg};
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:hover > div::after {
    transform: scale(1.1);
  }
  &:hover > div > h2 {
    transform: translate(7.2rem);
  }
  &:hover > div > p {
    transform: translate(7.2rem);
  }
  &:hover > .project-label > .arrow-right {
    transform: scale(1.2);
  }

  .project-label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;

    &::after {
      content: '';
      width: 15rem;
      height: 15rem;
      background: ${props => props.primaryColor};
      border-radius: 50%;
      position: absolute;

      transition: ${props => props.theme.motion.baseTime};
    }
  }
  h2 {
    color: white;
    display: inline-block;
    text-align: left;
    padding: 0.8rem 1.6rem;
    margin-left: 3.2rem;
    background: ${props => props.secondaryColor};
    margin-bottom: 0.2rem;
    flex-grow: 0;
    z-index: 1;
    transition: all ${props => props.theme.motion.baseTime} ease-in-out;
  }
  p {
    display: inline-block;
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
    background: ${props => props.secondaryColor};
    margin: 0;
    margin-left: 3.2rem;
    z-index: 1;
    transition: all ${props => props.theme.motion.baseTime} ease-in-out 75ms;
  }
`;

const Arrow = styled.svg`
  position: absolute;
  left: 5.8rem;
  transition: all ${props => props.theme.motion.baseTime} ease-in-out 90ms;
  transform: scale(0);
  z-index: 1;
`;

ShowcaseProject2.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired
};
export default ShowcaseProject2;
