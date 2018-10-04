import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { opacify } from 'polished';
import { H2, P } from '../Typography';

const ShowcaseProject = props => (
  <ShowcaseProjectWrapper>
    <ShowcaseProjectLabel to="/">
      <H2 white>{props.projectTitle}</H2>
      <P white>{props.services}</P>
    </ShowcaseProjectLabel>
  </ShowcaseProjectWrapper>
);

const ShowcaseProjectWrapper = styled.div`
  background-color: ${props => opacify(0.8, props.theme.color.secondary)};
  background-image: url('https://source.unsplash.com/random/');
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
  display: grid;
  color: white;
`;

const ShowcaseProjectLabel = styled(Link)`
  display: grid;
  padding: 0 ${props => props.theme.spacing.reg};
  align-content: center;
  text-decoration: none;
  > h2 {
    margin-bottom: 0;
  }
  > p {
    font-size: 1.4rem;
  }
`;
ShowcaseProject.propTypes = {
  projectTitle: PropTypes.string.isRequired,
  services: PropTypes.string.isRequired
};
export default ShowcaseProject;
