import React from 'react';
import Link from 'gatsby-link';
import { join } from 'path';

const Tags = ({list}) => {
    list = list.split(",");
    var tagLinks=[];
    list.forEach(element => {
        var tag = element.trim();
        tagLinks.push(<li key={tag} className="tag-item"><Link className="badge badge-pill badge-dark" to={tag}><i>{tag}</i></Link></li>);
    });
    return(<ul className="tags mtb-1">{tagLinks}</ul>)
}

export default Tags;
