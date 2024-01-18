import React ,{useState} from 'react';
import {Link} from 'react-router-dom';
import footerimage from '../images/footerimg_1.png';
import FooterData from '../components/footerdata';
const BlogCard= (props)=>{
    return (
            <div className="blog-card">
             <div className="card-image">
                <img src={props.imgsrc} className="img-fluid w-75" alt="footer"></img>
             </div>
             <div className="blog-content">
                <p className="date"> {props.dat}</p>
                <h5 className="title">{props.msg} </h5>
                  <p className="desc">{props.descr}</p>
                  <Link to="/blogs/:id" className="button text-decoration-none">Read more</Link>
             </div>
            </div>
    );
}

export default BlogCard;