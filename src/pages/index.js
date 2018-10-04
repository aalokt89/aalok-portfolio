import React from 'react';
import Layout from '../components/layout';
import HomeHero from '../components/HomeHero';
import WorkShowcase from '../components/showcase/WorkShowcase';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Layout>
    <HomeHero />
    <WorkShowcase sectionTitle="My Work" data={data} />
  </Layout>
);

export const PrismicProjectQuery = graphql`
  query PrismicQuery {
    allPrismicPortfolioProjects {
      edges {
        node {
          id
          data {
            project_title {
              text
            }
            services {
              text
            }
          }
        }
      }
    }
  }
`;
export default IndexPage;
