import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import NavPanel from './NavPanel';
import Footer from './Footer';
import '../css/css-reset.css';
import '../css/main.scss';

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
  // // if location matches return your choice of title
  // if (pathname === '/') return 'index';
  // // otherwise return a default title
  // return 'other pages';
};

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
