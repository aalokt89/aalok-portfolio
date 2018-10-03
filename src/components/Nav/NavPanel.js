import React from 'react';
import { Link } from 'gatsby';
import NavItem from './NavItem';
import logoDark from '../../images/aalok-logo-dark.svg';
import homeIcon from '../../images/icons/home-icon.svg';
import workIcon from '../../images/icons/work-icon.svg';
import experienceIcon from '../../images/icons/experience-icon.svg';
import contactIcon from '../../images/icons/contact-icon.svg';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';

const NavPanel = props => (
  <ThemeProvider theme={theme}>
    <NavWrapper>
      <LogoContainer to="/">
        <img width="64" src={logoDark} alt="Aalok Trivedi" />
      </LogoContainer>

      <NavList>
        <ul>
          <NavItem to="/" icon={homeIcon} alt="home" />
          <NavItem to="/work" icon={workIcon} alt="work" />
          <NavItem to="/experience" icon={experienceIcon} alt="experience" />
          <NavItem to="/contact" icon={contactIcon} alt="contact" />
        </ul>
      </NavList>
    </NavWrapper>
  </ThemeProvider>
);

const NavWrapper = styled.header`
  height: 100%;
  width: ${props => props.theme.layout.navPanelWidthDesktop};
  position: fixed;
  background: ${props => props.theme.colors.primary};
  justify-items: center;
  align-items: start;
  padding: ${props => props.theme.spacing.med} 0;
`;

const LogoContainer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const NavList = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
    padding: 0;
  }
`;

export default NavPanel;
