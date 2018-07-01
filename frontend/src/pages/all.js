import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

const IndexPage = ({data}) => (
  <div className='row mt-6'>
    {data.allStrapiFiles.edges.map(document => {
      // Show Category label only in the home page and file pages.
      document.node.showLabel=true;
      return(
        <Card data={document} key={document.node.id} />
      )})}
  </div>
)

export default IndexPage

export const pageQuery = graphql`  
  query getAllFiles {
      allStrapiFiles {
        edges {
          node {
            id
            title
            category {
              name
            }
            thumbnail {
              url
            }
          }
        }
      }
  }
`