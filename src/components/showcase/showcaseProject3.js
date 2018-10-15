import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { getLuminance } from 'polished';
import Icon from '../icons';

const ShowcaseProject3 = props => {
  const getContrastColor = () => {
    let bg = '';
    getLuminance(props.primaryColor) < 0.5 ? (bg = 'white') : (bg = '#333');
    return bg;
  };
  return (
    <ProjectLinkWrapper
      to={props.path}
      primarycolor={props.primaryColor}
      secondarycolor={props.secondaryColor}
    >
      <CtaWrapper>
        <Bound primarycolor={props.primaryColor}>
          <Icon
            name="arrow-right-bounded"
            className="arrow-right-bounded"
            width={64}
            color={getContrastColor()}
          />
        </Bound>
      </CtaWrapper>
      <ProjectLabel
        className="project-label"
        primarycolor={props.primaryColor}
        secondarycolor={props.secondaryColor}
      >
        <h2>{props.projectTitle}</h2>
        <p>{props.services}</p>
      </ProjectLabel>
    </ProjectLinkWrapper>
  );
};

//Styles
const ProjectLinkWrapper = styled(Link)`
  display: grid;
  grid-template-columns: repeat(4, 33px) auto;
  text-decoration: none;
  color: white;
  padding: ${props => props.theme.spacing.med};
  background: ${props => props.theme.color.purple};

  &:hover svg {
    transform: scale(0.65);
  }
  &:hover > .project-label > h2 {
    transform: translate(6.4rem);
  }
  &:hover > .project-label > p {
    transform: translate(6.4rem);
  }
`;

const CtaWrapper = styled.div`
  display: grid;
  grid-column: 1 / span 4;
  grid-row: 1 / -1;
  justify-content: center;
  align-content: center;
`;

const Bound = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  width: 132px;
  height: 132px;
  background: ${props => props.primarycolor};
  border-radius: 50%;

  svg {
    transform: scale(0);
    transition: all ${props => props.theme.motion.baseTime} ease-in-out;
  }
`;

const ProjectLabel = styled.div`
  display: grid;
  grid-gap: 0.2rem;
  align-content: center;
  justify-items: start;
  grid-column: 2 / -1;
  grid-row: 1 / -1;

  h2,
  p {
    color: white;
    background: ${props => props.secondarycolor};
    padding: 0.8rem 1.6rem;
    margin: 0;
    border-radius: 0.4rem;
  }

  h2 {
    transition: all ${props => props.theme.motion.baseTime} ease-in-out;
  }
  p {
    transition: all ${props => props.theme.motion.baseTime} ease-in-out 60ms;
    font-size: 1.4rem;
  }
`;

export default ShowcaseProject3;
