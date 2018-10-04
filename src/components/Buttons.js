import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { darken } from 'polished';

const Button = props => (
  <ButtonWrapper type={props.type} to={props.to}>
    {props.label}
  </ButtonWrapper>
);

//styles
const ButtonWrapper = styled(Link)`
  color: ${props =>
    props.type === 'secondary' ? props.theme.color.secondary : 'white'};
  background: ${props =>
    props.type === 'secondary' ? 'transparent' : props.theme.color.secondary};
  border: 2px solid ${props => props.theme.color.secondary};
  padding: 0.8rem 3.2rem;
  font-family: ${props => props.theme.font.bodyFontStack};
  font-size: 1.6rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 100px;
  transition: 250ms;
  &:hover {
    color: white;
    background: ${props =>
      props.type === 'secondary'
        ? props.theme.color.secondary
        : darken(0.05, props.theme.color.secondary)};
    border-color: ${props =>
      props.type === 'secondary'
        ? props.theme.color.secondary
        : darken(0.05, props.theme.color.secondary)};
  }
`;
Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired
};
export default Button;
