import React from 'react';
import styled from 'styled-components';
import { lighten, darken } from 'polished';

const Footer = props => (
  <FooterWrapper>
    <a
      href="http://www.dribbble.com/aalok-trivedi"
      target="_blank"
      rel="noopener noreferrer"
    >
      Dribbble
    </a>
    <a
      href="http://www.pinterest.com/aalok89"
      target="_blank"
      rel="noopener noreferrer"
    >
      Pinterest
    </a>
    <a
      href="http://www.logopond.com/aalok89"
      target="_blank"
      rel="noopener noreferrer"
    >
      LogoPond
    </a>
  </FooterWrapper>
);

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background: ${props => darken(0.1, props.theme.color.primary)};
  height: 8.8rem;
  margin-left: ${props => props.theme.layout.navPanelWidthDesktop};

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => lighten(0.5, props.theme.color.primary)};
    text-decoration: none;
    font-size: 1.2rem;
    ::before {
      content: '';
      display: block;
      width: 3.2rem;
      height: 3.2rem;
      margin-bottom: ${props => props.theme.spacing.sm};
      background: ${props => props.theme.color.primary};
      border-radius: 50%;
    }
  }
`;

// const FooterContainer = styled.div`
//   display: grid;
//   justify-items: center;
//   align-items: center;

//   grid-template-columns: repeat(3, 1fr);
// `;

export default Footer;
