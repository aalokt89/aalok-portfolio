const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPrismicPortfolioProjects {
          edges {
            node {
              id
              uid
            }
          }
        }
      }
    `).then(result => {
      result.data.allPrismicPortfolioProjects.edges.forEach(({ node }) => {
        createPage({
          path: node.uid,
          component: path.resolve('./src/templates/project-post.js'),
          context: {
            slug: node.uid
          }
        });
      });
      resolve();
    });
  });
};
