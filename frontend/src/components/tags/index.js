import React from 'react';
import Link from 'gatsby-link';
import { join } from 'path';

const Tags = ({list}) => {
    list = list.split(",");
    var tagLinks=[];
    list.forEach(element => {
        var tag = element.trim();
        tagLinks.push(<li key={tag} className="tag-item"><a className="badge badge-pill badge-dark" href={'tag/'+tag}><i>{tag}</i></a></li>);
    });
    return(<ul className="tags mtb-1">{tagLinks}</ul>)
}

export default Tags;
