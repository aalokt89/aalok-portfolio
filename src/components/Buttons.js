import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';

const Button = props => (
  <ButtonWrapper secondary={props.secondary} to={props.to}>
    {props.label}
  </ButtonWrapper>
);

//styles
const ButtonWrapper = styled(Link)`
  color: ${props => (props.secondary ? props.theme.color.secondary : 'white')};
  background: ${props =>
    props.secondary ? 'transparent' : props.theme.color.secondary};
  border: 2px solid ${props => props.theme.color.secondary};
  padding: 0.8rem 3.2rem;
  font-family: ${props => props.theme.font.bodyFontStack};
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 100px;
  transition: 250ms;
  &:hover {
    color: 'white';
    background: ${props =>
      props.secondary
        ? props.theme.color.secondary
        : darken(0.05, props.theme.color.secondary)};
    border-color: ${props =>
      props.secondary
        ? props.theme.color.secondary
        : darken(0.05, props.theme.color.secondary)};
  }
`;
Button.propTypes = {
  secondary: PropTypes.boolean,
  label: PropTypes.string.isRequired
};
export default Button;
