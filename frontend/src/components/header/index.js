import React from 'react';
import Link from 'gatsby-link';
import config from '../../../config';
import LinkBuilder from '../../helpers/LinkBuilder';
import SubscriptionForm from '../forms/subscription.js';
import logo from '../../images/logo.png';


class Header extends React.Component {
  constructor(props) {
     super(props);
     this.state={
       videosLink:'',
       blogsLink:'',
       uploadLink:''
     }
  }

  componentDidMount() {
  window.addEventListener('scroll', this.handleScroll);
  debugger;
  this.props.data.edges.map(document => {
    switch(document.node.name){
      case "video":
        this.setState({videosLink:document.node.link});
      break;
      case "blog":
      this.setState({blogsLink:document.node.link});
      break;
      case "upload":
      this.setState({uploadLink:document.node.link});
      break;
    }
  });
  
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 126) {
      document.getElementsByClassName("hidden")[0].style.display = "block";
    } else {
      document.getElementsByClassName("hidden")[0].style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  }
  
  }
  render(){
  return(
  <header>
    <nav className='row center-xs full-width bg-grey' id='desktop-menu-container'>
      <div className='col-md-6 col-lg-6 col-sm-12 col-xs-12 for-desktop'>
      <a href="/"><img src={logo} className='logo hidden left-logo'/></a>
      </div>
      <div className='col-md-12 col-lg-12 col-sm-12 col-xs-12 for-mobile'>
        <div className='brand full-height'>
          <a href="/"><img src={logo} className='logo center-center'/></a>
          {/* <h1 className='name'><a href="#">Designer Depot</a></h1> */}
          <a href="javascript:void(0);" className="for-mobile center-right burger-menu color-white" onClick={toggleMenu}>
            <span className='fa fa-bars'></span>
          </a>
        </div>
      </div>
      <div className='col-md-4 col-lg-4 col-sm-12 col-xs-12 for-desktop'>
      <ul className='nav-links full-height float-right' data-alignment='vertical'>
          <li className='nav-link color-white '><LinkBuilder link='/' title="Home" className="custom-underline"/></li>
          <li className='nav-link color-white '><LinkBuilder link='/new' title="UI Kits" className="custom-underline"/></li>
          <li className='nav-link color-white '><LinkBuilder link={this.state.blogsLink} title="Articles" className="custom-underline"/></li>
          <li className='nav-link color-white'><LinkBuilder link={this.state.videosLink} title="Videos" className="custom-underline"/></li>
          <li className='nav-link color-white'><LinkBuilder link={this.state.uploadLink} title="Submit" className="border"/></li>
          {/* <li className='nav-link'><LinkBuilder link='/about' title="About" className="custom-underline"/></li> */}
        </ul>
      </div>
    </nav>
    <nav id='mobile-menu-container' className='overlay'>
      <div className='tile center-center'>
        <ul className='text-center nav-links' data-alignment='horizontal'>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link='/' title="Home"/></li>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link='/new' title="UI Kits"/></li>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link={this.state.blogsLink} title="Articles"/></li>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link={this.state.videosLink} title="Videos"/></li>
          <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link={this.state.uploadLink} title="Submit"/></li>
          {/* <li className='nav-link ' onClick={closeMobileMenu}><LinkBuilder link='/about' title="About"/></li> */}
          <li className='nav-link color-red' onClick={closeMobileMenu}><LinkBuilder link='/#' title="Close"/></li>
        </ul>
      </div>
    </nav>
    <SubscriptionForm />
 </header>
)}
};

function toggleMenu(){
  var mobileMenu = document.getElementById('mobile-menu-container');
  mobileMenu.style.display='block'
}

function closeMobileMenu(){
  var mobileMenu = document.getElementById('mobile-menu-container');
  mobileMenu.style.display='none'
}

export default Header;

