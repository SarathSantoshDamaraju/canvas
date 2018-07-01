import React from 'react';
import axios from "axios";
import config from '../../../config';
import Label from '../label';
import Tags from '../tags';

const FileDetails = ({data}) => {
  return (
    <div className='row file mt-11'>
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
          <a href={data.link} className='button button-black mtb-1'>Download</a>
        </div>
      </div>
    </div>
  );
};

export default FileDetails;

function updateDownloads(id, totalDownloads) {
    let updatedCount = totalDownloads +  1;
    var url = config.api+'/files/'+id;
      axios.put(url, {
        downloads:updatedCount
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }