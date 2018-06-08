import React from 'react';
import Link from 'gatsby-link';
import { join } from 'path';

const Tags = ({list}) => {
    list = list.split(",");
    var tagLinks=[];
    list.forEach(element => {
        var tag = element.trim();
        tagLinks.push(<li key={tag} className="list-inline-item"><Link className="badge badge-pill badge-dark" to={tag}>{tag}</Link></li>);
    });
    
    return(<ul className="list-inline">{tagLinks}</ul>)
}

export default Tags;
