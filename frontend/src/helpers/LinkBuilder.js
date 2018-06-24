import React from 'react';

const LinkBuilder = props => {
  if (!props.link) return null;
  if (!props.link.startsWith('http') && !props.link.startsWith('/')) {
    return `${props.title}: ${props.link}`;
  }
  if (props.media) {
    return (
      <a href={props.link} title={props.title} target={props.target}>
        <div className='card-media ma' style={{backgroundImage: `url(${props.media})`}}>
         </div>
      </a>
    );
  }else {
    return (
      <a href={props.link} title={props.title} target={props.target}> 
        {props.title}
      </a>
    );
  }
};

export default LinkBuilder;
