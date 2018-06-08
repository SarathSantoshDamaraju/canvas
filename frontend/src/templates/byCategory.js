import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/card'

const ArticleTemplate = ({ data }) => (
  <div className='row'>
    <div className='col-md-8'>
    {data.allStrapiFiles.edges.map(document => (
      <Card data={document} key={document.node.id}/>
    ))}
    </div>
    <div className='col-md-4'></div>
  </div>
);

export default ArticleTemplate;

export const query = graphql`  
query getByCategory($category: String!){
  allStrapiFiles(filter: {category: {eq: $category}}){
    edges{
      node{
        id
          title
          category
          thumbnail {
            url
          }
      }
    }
  }
}
`;
