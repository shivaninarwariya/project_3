import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import cross from '../images/cross.png';
import special1 from '../images/special-4.jpg';
import special2 from '../images/special-5.jpg';
import special3 from '../images/special-3.jpg';

const wishlist =()=>{
    return (
        <>
        <Meta title={"Wishlist"} />
        <BreadCrumb title="Wishlist" />
        <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src={cross} className="position-absolute cross img-fluid" alt="book"></img>
                            <div className="wishlist-card-image">
                                <img src={special1} className="img-fluid w-100 mb-1" alt="book"></img>
                            </div>
                            <div className="py-3">
                            <h6 className="title">This is the diagram on the zodiac that Venus makes in eight years.</h6>
                            <h5 className="price">$ 200</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src={cross} className="position-absolute cross img-fluid" alt="book"></img>
                            <div className="wishlist-card-image">
                                <img src={special2} className="img-fluid w-100 mb-1" alt="book"></img>
                            </div>
                            <div className="py-3">
                            <h6 className="title">This is the diagram on the zodiac that Venus makes in eight years.</h6>
                            <h5 className="price">$ 200</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img src={cross} className="position-absolute cross img-fluid" alt="book"></img>
                            <div className="wishlist-card-image">
                                <img src={special3} className="img-fluid w-100 mb-1" alt="book"></img>
                            </div>
                            <div className="py-3">
                            <h6 className="title">This is the diagram on the zodiac that Venus makes in eight years.</h6>
                            <h5 className="price">$ 200</h5>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        </>
    );
}

export default wishlist