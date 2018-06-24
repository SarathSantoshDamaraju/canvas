import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const LinkBuilder = props => {
  if (!props.link) return null;
  if (!props.link.startsWith('http') && !props.link.startsWith('/')) {
    return `${props.title}: ${props.link}`;
  }
  if (props.media) {
    return (
      <a href={props.link} title={props.title} target={props.target} className={props.className ? props.className : ''}>
        <div className='card-media ma' style={{backgroundImage: `url(${props.media})`}}>
         </div>
      </a>
    );
  }else {
    if(props.target==="_self"){
    return (
      <a href={props.link} title={props.title} target={props.target} className={props.className ? props.className : ''}> 
        {props.title}
      </a>
    )}
    else {
      return (
        <OutboundLink
        href={props.link}
        className={props.className ? props.className : ''}
      >
        {props.title}
      </OutboundLink>  
      )
    }
  }
};

export default LinkBuilder;
