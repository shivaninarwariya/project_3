import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import cross from '../images/cross.png';
import specials from '../images/special-1.jpg';
const CompareProduct =()=>{
    return (
        <>
        <Meta title={"Compare Products"} />
        <BreadCrumb title="Compare Products" />
        <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src={cross} alt="book" className="position-absolute cross img-fluid"></img>
                            <div className="product-card-image">
                                <img src={specials} className="mb-1" alt="book"></img>
                            </div>
                            <div className="compare-product-details">
                                <h6 className="title">Follows three generations of a family that suffers a peculiar affliction: in every generation, at least one person dies by drowning—and in Kerala, water is everywhere</h6>
                                <h5 className="price mb-2">$ 180</h5>
                            </div>
                            <div className="product-detail">
                                <h5>Availability</h5>
                                <p>24 hrs</p>
                            </div>
                            <div className="product-detail">
                                <h5>Author name</h5>
                                <p>Abraham Verghese</p>
                            </div>
                            <div className="product-detail">
                                <h5>Type</h5>
                                <p>Novel</p>
                            </div>
                            <div className="product-detail">
                                <h5>Rating</h5>
                                <p>4.6/5</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card position-relative">
                            <img src={cross} alt="book" className="position-absolute cross img-fluid"></img>
                            <div className="product-card-image">
                                <img src="./images/special-5.jpg" className="mb-1" alt="book"></img>
                            </div>
                            <div className="compare-product-details">
                                <h6 className="title"> Confident and proven path and approach to journaling that Kelsey used throughout his life and encourages me to continue and deepen the exploration inward to the farther depths of reality</h6>
                                <h5 className="price mb-2">$ 110</h5>
                            </div>
                            <div className="product-detail">
                                <h5>Availability</h5>
                                <p>24 hrs</p>
                            </div>
                            <div className="product-detail">
                                <h5>Author name</h5>
                                <p>Morton T.Kelsey</p>
                            </div>
                            <div className="product-detail">
                                <h5>Type</h5>
                                <p>Novel</p>
                            </div>
                            <div className="product-detail">
                                <h5>Rating</h5>
                                <p>4.8/5</p>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        </>
    );
}

export default CompareProduct ;