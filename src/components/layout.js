import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import NavPanel from './Nav/NavPanel';
import Footer from './Footer';
import '../css/css-reset.css';
import styled, { createGlobalStyle, injectGlobal } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
  }
  body{
    font-size: 1.6rem;
    font-family: Montserrat, -apple-system, helvetica, Roboto, sans-serif;
  }
`;
// injectGlobal`
//   html{
//     font-size: 62.5%;
//   }
//   body{
//     font-size: 1.6rem;
//     font-family: Montserrat, -apple-system, helvetica, Roboto, sans-serif;
//   }
// `;
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
          <NavPanel siteTitle={data.site.siteMetadata.title} />

          <main className="content">{children}</main>

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
