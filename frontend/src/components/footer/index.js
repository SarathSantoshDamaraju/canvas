import React from 'react';
import Link from 'gatsby-link';

const Footer = ({data}) => (
    <footer>
      <div className='container'>
        <div className='row center-xs mtb-1 col-xs'>
          <div className="box">
              <div className="row start-xs">
                  <div className="col-xs">
                    <ul className="row">
                    <li><a href="https://twitter.com/helloabstrakt" target="blank"><i className="fab fa-twitter color-white"></i></a></li>
                    <li><a href="https://www.facebook.com/helloabstrakt" target="blank"><i className="fab fa-facebook-f color-white"></i></a></li>
                    <li><a href="https://www.instagram.com/helloabstrakt/" target="blank"><i className="fab fa-instagram color-white"></i></a></li>                    
                    <li><a href="https://medium.com/helloabstrakt" target="blank"><i className="fab fa-medium-m color-white"></i></a></li>
                    </ul>
                  </div>
              </div>
          </div>
          <div className="box">
              <div className="row start-xs">
                  <div className="col-xs">
                    <p>Made with <span className='fa fa-bolt color-primary'></span> from India</p>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </footer>
)

export default Footer;