import React from 'react';
import { Link } from 'gatsby';
import NavItem from './navItem';
import styled, { withTheme } from 'styled-components';
import { media } from '../../styles/theme';
import Icon from '../icons';

const NavPanel = props => {
  const menu = [
    {
      label: 'Home',
      link: '/',
      icon: 'home'
    },
    {
      label: 'Work',
      link: '/work',
      icon: 'work'
    },
    {
      label: 'Experience',
      link: '/experience',
      icon: 'experience'
    },
    {
      label: 'Contact',
      link: '/contact',
      icon: 'contact'
    }
  ];
  return (
    <NavWrapper>
      <Logo to="/">
        <Icon name="logo" width={72} />
      </Logo>

      <nav>
        <NavList>
          {menu.map((link, index) => (
            <NavItem
              key={index}
              to={link.link}
              label={link.label}
              icon={link.icon}
            />
          ))}
        </NavList>
      </nav>
    </NavWrapper>
  );
};

//styles
const NavWrapper = styled.header`
  height: 100%;
  width: ${props => props.theme.layout.navPanelWidthDesktop};
  position: fixed;
  background: ${props => props.theme.color.primary};
  justify-items: center;
  align-items: flex-start;
  padding: ${props => props.theme.spacing.med} 0;

  ${media.tablet`
    bottom: 0;
    width: 100%;
    height: auto;
    padding: 0;
  `};
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};

  ${media.tablet`
    display: none;
  `};
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  padding: 0;

  ${media.tablet`
    flex-direction: row;
    margin: 0;
  `};
`;

export default withTheme(NavPanel);
