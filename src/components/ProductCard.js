import React from 'react';
import ReactStars from 'react-rating-stars-component';
import {Link} from 'react-router-dom';
import features from '../images/features-1.png';
import alternate from '../images/alternate-1.jpg';
import fav from '../images/favourite.png';
const ProductCard =(props)=>{
    return (
        <div className="col-3">
            <div className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                    <img src={fav} alt="fav"></img>
                    </Link>
                </div>
                <div className="product-image">
                    <img src={props.imgsrc} alt="product"></img>
                    <img src={props.alterimg} alt="alternate"></img>
                    </div>
                    <div className="product-details">
                        <h6 className="brand">{props.title} </h6>
                        <h5 className="product-title">{props.descrip} </h5>
                         <ReactStars count={5} size={24} value="3" edit={false} activeColor="#ffd700" />
                         <p className="price">{props.price}</p>
                    </div>
            </div>
        </div>
    );
}
export default ProductCard;