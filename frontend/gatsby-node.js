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
            {
              name
            }
            tags
          }
        }
      }
    }
    `).then(result => {
    result.data.allStrapiFiles.edges.forEach(({ node }) => {
      // Creating Page for Individual File
      createPage({
        path: `/${node.id}`,
        component: path.resolve(`src/templates/byFile.js`),
        context: {
          id: node.id
        }
      });
      // Creating Page for Individual Category
      createPage({
        path: `/category/${node.category.name}`,
        component: path.resolve(`src/templates/byCategory.js`),
        context: {
          category: node.category.name
        }
      });
      if(node.tags){
      node.tags.split(',').forEach((tag) => {
        var tagName = tag.length !== 0 ? tag.trim() : false;
        if (tagName) {
          createPage({
            path: `/tag/${tagName}`,
            component: path.resolve(`src/templates/byTag.js`),
            context: {
              tag: `/${tagName}/`
            }
          });
        }
      });
    }
    });
  });

  return allPages;
};
