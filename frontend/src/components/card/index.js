import React from 'react';
import Link from 'gatsby-link';
import config from '../../../config';
import Label from '../label';
import image from '../../images/light.jpg';

const Card = ({data}) => {
  return (
    <div className='col-md-4 col-xs-6 col-xs-12 card'>
      <div className='card-media ma'>
        <Link to={'file/'+data.node.title}>
        <img src={config.api + data.node.thumbnail.url} alt=''></img>
        </Link>
      </div>
      <div className='card-content mtb-1'>
        {data.node.showLabel ? <Label data={{category: data.node.category, isLink: true, linkUrl: 'category/' + data.node.category}} /> : null}
        <h3><Link to={'file/'+data.node.title}> {data.node.title} </Link></h3>
      </div>
    </div>);
};

export default Card;
