import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { lighten } from 'polished';

const ButtonWrapper = styled(Link)`
  padding: 0.8rem 3.2rem;
  color:${props => (props.secondary ? props.theme.secondaryBlue : 'white')};
  background: ${props =>
    props.secondary ? 'transparent' : props.theme.secondaryBlue};
  border-radius: 100px;
  border: 2px solid ${props => props.theme.secondaryBlue};
  font-size: 1.6rem;
  font-weight: bold;
  transition: 300ms;
  &:hover {
    color: white;
    background: ${props =>
      props.secondary
        ? props.theme.secondaryBlue
        : lighten(0.1, props.theme.secondaryBlue)};
    border-color: ${props =>
      props.secondary
        ? props.theme.secondaryBlue
        : lighten(0.1, props.theme.secondaryBlue)};
`;

const Button = props => {
  return (
    <ButtonWrapper secondary={props.secondary} to="/work">
      {props.label}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  theme: PropTypes.string,
  label: PropTypes.string.isRequired
};
export default Button;
