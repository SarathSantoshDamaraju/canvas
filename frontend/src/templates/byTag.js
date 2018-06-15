import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/card';
import Label from '../components/label';

const ArticleTemplate = ({ data }) => (
  <div className='row'>
  {data.allStrapiFiles.edges.map(document => (
      <Card data={document} key={document.node.id}/>
  ))}
</div>
);

export default ArticleTemplate;

export const query = graphql`  
query getByTag($tag: String!){
    allStrapiFiles(filter: {tags: {regex: $tag}}){
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
