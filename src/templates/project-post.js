import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

const ProjectPostTemplate = ({ data }) => {
  const project = data.prismicPortfolioProjects.data;
  return (
    <Layout>
      <Helmet title={`Aalok Trivedi: ${project.project_title.text}`} />
      <article>
        <h1 dangerouslySetInnerHTML={{ __html: project.project_title.html }} />
        <div
          dangerouslySetInnerHTML={{ __html: project.project_content.html }}
        />
      </article>
    </Layout>
  );
};

export default ProjectPostTemplate;

export const pageQuery = graphql`
  query($uid: String!) {
    prismicPortfolioProjects(uid: { eq: $uid }) {
      id
      uid
      data {
        project_title {
          text
          html
        }
        services {
          html
        }
        project_content {
          html
        }
      }
    }
  }
`;
