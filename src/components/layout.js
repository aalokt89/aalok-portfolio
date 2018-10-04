import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import NavPanel from './nav/NavPanel';
import Footer from './Footer';
import '../css/css-reset.css';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

// const GlobalStyle = createGlobalStyle`
//   html{
//     font-size: 62.5%;
//   }
//   body{
//     font-size: 1.6rem;
//     font-family: Montserrat, -apple-system, helvetica, Roboto, sans-serif;
//   }
// `;
// injectGlobal`
//   html{
//     font-size: 62.5%;
//   }
//   body{
//     font-size: 1.6rem;
//     font-family: Montserrat, -apple-system, helvetica, Roboto, sans-serif;
//   }
// `;

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
