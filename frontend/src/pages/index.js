import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/card'

const IndexPage = ({data}) => (
  <div className="card-deck">
    {data.allStrapiFiles.edges.map(document => (
      <Card data={document} key={document.node.id}/>
    ))}
  </div>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiFiles {
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