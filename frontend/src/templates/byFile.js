import React from 'react';
import Link from 'gatsby-link';
import config from '../../config';
import FileDetails from '../components/file-details';

const ArticleTemplate = ({ data }) => (
  <div>
      <FileDetails data={data.strapiFiles} />
    <div></div>
  </div>
);

export default ArticleTemplate;

export const query = graphql`  
  query FileTemplate($id: String!) {
    strapiFiles(id: {eq: $id}) {
      id
      title
      description
      category
      downloads
      tags
      link
      designer_email
      designer_portfolio
      designer
      thumbnail {
        url
        name
      }
    }
  }
`;
