import React from 'react';
import Link from 'gatsby-link';
import config from '../../../config';
import Label from '../label';
import LinkBuilder from '../../helpers/LinkBuilder';

const Card = ({data}) => {
  console.log(data);
  return (
    <div className='col-md-4 col-xs-6 col-xs-12 card'>
      <div className='card-media ma'>
      <LinkBuilder title={data.node.title} link={'/'+data.node.id} media={config.api + data.node.thumbnail.url}/>
      </div>
      <div className='card-content mtb-1'>
        {data.node.showLabel ? <Label data={{category: data.node.category.name, isLink: true, linkUrl: 'category/' + data.node.category.name}} /> : null}
        <h3><LinkBuilder title={data.node.title} link={'/'+data.node.id} /></h3>
      </div>
    </div>);
};

export default Card;
