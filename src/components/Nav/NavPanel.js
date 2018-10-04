import React from 'react';
import { Link } from 'gatsby';
import NavItem from './navItem';
import logoDark from '../../images/aalok-logo-dark.svg';
import homeIcon from '../../images/icons/home-icon.svg';
import workIcon from '../../images/icons/work-icon.svg';
import experienceIcon from '../../images/icons/experience-icon.svg';
import contactIcon from '../../images/icons/contact-icon.svg';
import styled from 'styled-components';

const NavPanel = props => {
  const menu = [
    {
      label: 'Home',
      link: '/',
      icon: homeIcon
    },
    {
      label: 'Work',
      link: '/work',
      icon: workIcon
    },
    {
      label: 'Experience',
      link: '/experience',
      icon: experienceIcon
    },
    {
      label: 'Contact',
      link: '/contact',
      icon: contactIcon
    }
  ];
  return (
    <NavWrapper>
      <Logo to="/">
        <img width="64" src={logoDark} alt="Aalok Trivedi" />
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
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  padding: 0;
`;

export default NavPanel;
