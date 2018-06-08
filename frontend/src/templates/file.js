import React from 'react';
import Link from 'gatsby-link';
import config from '../../config';
import FileDetails from '../components/file-details';

const ArticleTemplate = ({ data }) => (
  <div className='row'>
    <div className='col-md-8'>
      <FileDetails data={data.strapiFiles} />
    </div>
    <div className='col-md-4'></div>
  </div>
);

export default ArticleTemplate;

export const query = graphql`  
  query FileTemplate($id: String!) {
    strapiFiles(id: {eq: $id}) {
      title
      description
      category
      tags
      link
      designer_email
      designer
      thumbnail {
        url
        name
      }
    }
  }
`;
