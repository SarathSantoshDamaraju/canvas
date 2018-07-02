import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/card';
import Label from '../components/label';

const ArticleTemplate = ({ data }) => (
  <div className='row mt-11'>
  {data.allStrapiFiles.edges.map(document => (
      <Card data={document} key={document.node.id}/>
  ))}
</div>
);

export default ArticleTemplate;

export const query = graphql`  
query getByCategory($category: String!){
  allStrapiFiles(filter: {category: {name: {eq: $category}}}){
    edges{
      node{
        id
        title
        category{
          name
        }
        thumbnail {
          url
        }
      }
    }
  }
}
`;
