import React from 'react';
import Link from 'gatsby-link';
import config from '../../../config';
import Label from '../label';
import image from '../../images/light.jpg';
import LinkBuilder from '../../helpers/LinkBuilder';

const Card = ({data}) => {
  return (
    <div className='col-md-4 col-xs-6 col-xs-12 card'>
      <div className='card-media ma'>
      <LinkBuilder title={data.node.title} link={'/'+data.node.title} media={config.api + data.node.thumbnail.url}/>
      </div>
      <div className='card-content mtb-1'>
        {data.node.showLabel ? <Label data={{category: data.node.category, isLink: true, linkUrl: 'category/' + data.node.category}} /> : null}
        <h3><LinkBuilder title={data.node.title} link={'/'+data.node.title} /></h3>
      </div>
    </div>);
};

export default Card;
