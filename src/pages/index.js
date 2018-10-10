import React from 'react';
import Layout from '../components/layout';
import HomeHero from '../components/homeHero';
import WorkShowcase from '../components/showcase/workShowcase';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout>
    <HomeHero />
    <WorkShowcase sectionTitle="My Work" data={data} />
  </Layout>
);

export const PrismicProjectQuery = graphql`
  query PrismicQuery {
    allPrismicPortfolioProjects(limit: 3) {
      edges {
        node {
          id
          uid
          data {
            project_title {
              text
            }
            services {
              text
            }
            featured_image {
              url
            }
            brand_primary_color
            brand_secondary_color
          }
        }
      }
    }
  }
`;
export default IndexPage;
