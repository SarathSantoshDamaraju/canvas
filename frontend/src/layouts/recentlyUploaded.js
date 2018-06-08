import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/card'

const RecentlyUploaded = ({ data }) => {
    console.log(data);
    return(
  <div className='row'>
    <div className='col-md-12'>
    {data.allStrapiFiles.edges.map(document => (
      <Card data={document} key={document.node.id}/>
    ))}
    </div>
  </div>);
};

export default RecentlyUploaded;

export const query = graphql`  
query getRecent {
    allStrapiFiles(limit: 10,sort:{fields: createdAt, order: DESC}){
      edges{
        node{
          id
        }
      }
    }
  }
`;
