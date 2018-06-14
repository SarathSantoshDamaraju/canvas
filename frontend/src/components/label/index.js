import React from 'react';
import Link from 'gatsby-link';

const Label = ({data}) => {
    var iconClass = 'icon ';
    var labelClass = 'label ';
  switch (data.category) {
    case 'mockups':
      iconClass += 'bgcolor-mockups';
      labelClass += 'color-mockups';
      break;
    case 'websites':
      iconClass += 'bgcolor-websites';
      labelClass += 'color-websites';
      break;
    case 'icons':
      iconClass += 'bgcolor-icons';
      labelClass += 'color-icons';
      break;
    case 'misc':
      iconClass += 'bgcolor-misc';
      labelClass += 'color-misc';
      break;
    case 'plugins':
      iconClass += 'bgcolor-plugins';
      labelClass += 'color-plugins';
      break;
    case 'mobile':
      iconClass += 'bgcolor-mobile';
      labelClass += 'color-mobile';
      break;
    case 'ui-kits':
      iconClass += 'bgcolor-ui-kits';
      labelClass += 'color-ui-kits';
      break;
    case 'desktop':
      iconClass += 'bgcolor-desktop';
      labelClass += 'color-desktop';
      break;
  }
  if(data.isLink){
      return(<Link to={data.linkUrl} className={labelClass}><span className={iconClass}></span>{data.category}</Link>)
  }
  else {
      return(<span className={labelClass}>{data.category}</span>)
  }
}

export default Label;