import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import NavPanel from './Nav/NavPanel';
import Footer from './Footer';
import '../css/css-reset.css';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';
//import '../css/main.scss';

const getTitle = (pathname, siteTitle) => {
  let pageTitle = siteTitle;
  switch (pathname) {
    case '/': {
      pageTitle = `U!/UX Designer`;
      break;
    }
    case '/work': {
      pageTitle = `My Work`;
      break;
    }
    case '/experience': {
      pageTitle = `My experience`;
      break;
    }
    case '/contact': {
      pageTitle = `Contact me`;
      break;
    }
    default: {
      pageTitle = siteTitle;
      break;
    }
  }

  return pageTitle;
};

// const GlobalStyle = createGlobalStyle`
//   body {
//     color: ${props => props.theme.text};
//     font-family: ${props => props.theme.bodyFontStack};
//   }
// `;
const ContentWrapper = styled.main`
  margin-left: ${props => props.theme.layout.navPanelWidthDesktop};
`;

const Layout = ({ location: { pathname }, children }) => {
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
            // title={data.site.siteMetadata.title}
            title={`Aalok Trivedi: ${getTitle(
              pathname,
              data.site.siteMetadata.title
            )}`}
            meta={[
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' }
            ]}
          >
            <html lang="en" style={{ fontSize: '62.5%' }} />
          </Helmet>
          <NavPanel siteTitle={data.site.siteMetadata.title} />

          <ThemeProvider theme={theme}>
            <ContentWrapper className="content">{children}</ContentWrapper>
          </ThemeProvider>

          <Footer />
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
