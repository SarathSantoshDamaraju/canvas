import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <nav className='navbar navbar-expand-lg navbar-light bg-light sticky-top'>
    <Link to='/' className="navbar-brand">
    {siteTitle}
    </Link>
      {}
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarNav'
      aria-controls='navbarNav'
      aria-expanded='false'
      aria-label='Toggle navigation'>
      <span className='navbar-toggler-icon'></span>
    </button>
    <div className='collapse navbar-collapse' id='navbarNav'>
      <ul className='navbar-nav col-md-8'>
      <li className='nav-item active'>
          <a className='nav-link' href='#'>All <span className='sr-only'>(current)</span></a>
        </li>
        <li className='nav-item active'>
          <a className='nav-link' href='#'>Popular <span className='sr-only'>(current)</span></a>
        </li>
        <li className='nav-item active'>
          <a className='nav-link' href='#'>New <span className='sr-only'>(current)</span></a>
        </li>
        <li className='nav-item active'>
          <a className='nav-link' href='#'>Submit <span className='sr-only'>(current)</span></a>
        </li>
      </ul>
      <form className="form-inline col-md-4">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
  </nav>
);

export default Header;
