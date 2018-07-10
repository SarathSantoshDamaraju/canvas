import React from 'react';
import Link from 'gatsby-link';

const Footer = ({data}) => (
  <footer>
    <div className='container'>
      <div className='row center-xs col-xs'>
        <div className='box'>
          <div className='row start-xs' style={{'marginTop': '10px'}}>
            <div className='col-xs'>
              <ul className='row'>
                <li>
                  <a href='https://twitter.com/helloabstrakt' target='blank'><i className='fab fa-twitter color-white'></i></a>
                </li>
                <li>
                  <a href='https://www.facebook.com/helloabstrakt' target='blank'><i className='fab fa-facebook-f color-white'></i></a>
                </li>
                <li>
                  <a href='https://www.instagram.com/helloabstrakt/' target='blank'><i className='fab fa-instagram color-white'></i></a>
                </li>
                <li>
                  <a href='https://medium.com/helloabstrakt' target='blank'><i className='fab fa-medium-m color-white'></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='row center-xs col-xs'>
        <div className='box'>
          <div className='row start-xs'>
            <div className='col-xs'>
              <p style={{'fontSize':'15px','lineHeight': '2em'}}>
                Made with <span className='fa fa-bolt color-primary'></span> from India
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
