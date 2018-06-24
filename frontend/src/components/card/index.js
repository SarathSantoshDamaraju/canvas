import React from 'react';
import Link from 'gatsby-link';
import config from '../../../config';
import Label from '../label';
import LinkBuilder from '../../helpers/LinkBuilder';

const Card = ({data}) => {
  const fillerImage = "https://dummyimage.com/600x400/e6e3e6/c71437&text=image";
  let linkUrl = '/'+data.node.id;
  let target = "_self";
  if(data.node.linkType==="external"){
    linkUrl = data.node.link;
    target = "_blank";
  }
  return (
    <div className='col-md-4 col-xs-6 col-xs-12 card'>
       <LinkBuilder title={data.node.title} link={linkUrl} target={target} media={data.node.thumbnail ? (config.api + data.node.thumbnail.url) : fillerImage}/> 
      <div className='card-content mtb-1'>
        {data.node.showLabel ? <Label data={{category: data.node.category.name, isLink: true, linkUrl: 'category/' + data.node.category.name}} /> : null}
        <h3><LinkBuilder title={data.node.title} link={linkUrl} target={target}/></h3>
      </div>
    </div>);
};

export default Card;

