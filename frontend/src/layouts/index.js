import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/header'
import Footer from '../components/footer'
import Link from 'gatsby-link';
import './reset.css'
import './global.css'
import './theme.css'
import './custom.css'
import './responsive.css'
import './flexbox.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title}/>
    <div className='container mt-11' id='app'>
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
  }
`
