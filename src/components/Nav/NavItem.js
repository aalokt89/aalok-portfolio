import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { Link } from 'gatsby';
import Icon from '../icons';

const NavItem = props => {
  return (
    <NavItemWrapper>
      <Link to={props.to}>
        <span>
          <Icon name={props.icon} width={24} viewBox="0 0 64 64" />
        </span>
        {props.label}
      </Link>
    </NavItemWrapper>
  );
};

//styles
const NavItemWrapper = styled.li`
  flex-grow: 1;
  padding: ${props => props.theme.spacing.xs} 0;

  a {
    height: 100%;
    padding: ${props => props.theme.spacing.sm};
    font-size: ${props => props.theme.fontSize.caption};
    font-family: ${props => props.theme.font.bodyFontStack};
    color: ${props => lighten(0.5, props.theme.color.primary)};
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin: 0;
    transition: 300ms;
    &:hover {
      color: ${props => lighten(1, props.theme.color.primary)};
    }
    &:hover > span {
      background: ${props => lighten(0.2, props.theme.color.primary)};
      transform: scale(1.15);
      border: 0.2rem solid ${props => props.theme.color.purple};
    }
    ${'' /* .active {
      background: ${props => lighten(0.2, props.theme.color.primary)};
      transform: scale(1.15);
      border: 0.2rem solid ${props => props.theme.color.purple};
    } */} span {
      height: 4.4rem;
      width: 4.4rem;
      background: ${props => lighten(0.1, props.theme.color.primary)};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: ${props => props.theme.spacing.sm};
      transition: 300ms;
    }
  }
`;

export default NavItem;
