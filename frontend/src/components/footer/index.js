import React from 'react';
import Link from 'gatsby-link';

const Footer = ({data}) => (
    <footer className='container mt-90'>
      <div className='row'>
      <ul className='nav-links full-height' data-alignment='vertical'>
          <li className='nav-link active'><Link to=''>About</Link></li>
          <li className='nav-link'><Link to=''>Contact</Link></li>
          <li className='nav-link'><Link to=''>All</Link></li>
        </ul>
      </div>
    </footer>
)

export default Footer;