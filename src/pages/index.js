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
