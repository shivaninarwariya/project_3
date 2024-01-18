import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {Link} from 'react-router-dom';
import singlebookimg from '../images/singlebookimg_5.jpg';
const SpecialProduct =(props)=>{
    return (
        <div className="col-6 mb-3">
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div>
                    <img src={props.imgsrc} className="img-fluid" alt="book"></img>
                </div>
                <div className="special-product-content">
                    <h5 className="brand">{props.titl}</h5>
                    <h6 className="title">{props.des} </h6>
                    <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                    <p className="price">
                        <span className="red-p">{props.pric}</span> &nbsp; <strike>$150</strike>
                    </p>
                    <div className="discount-till d-flex align-items-center gap-10">
                        <p className="mb-0">
                            <b>5</b>days
                        </p>
                        <div className="d-flex gap-10 align-items-center">
                            <span className="badge rounded-circle p-2 bg-danger">1</span>
                            <span className="badge rounded-circle p-2 bg-danger">1</span>
                            <span className="badge rounded-circle p-2 bg-danger">1</span>
                        </div>
                    </div>
                    <div className="prod-count my-3">
                            <p>Products:5</p>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width:"25%"}} aria-voluenow="25" aria-valmin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <Link className="button text-decoration-none">Add to cart</Link>
                </div>
            </div>
        </div>    
        </div>
    );
}
export default SpecialProduct;