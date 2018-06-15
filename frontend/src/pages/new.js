import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

const NewFiles = ({data}) => (
  <div className='row'>
    {data.allStrapiFiles.edges.map(document => {
      // Show Category label only in the home page and file pages.
      document.node.showLabel=true;
      return(
        <Card data={document} key={document.node.id} />
      )})}
  </div>
)

export default NewFiles

export const pageQuery = graphql`  
  query getNewFiles {
    allStrapiFiles(sort:{fields: [createdAt], order: DESC}){
      edges {
        node {
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
`