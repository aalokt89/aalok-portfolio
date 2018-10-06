import React from 'react';
import PropTypes from 'prop-types';
import { modernNormalize } from 'styled-modern-normalize';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import NavPanel from './nav/navPanel';
import Footer from './footer';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

// const GlobalStyle = createGlobalStyle`
//   body{
//     margin: 20px;
//   }
// `;
injectGlobal`
  ${modernNormalize}
  
  @import url('https://fonts.googleapis.com/css?family=Lora:400,400i,700|Montserrat:400,700');

  html{
    font-size: 62.5% !important;
  }
  body{
    font-family: ${theme.font.bodyFontStack};
    font-size: 1.6rem;
    color: ${theme.color.text};
    line-height: 1.4;
    margin: 0 !important;
    padding:0;
  }

  h1, h2, h3, h4, h5 {
    font-family: ${theme.font.headerFontStack};
    font-weight: 700;
    color: ${theme.color.primary};
    margin: 0;
    margin-bottom: 1.6rem;
  }
  h1{
    font-size: 3.4rem;
  }
  h2{
    font-size: 2,4rem;
  }
  h3{
    font-size: 2rem;
  }
  h4{
    font-size: 1.8rem;
  }
  h5{
    font-size: 1.6rem;
  }
`;

const ContentWrapper = styled.main`
  margin-left: ${props => props.theme.layout.navPanelWidthDesktop};
`;

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          >
            <html lang="en" />
          </Helmet>

          <ThemeProvider theme={theme}>
            <NavPanel siteTitle={data.site.siteMetadata.title} />
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <ContentWrapper>{children}</ContentWrapper>
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <Footer />
          </ThemeProvider>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
