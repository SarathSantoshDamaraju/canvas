import React from 'react';
import Link from 'gatsby-link';
import Card from '../components/card';
import LinkBuilder from '../helpers/LinkBuilder';
import SubscriptionForm from '../components/forms/subscription.js';

const IndexPage = ({data}) => {
  let videosLink;
  let blogsLink;
  data.allStrapiExternallinks.edges.map(document => {
    switch(document.node.name){
      case "video":
        videosLink = document.node.link;
      break;
      case "blog":
        blogsLink = document.node.link;
      break;
      default:
        blogsLink = '/all';
        videosLink = '/all';
      break;
    }
  })
  return(
  <div>
    <SubscriptionForm />
    <div className="featured-list plr-20 mtb-90">
      <div className='row'>
        <ul className="list-header mtb-1">
          <li className="list-header-item text-left color-primary"><h5>Featured Kits</h5></li>
          <li className="list-header-item text-right color-primary"><LinkBuilder title="see all" link='/all' /></li>
        </ul>
      </div>
      <div className='row mtb-2'>
        {data.allStrapiFiles.edges.map(document => {
          // Show Category label only in the home page and file pages.
          document.node.showLabel=true;
          return(
            <Card data={document} key={document.node.id} />
          )})}
      </div>
    </div>
    <div className="featured-list plr-20 mtb-90">
      <div className='row'>
        <ul className="list-header mtb-1">
          <li className="list-header-item text-left color-primary"><h5>Featured Videos</h5></li>
          <li className="list-header-item text-right color-primary"><LinkBuilder title="see all" link={videosLink} /></li>
        </ul>
      </div>
      <div className='row mtb-2'>
        {data.allStrapiFeaturedvideos.edges.map(document => {
          // Show Category label only in the home page and file pages.
          document.node.showLabel=false;
          document.node.linkType="external";
          return(
            <Card data={document} key={document.node.id} />
          )})}
      </div>
    </div>
    <div className="featured-list plr-20 mtb-90">
      <div className='row'>
        <ul className="list-header mtb-1">
          <li className="list-header-item text-left color-primary"><h5>Featured Blogs</h5></li>
          <li className="list-header-item text-right color-primary"><LinkBuilder title="see all" link={blogsLink} /></li>
        </ul>
      </div>
      <div className='row mtb-2'>
        {data.allStrapiFeaturedblogs.edges.map(document => {
          // Show Category label only in the home page and file pages.
          document.node.showLabel=false;
          document.node.linkType="external";
          return(
            <Card data={document} key={document.node.id} />
          )})}
      </div>
    </div>
  </div>
)};

export default IndexPage;

export const pageQuery = graphql`
query getdetails {
  allStrapiExternallinks {
    edges {
      node {
        id
        name
        link
      }
    }
  }
  allStrapiFiles(filter:{featured: {eq: true}}, limit: 3, sort: {fields: [createdAt], order: DESC}) {
    edges {
      node {
        id
        title
        thumbnail {
          url
        }
        category{
          name
        }
        link
      }
    }
  }
  allStrapiFeaturedblogs (limit:3, sort: {fields: [createdAt], order:DESC})  {
    edges {
      node {
        id
        title
        thumbnail {
          url
        }
        link
      }
    }
  }
  allStrapiFeaturedvideos (limit:3, sort: {fields: [createdAt], order:DESC})  {
    edges {
      node {
        id
        title
        thumbnail {
          url
        }
        link
      }
    }
  }
}
`
