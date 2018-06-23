import React from 'react';
import Link from 'gatsby-link';
import axios from "axios";
import config from '../../config';
import Label from './label';
import Tags from './tags';

const FileDetails = ({data}) => {
  console.log(data);
  return (
    <div className='row file'>
      <div className='col-md-6'>
        <img
          src={config.api + data.thumbnail.url}
          alt={data.thumbnail.name}
          className='file-thumbnail'
          data-uk-img></img>
      </div>
      <div className='col-md-6'>
        <div className='file-details'>
          <Label data={{category: data.category.name, isLink: true, linkUrl: 'category/' + data.category.name}} />
          <h2 className='file-title'>{data.title}</h2>
          <p className='file-by mtb-1'>
            Designed by <a href={data.designer_portfolio} target='blank'>{data.designer.toLowerCase()}</a>
          </p>
          <p className='file-description mtb-1'>{data.description}</p>
          <Tags list={data.tags}/>
          <a href={data.link} className='button button-black mtb-1' onClick={() => {updateDownloads(data.id, data.downloads)}}>Download</a>
        </div>
      </div>
    </div>
  );
};

export default FileDetails;
