import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Link } from 'gatsby';
import theme from '../theme';
import { lighten } from 'polished';

const NavItem = props => {
  return (
    <ThemeProvider theme={theme}>
      <NavListItem>
        <NavLink to={props.to}>
          <span>
            <img src={props.icon} alt={props.alt} />
          </span>
          Home
        </NavLink>
      </NavListItem>
    </ThemeProvider>
  );
};

const NavListItem = styled.li`
  flex-grow: 1;
`;

const NavLink = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: ${props => props.theme.spacing.reg};
  color: ${lighten(0.5, '#323648')};
  text-decoration: none;
  font-size: 1rem;
  font-family: ${props => props.theme.text.bodyFontStack};
  margin: 0;
  transition: 250ms;

  &:hover {
    color: ${lighten(1, '#323648')};
  }
  &:hover > span {
    transform: scale(1.15);
  }

  span {
    height: 4.4rem;
    width: 4.4rem;
    margin-bottom: 0.8rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    transition: 250ms;
    img {
      width: 2.4rem;
    }
  }
`;

export default NavItem;
