import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { getLuminance } from 'polished';
import Icon from '../icon';

const ShowcaseProject2 = props => {
  const getContrastColor = () => {
    let bg = '';
    getLuminance(props.primaryColor) < 0.5 ? (bg = 'white') : (bg = '#333');
    return bg;
  };
  return (
    <ShowcaseProjectLink to={props.path}>
      <ProjectLabel primarycolor={props.primaryColor} className="project-label">
        <Icon
          icon="arrow-right-bounded"
          className="arrow-right"
          width="3.2rem"
          height="3.2rem"
          strokeColor={getContrastColor()}
        />
        <ProjectTitle
          className="project-label"
          secondarycolor={props.secondaryColor}
        >
          {props.projectTitle}
        </ProjectTitle>
        <Services secondarycolor={props.secondaryColor}>
          {props.services}
        </Services>
      </ProjectLabel>
    </ShowcaseProjectLink>
  );
};
//Styles

const ShowcaseProjectLink = styled(Link)`
  padding: ${props => props.theme.spacing.reg};
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:hover > .project-label::after {
    transform: scale(1.1);
  }
  &:hover > .project-label > h2 {
    transform: translate(7.2rem);
  }
  &:hover > .project-label > p {
    transform: translate(7.2rem);
  }
  &:hover > .project-label > .arrow-right {
    transform: scale(1.2);
  }
`;
const ProjectLabel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: relative;

  &::after {
    content: '';
    width: 15rem;
    height: 15rem;
    background: ${props => props.primarycolor};
    border-radius: 50%;
    position: absolute;

    transition: ${props => props.theme.motion.baseTime};
  }

  .arrow-right {
    z-index: 1;
  }
`;

const ProjectTitle = styled.h2`
  color: white;
  display: inline-block;
  text-align: left;
  padding: 0.8rem 1.6rem;
  margin-left: 3.2rem;
  background: ${props => props.secondarycolor};
  margin-bottom: 0.2rem;
  flex-grow: 0;
  z-index: 1;
  transition: all ${props => props.theme.motion.baseTime} ease-in-out;
`;

const Services = styled.p`
  display: inline-block;
  font-size: 1.4rem;
  padding: 0.8rem 1.6rem;
  background: ${props => props.secondarycolor};
  margin: 0;
  margin-left: 3.2rem;
  z-index: 1;
  transition: all ${props => props.theme.motion.baseTime} ease-in-out 60ms;
`;

ShowcaseProject2.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired
};
export default ShowcaseProject2;
