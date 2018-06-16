import React from 'react';

const LinkBuilder = props => {
  if (!props.link) return null;
  if (!props.link.startsWith('http') && !props.link.startsWith('/')) {
    return `${props.title}: ${props.link}`;
  }
  if (props.media) {
    return (
      <a href={props.link} title={props.title}><img src={props.media} alt=''></img>
      </a>
    );
  }else {
    return (
      <a href={props.link} title={props.title}>
        {props.title}
      </a>
    );
  }
};

export default LinkBuilder;