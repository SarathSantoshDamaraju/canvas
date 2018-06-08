import React from 'react';
import Link from 'gatsby-link';

const BreadCrumb = ({currentLocation}) => (
  <nav aria-label='breadcrumb'>
    <ol className='breadcrumb'>
      <li className='breadcrumb-item' aria-current='page'>
      <Link to="/">
        Home
      </Link>
      </li>
      <li className='breadcrumb-item active' aria-current='page'>
        {currentLocation}
      </li>
    </ol>
  </nav>
);

export default BreadCrumb;
