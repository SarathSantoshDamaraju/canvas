import React from 'react'
import Link from 'gatsby-link'

const About = () => (
    <div className='container about'>
  <div className='row mtb-1 col-xs'>
    <h2 className='title full-width'>About</h2>
    <p className='description full-width mtb-1'>DesignRepo helps to setup websites similar to sketchRepo and thus helping designers to showcase theri talents or host their own portfolio websites. It is still under active development. Check our <a href='#' className='color-desktop' target='blank'>Github</a> repo for the upcoming features</p>
    <p className='description full-width mtb-1'>It is maintained by <a href='#' className='color-desktop' target='blank'>Me</a> and <a href='#' className='color-desktop' target='blank'>My Friend</a>.</p>
  </div>
  <div className='row mtb-1 col-xs'>
    <h2 className='title full-width'>ContactUs</h2>
    <p className='description full-width mtb-1'>Have something to share with us? We'd be very happy to consider it. Shoot an email to <a href='mailto:sample@sample.com' className='color-desktop'>sample@sample.com</a>. Follow our updats on our Social Networks Handlers <a href='#' className='color-desktop' target='blank'>Facebook</a> and <a href='#' className='color-desktop' target='blank'>Twitter</a>.</p>
  </div>
  <div className='row mtb-1 col-xs'>
    <p className='attribution'>Developed with <a href='https://www.gatsbyjs.org/' className='color-misc' target='blank'>Gatsby</a>, <a href='https://strapi.io/' className='color-misc' target='blank'>Strapi</a> and <a href='' target='blank'><span className='fa fa-headphones color-misc'></span></a> by <a href='' className='color-misc' target='blank'>Krishna Sarath</a></p>
  </div>
  </div>
)

export default About
