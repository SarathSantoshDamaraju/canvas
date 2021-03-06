import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import SecondaryHeader from '../components/header/secondary'
import Footer from '../components/footer'
import Link from 'gatsby-link'
import './reset.css'
import './global.css'
import './theme.css'
import './custom.css'
import './responsive.css'
import './flexbox.css'
import favicon from '../images/favicon.png'

const windowGlobal = typeof window !== 'undefined' && window.location.origin

const Layout = ({ children, data, location }) => (
  <div>
     <Helmet>
        <meta charSet="utf-8" />
        <title>{data.site.siteMetadata.title}</title>
        <meta name="Abstrakt" content="A collective designs repo" />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon}/>
    </Helmet>
    <base href={windowGlobal}/>
    {location.pathname === '/' ? 
      <Header siteTitle={data.site.siteMetadata.title} data={data.allStrapiExternallinks}/> :
      <SecondaryHeader siteTitle={data.site.siteMetadata.title} data={data.allStrapiExternallinks}/>
    }
    <div className='container' id='app'>
      {children()}
    </div>
    <div className='error-message center-center'>
      <p>Screen size not supported, please try from another device</p>
    </div>
    <Footer/>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allStrapiExternallinks {
      edges {
        node {
          id
          name
          link
        }
      }
    }
  }
`
