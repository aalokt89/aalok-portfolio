import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import "../css/css-reset.css";
import '../css/main.scss';
import NavPanel from './NavPanel';
import Footer from './Footer';


const Layout = ({ children }) => (
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
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          
          <html lang="en" />
        </Helmet>
        <NavPanel siteTitle={data.site.siteMetadata.title} />
        
        <main className="content">
          {children}
        </main>

        <Footer />
        
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
