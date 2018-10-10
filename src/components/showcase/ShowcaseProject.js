import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { transparentize } from 'polished';
import { H2, P } from '../typography';

const ShowcaseProject = props => (
  <ShowcaseProjectWrapper featuredImage={props.featuredImage}>
    <ShowcaseProjectLabel to={props.path}>
      <H2 white>{props.projectTitle}</H2>
      <P white>{props.services}</P>
    </ShowcaseProjectLabel>
  </ShowcaseProjectWrapper>
);

const ShowcaseProjectWrapper = styled.div`
  background: ${props => props.theme.color.purple};
  background-image: url(${props => props.featuredImage});
  background-size: cover;
  background-position: center;
  background-blend-mode: multiply;
  display: grid;
  color: white;
`;

const ShowcaseProjectLabel = styled(Link)`
  display: grid;
  padding: 0 ${props => props.theme.spacing.reg};
  align-content: center;
  text-decoration: none;
  ${'' /* background: ${props => transparentize(0, props.theme.color.purple)}; */} > h2 {
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
