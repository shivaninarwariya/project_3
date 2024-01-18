import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import {Helmet} from 'react-helmet';
import ReactStars from 'react-rating-stars-component';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import Container from '../components/Container';
import  homesinglei4 from  '../images/singlebookimg_13.jpg';
import homesinglei1 from '../images/singlebookimg_9.jpg';
const OurStore =()=>
{
    return (
       <>
       <Meta title={"Our Store"}/>
       <BreadCrumb title="Our Store" />
       <Container class1="store-wrapper home-wrapper-2 py-5">
       <div className="row">
                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-content">Shop By categories</h3>
                        <div>
                            <ul className="ps-0">
                                <li>Memories</li>
                                <li>Horror</li>
                                <li>Fictional</li>
                                <li>Romance</li>
                            </ul>
                        </div>
                    </div>
                    <div className="filter-card mb-3">
                    <h3 className="filter-content">Filter By Product</h3>
                    <div>
                    <h5 className="sub-title">Availability</h5>
                        <div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id=""></input>
                            <label class="form-check-label" for="">Out Of Stock</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id=""></input>
                            <label class="form-check-label" for="">Out Of Stock</label>
                        </div>
                        </div>
                        <h5 className="sub-title">Price</h5>
                        <div className="d-flex align-items-center gap-10">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label htmlFor="floatingInput">From</label>
                       </div>  
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                          <label htmlFor="floatingInput">To</label>
                       </div>
                        </div>
                        <h5 className="sub-title">Colors</h5>
                        <div>
                            <div>
                                <ul className="colors ps-0">
                                    <li className="bg-dark"></li>
                                    <li className="hex"></li>
                                    <li className="red"></li>
                                    <li className="bg-warning"></li>
                                    <li className="blue"></li>
                                    <li className="green"></li>
                                    <li className="maroon"></li>
                                    <li className="coral"></li>
                                    <li className="color1"></li>
                                </ul>
                            </div>
                        </div>
                        <h5 className="sub-title">Size</h5>
                        <div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id=""></input>
                            <label class="form-check-label" for="">Small(s)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id=""></input>
                            <label class="form-check-label" for="">Medium(M)</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id=""></input>
                            <label class="form-check-label" for="">Large(L)</label>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="filter-card mb-3">
                    <h3 className="filter-content">Product Brands</h3>
                    <div>
                        <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Amazon</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Flipkart</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Etsy</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Kindle</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">My Pushtak</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Snapdeal</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">BookChor</span>
                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">BookBazaar</span>
                        </div>
                    </div>
                    </div>
                    <div className="filter-card mb-3">
                    <h3 className="filter-content">Randome Product</h3>
                    <div>
                        <div className="random-product d-flex">
                            <div className="w-50 p-2">
                                <img src={homesinglei1} className="img-fluid" alt="book"></img>
                            </div>
                            <div className="w-50">
                                <h6>explores the root cause of anxiety, depression, guilt to help you heal</h6>
                                <ReactStars count={5} size={24} value={3} edit={false} activeColor="#ffd700" />
                                <p className="price">$100</p>
                            </div>
                        </div>
                        <div className="random-product d-flex">
                        <div className="w-50 p-2 mb-0">
                                <img src={homesinglei4} className="img-fluid" alt="book"></img>
                            </div>
                            <div className="w-50">
                                <h6> It explains a number of terms and processes involved in the performance of Hindustani classical vocal music.</h6>
                                <ReactStars count={5} size={24} value={4} edit={false} activeColor="#ffd700" />
                                <p className="price">$150</p>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-9">
                    <div className="filter-sort-grid">
                        <div className="d=flex justify-content-end align-items-center gap-10">
                            <p className="mb-0">Sort By:</p>
                            <select name="" className="form-control form-select" id="">
                                <option value="manual">Featured</option>
                                <option value="best-selling" selected="selected">Best Selling</option>
                                <option value="title-ascending">Alphabetically A-Z</option>
                                <option value="created-ascending">Price low to high</option>
                                <option value="created-descending">Price high to low</option>
                            </select>
                        </div>
                    </div>
                    <div className="p-2 d-flex">
                    <ProductCard imgsrc="./images/features-1.png"
                alterimg="./images/alternate-1.jpg"
                title="Joseph Michael Powell"
                descrip="This is a great book of wisdom written by Joseph Michael Powell to anyone.
                In this book, the 80-year-old man wants to share the many pearls of wisdom"
                price="$8.99 USD" />
                <ProductCard  imgsrc="./images/rama-1.jpg"
                alterimg="./images/rama-4.jpg"
                title="Valmiki"
                descrip="The Ramayana was composed in Sanskrit, probably not before 300 bce, by the poet Valmiki and
                 in its present form consists of some 24,000 couplets divided into seven books"
                price="$10 USD"/>
                <ProductCard  imgsrc="./images/rama-2.jpg"
                alterimg="./images/rama-3.jpg"
                title="Valmiki"
                descrip="Maharishi Valmiki was a legendary poet who is celebrated as the traditional author of the epic Ramayana"
                price="$9.9 USD" />
                <ProductCard  imgsrc="./images/col-1.jpg"
                alterimg="./images/col-2.jpg"
                title="Colleen Hoover"
                descrip="It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016.
                 Based on the relationship between her mother and father,"
                price="$20 USD" />
                    </div>
                </div>
            </div>
       </Container>
       </>
    );
}

export default OurStore;