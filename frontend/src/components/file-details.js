import React from 'react';
import Link from 'gatsby-link';
import config from '../../config';
import categoryColor from '../helpers/categoryColor';
import BreadCrumb from './breadCrumb';
import Tags from './tags';
import RecentlyUploaded from '../layouts/recentlyUploaded';

const FileDetails = ({data}) => {
    var categoryClass = categoryColor.addColor(data.category);
    return (
        <section>
            <div>
            <img src={config.api + data.thumbnail.url} alt={data.thumbnail.name}></img>
            <Link to={'../category/'+data.category} className={categoryClass}>
            {data.category}
            </Link>
            <h1 className="display-4">{data.title}</h1>
            <BreadCrumb currentLocation={data.title}/>
            <p className="lead">
                {data.description}
            </p>
            <Tags list={data.tags}/>
            </div>
            <div className="mt-4">
            <RecentlyUploaded />
            </div>
        </section>
    );
};

export default FileDetails;

