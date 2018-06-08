import React from 'react';
import Link from 'gatsby-link';
import config from '../../config';
import categoryColor from '../helpers/categoryColor';

const Card = ({data}) => {
var categoryClass = categoryColor.addColor(data.node.category);
  return (
    <div className='col-md-6'>
      <div className='card text-center'>
        <Link to={'../'+data.node.title}>
        <img className='card-img-top' src={config.api + data.node.thumbnail.url} alt='Card image cap'></img>
        </Link>
        <div className='card-body'>
          <Link to={'../'+data.node.title}>
          <h5 className='card-title'>{data.node.title}</h5>
          </Link>
          <p>
            {data.node.description}
          </p>
          <Link to={'../category/'+data.node.category} className={categoryClass}>
          {data.node.category}
          </Link>
        </div>
      </div>
    </div>);
};

export default Card;
