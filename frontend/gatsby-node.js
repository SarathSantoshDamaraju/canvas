const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {  
  // Query for nodes to use in creating pages.
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ boundActionCreators, graphql }) => {  
  const { createPage } = boundActionCreators;

  const getArticles = makeRequest(graphql, `
    {
      allStrapiFiles {
        edges {
          node {
            id
            title
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiFiles.edges.forEach(({ node }) => {
      createPage({
        path: `/${node.title}`,
        component: path.resolve(`src/templates/file.js`),
        context: {
          id: node.id,
        },
      })
    })
  });

  const getByCategory = makeRequest(graphql, `
    {
      allStrapiFiles {
        edges {
          node {
            id
            category
          }
        }
      }
    }
    `).then(result => {
    // Create pages for each article.
    result.data.allStrapiFiles.edges.forEach(({ node }) => {
      createPage({
        path: `/category/${node.category}`,
        component: path.resolve(`src/templates/byCategory.js`),
        context: {
          category: node.category,
        },
      })
    })
  });

  // Query for articles nodes to use in creating pages.
  return (getArticles,getByCategory);
};