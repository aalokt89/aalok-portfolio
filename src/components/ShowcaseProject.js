import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Body, H2 } from './Typography';

const ShowcaseProject = props => {
  return (
    <ShowcaseProjectContainer>
      <Link to="/" className="project-label">
        <ShowcaseProjectTitle>{props.projectTitle}</ShowcaseProjectTitle>
        <ShowcaseServices>{props.services}</ShowcaseServices>
      </Link>
    </ShowcaseProjectContainer>
  );
};

//Styles

const ShowcaseProjectContainer = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  background-image: url('https://source.unsplash.com/random/');
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;

  a {
    text-decoration: none;
  }
`;

const ShowcaseProjectTitle = H2.withComponent('h2').extend`
  color: white;
  margin: 0;
`;

const ShowcaseServices = Body.withComponent('p').extend`
  color: white;
  font-size: 1.6rem;
  margin: 0;
  
`;

ShowcaseProject.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired
};

export default ShowcaseProject;
