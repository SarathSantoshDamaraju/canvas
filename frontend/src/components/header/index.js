import React from 'react';
import Link from 'gatsby-link';
import logo from '../../images/logo.jpeg';
import config from '../../../config';
import LinkBuilder from '../../helpers/LinkBuilder';

const Header = ({ siteTitle,data}) => {
  let videosLink;
  let blogsLink;
  let uploadLink;
  data.edges.map(document => {
    switch(document.node.name){
      case "video":
        videosLink = document.node.link;
      break;
      case "blog":
        blogsLink = document.node.link;
      break;
      case "upload":
        uploadLink = document.node.link;
      break;
      default:
        blogsLink = '/404';
        videosLink = '/404';
        uploadLink = '/404';
      break;
    }
  })

  return(
  <header>
    <nav className='row center-xs full-width' id='desktop-menu-container'>
      <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 for-desktop'>
        <ul className='nav-links full-height float-left' data-alignment='vertical'>
          <li className='nav-link '><LinkBuilder link='/' title="Home" className="custom-underline"/></li>
          <li className='nav-link '><LinkBuilder link='/new' title="UI Kits" className="custom-underline"/></li>
          <li className='nav-link '><LinkBuilder link={blogsLink} title="Articles" className="custom-underline"/></li>
          <li className='nav-link'><LinkBuilder link={videosLink} title="Videos" className="custom-underline"/></li>
        </ul>
      </div>
      <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12'>
        <div className='brand full-height'>
          <img src={logo} className='logo center-center'/>
          {/* <h1 className='name'><a href="#">Designer Depot</a></h1> */}
          <a href="javascript:void(0);" className="for-mobile center-right burger-menu" onClick={toggleMenu}>
            <span className='fa fa-bars'></span>
          </a>
        </div>
      </div>
      <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 for-desktop'>
      <ul className='nav-links full-height float-right' data-alignment='vertical'>
          <li className='nav-link'><LinkBuilder link={uploadLink} title="Submit" className="border"/></li>
          {/* <li className='nav-link'><LinkBuilder link='/about' title="About" className="custom-underline"/></li> */}
        </ul>
      </div>
    </nav>
    <nav id='mobile-menu-container' className='overlay'>
      <div className='tile center-center'>
        <ul className='text-center nav-links' data-alignment='horizontal'>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link='/' title="Home"/></li>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link='/new' title="UI Kits"/></li>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link={blogsLink} title="Articles"/></li>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link={videosLink} title="Videos"/></li>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link={uploadLink} title="Submit"/></li>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link='/about' title="About"/></li>
          <li className='nav-link color-red' onClick={closeMobileMenu}><LinkBuilder link='/#' title="Close"/></li>
        </ul>
      </div>
    </nav>
 </header>
)};

function toggleMenu(){
  var mobileMenu = document.getElementById('mobile-menu-container');
  mobileMenu.style.display='block'
}

function closeMobileMenu(){
  var mobileMenu = document.getElementById('mobile-menu-container');
  mobileMenu.style.display='none'
}

export default Header;

