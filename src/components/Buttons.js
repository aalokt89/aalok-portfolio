import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { lighten } from 'polished';

const ButtonWrapper = styled(Link)`
  padding: 0.8rem 3.2rem;
  color: ${props => (props.secondary ? props.theme.colors.secondary : 'white')};
  background: ${props =>
    props.secondary ? 'transparent' : props.theme.colors.secondary};
  border-radius: 100px;
  border: 2px solid ${props => props.theme.colors.secondary};
  font-size: 1.6rem;
  font-weight: bold;
  font-family: ${props => props.theme.text.bodyFontStack};
  text-decoration: none;
  transition: 300ms;
  &:hover {
    color: white;
    background: ${props =>
      props.secondary
        ? props.theme.colors.secondary
        : lighten(0.1, props.theme.colors.secondary)};
    border-color: ${props =>
      props.secondary
        ? props.theme.secondary
        : lighten(0.1, props.theme.colors.secondary)};
  }
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
