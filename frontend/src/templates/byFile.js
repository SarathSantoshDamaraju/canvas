import React from 'react';
import Link from 'gatsby-link';
import config from '../../config';
import FileDetails from '../components/file';

const ArticleTemplate = ({ data }) => {
  return(
  <div>
      <FileDetails data={data.strapiFiles} />
    <div></div>
  </div>
)};

export default ArticleTemplate;

export const query = graphql`  
  query FileTemplate($id: String!) {
    strapiFiles(id: {eq: $id}) {
      id
      title
      description
      category{
        name
      }
      downloads
      tags
      link
      designer_portfolio
      designer
      thumbnail {
        url
        name
      }
    }
  }
`;
