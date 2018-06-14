const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors);
      }

      return result;
    })
  );
});

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;
  const allPages = makeRequest(graphql, `
    {
      allStrapiFiles {
        edges {
          node {
            id
            title
            category
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiFiles.edges.forEach(({ node }) => {
      // Creating Page for Individual File
      createPage({
        path: `/${node.title}`,
        component: path.resolve(`src/templates/byFile.js`),
        context: {
          id: node.id
        }
      });
      // Creating Page for Individual Category
      createPage({
        path: `/category/${node.category}`,
        component: path.resolve(`src/templates/byCategory.js`),
        context: {
          category: node.category
        }
      });
    });
  });

  return allPages;
};
