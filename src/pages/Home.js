import React from 'react';
import {Link} from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import {services} from '../utils/Data';
import homeimage from '../images/sideimg_4.webp';
import homeimage1 from '../images/sideimage.jpg';
import homeimage2 from '../images/sideimage_1.jpg';
import homeimage3 from '../images/sideimage_5.png';
import homeimage4 from '../images/sideimage_4.jpg';
import homesingle1 from '../images/singlebookimgi_2.jpg';
import homesingle2 from '../images/singlebookimgi_3.jpg';
import homesingle3 from '../images/singlebookimgi_4.jpg';
import homesingle4 from '../images/singlebookimgi_5.jpg';
import homesingle5 from '../images/singlebookimgi_1.jpg';
import homesingle6 from '../images/singlebookimgi_6.jpg';
import homesingle7 from '../images/singlebookimgi_7.webp';
import homesingle8 from '../images/singlebookimgi_8.jpg';
import homesinglei1 from '../images/singlebookimg_9.jpg';
import homesinglei2 from '../images/singlebookimg_11.jpg';
import homesinglei3 from '../images/singlebookimg_8.jpg';
import homesinglei4 from '../images/singlebookimg_13.jpg';
import brand1 from '../images/brand-01.png';
import brand2 from '../images/brand-02.png';
import brand3 from '../images/brand-03.png';
import brand4 from '../images/brand-04.png';
import brand5 from '../images/brand-05.png';
import brand6 from '../images/brand-06.png';
import brand7 from '../images/brand.07.png';
import brand8 from '../images/brand-08.png';
const Home=() =>{
    return(
        <>
        <Container class1="home-wrapper-1 py-5">
        <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative p-3">
                            <img src={homeimage} className="img-fluid rounded-3" alt="mainbanner" ></img>
                            <div className="main-banner-content position-absolute">
                                <h4>books is a Love</h4>
                                <h5>Sometimes All you <br />need is one Book</h5>
                                <p></p>
                                <Link className="button text-decoration-none text-white">BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap gap-2 justify-content-between align-items-center">
                        <div className="small-banner-content position-relative">
                            <img src={homeimage1} className="img-fluid rounded-3" alt="mainbanner" ></img>
                        </div>
                        <div className="small-banner-content position-relative p-2">
                            <img src={homeimage2} className="img-fluid rounded-3" alt="mainbanner" ></img>
                        </div>
                        <div className="small-banner-content position-relative ">
                            <img src={homeimage3} className="img-fluid rounded-3" alt="mainbanner" ></img>
                        </div>
                        <div className="small-banner-content position-relative p-2">
                            <img src={homeimage4} className="img-fluid rounded-3" alt="mainbanner" ></img>
                        </div>   
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1="home-wrapper-2 py-5">
        <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {
                                services?.map((i,j)=>{
                                   return (
                                    <div className="d-flex align-items-center gap-2" key={j}>
                                    <img src={i.image} alt="services"></img>
                                    <div>
                                        <h6>{i.title}</h6>
                                        <p className="mb-0">{i.tagline}<br /> payments</p>
                                    </div>
                                       </div>
                                   );
                                })
                            }
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1="home-wrapper-2 py-5">
        <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex align-items-center flex-wrap justify-content-between">
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Career build Books</h6>
                                    <p>1000 books</p>
                                </div>
                                <img src={homesingle1} alt="book_1"></img>
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Story telling Books</h6>
                                    <p>400 books</p>
                                </div>
                                <img src={homesingle2} alt="book_1"></img>
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Self Growth Books</h6>
                                    <p>200 books</p>
                                </div>
                                <img src={homesingle3} alt="book_1"></img>
                            </div>
                            <div className="d-flex gap-30 align-items-center">
                                <div>
                                    <h6>Fictional Books</h6>
                                    <p>100 books</p>
                                </div>
                                <img src={homesingle4} alt="book_1"></img>
                            </div>
                            <div className="d-flex gap-30 pt-4 align-items-center">
                                <div>
                                    <h6>Success build Books</h6>
                                    <p>700 books</p>
                                </div>
                                <img src={homesingle5} alt="book_1"></img>
                            </div>
                            <div className="d-flex gap-30 pt-4 align-items-center">
                                <div>
                                    <h6>Women Empowerment</h6>
                                    <p>550 books</p>
                                </div>
                                <img src={homesingle6} alt="book_1"></img>
                            </div>
                            <div className="d-flex gap-30 pt-4 align-items-center">
                                <div>
                                    <h6>Successful Writers Books</h6>
                                    <p>2000 books</p>
                                </div>
                                <img src={homesingle7} alt="book_1"></img>
                            </div>
                            <div className="d-flex gap-30 pt-4 align-items-center">
                                <div>
                                    <h6>Study Material Books</h6>
                                    <p>1009 books</p>
                                </div>
                                <img src={homesingle8} alt="book_1"></img>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Features Collection</h3>
                </div>
                <ProductCard imgsrc="./images/alternate-1.jpg"
                alterimg="./images/features-1.png"
                title="Joseph Michael Powell"
                descrip="This is a great book of wisdom written by Joseph Michael Powell to anyone.
                In this book, the 80-year-old man wants to share the many pearls of wisdom"
                price="$8.99 USD" />
                <ProductCard  imgsrc="./images/rama-4.jpg"
                alterimg="./images/rama-2.jpg"
                title="Valmiki"
                descrip="The Ramayana was composed in Sanskrit, probably not before 300 bce, by the poet Valmiki and
                 in its present form consists of some 24,000 couplets divided into seven books"
                price="$10 USD"/>
                <ProductCard  imgsrc="./images/rama-3.jpg"
                alterimg="./images/rama-1.jpg"
                title="Valmiki"
                descrip="Maharishi Valmiki was a legendary poet who is celebrated as the traditional author of the epic Ramayana"
                price="$9.9 USD" />
                <ProductCard  imgsrc="./images/col-2.jpg"
                alterimg="./images/col-1.jpg"
                title="Colleen Hoover"
                descrip="It Ends with Us is a romance novel by Colleen Hoover, published by Atria Books on August 2, 2016.
                 Based on the relationship between her mother and father,"
                price="$20 USD" />
            </div>
        </Container>
        <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
                    <div className="col-3 d-flex justify-content-between">
                        <div className="famous-card">
                            <img src={homesinglei1}  className="gap-5 margin-auto p-2"alt="sideimg"></img>
                            <div className="famous-content">
                            <h2 className=" p-2">N.J Fenttiman</h2>
                            <p className=" p-1">A children’s story that can only be enjoyed by children is not a good children’s story in the slightest.</p>
                            </div>
                        </div>
                        <div className="famous-card">
                            <img src={homesinglei2}  className="gap-5 margin-auto p-2"alt="sideimg"></img>
                            <div className="famous-content">
                            <h2 className=" p-2">Joseph Murphy</h2>
                            <p className=" p-1">You will learn most things by looking, but reading gives understanding. Reading will make you free. </p>
                            </div>
                        </div>
                        <div className="famous-card">
                            <img src={homesinglei3} className="gap-5 margin-auto p-2"alt="sideimg"></img>
                            <div className="famous-content">
                            <h2 className=" p-2">Chris Bailey</h2>
                            <p className=" p-1">What I love most about reading: It gives you the ability to reach higher ground. And keep climbing. </p>
                            </div>
                        </div>
                        <div className="famous-card">
                            <img src={homesinglei4}  className="gap-5 margin-auto p-2"alt="sideimg"></img>
                            <div className="famous-content">
                            <h2 className=" p-2">K.J Yesudas</h2>
                            <p className=" p-1">The more that you read, the more things you will know. The more that you learn, the more places you’ll go </p>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
                <div className="col-12">
                    <h3 cleassName="section-heading">Special Products</h3>
                </div>
            </div>
            <div className="row">
               <SpecialProduct imgsrc="./images/singlebookimg_5.jpg"
                  titl="The Happiness Of Pursuit"
                  des="embarking on a quest to fill your life with a sense of purpose."
                  pric="$80" />
               <SpecialProduct imgsrc="./images/special-1.jpg"
                titl="The Covenant of water"
                des="The novel tells the story of three generations of an Indian Christian family living."
                pric="$9.24" />
               <SpecialProduct imgsrc="./images/special-5.jpg" 
                titl="Adventure Inward"
                des="Through the recording of thoughts, dreams, questions, and experiences."
                pric="$20"/>
               <SpecialProduct imgsrc="./images/special-4.jpg"
                titl="Magic and monsters"
                des="Fantasy and horror merge in this cross-genre collection explores the monsters ."
                pric="$40" />
            </div>
        </Container>
        <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Our Popular Product</h3>
                </div>
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
        </Container>
        <Container class1="marque-wrapper py-5">
        <div className="row">
                    <div className="col-12">
                        <div className="marque-inner-wrapper card-wrapper">
                          <Marquee className="d-flex">
                            <div className="mx-4 w-25">
                                <img src={brand1} alt="brands"></img>
                            </div>
                            <div className="mx-4 w-25">
                                <img src={brand8} alt="brands"></img>
                            </div>
                            <div className="mx-4 w-25">
                                <img src={brand2} alt="brands"></img>
                            </div>
                            <div className="mx-4 w-25">
                                <img src={brand3} alt="brands"></img>
                            </div>
                            <div className="mx-4 w-25">
                                <img src={brand4} alt="brands"></img>
                            </div>
                            <div className="mx-4 w-25">
                                <img src={brand5} alt="brands"></img>
                            </div>
                            <div className="mx-4 w-25">
                                <img src={brand6} alt="brands"></img>
                            </div>
                            <div className="mx-4 w-25">
                                <img src={brand7} alt="brands"></img>
                            </div>
                          </Marquee>
                        </div>
                    </div>
                </div>
        </Container>
        <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
                <div className="col-12">
                    <h3 className="section-heading">Our Latest Blogs</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-3">
                <BlogCard imgsrc="./images/footerimg_1.png"
                dat="1 jan 2024"
                msg="A beautiful sunday morning renaissance"
                descr=" A book is a gift you can open again and again" />
                </div>
                <div className="col-3">
                <BlogCard imgsrc="./images/footerimg_4.png"
                dat="10 jan 2024"
                msg="Books are important for the mind, heart, and soul"
                descr="To learn to read is to light a fire; every syllable that is spelled out is a spark." />
                </div>
                <div className="col-3">
                <BlogCard imgsrc="./images/footerimg_2.png"
                dat="12 jan 2024"
                msg="Today a reader, tomorrow a leader."
                descr="Only a generation of readers will spawn a generation of writers." />
                </div>
                <div className="col-3">
                <BlogCard imgsrc="./images/footerimg_3.png"
                dat="21 jan 2024"
                msg="A word after a word after a word is power"
                descr="Reading is to the mind what exercise is to the body." />
                </div>
            </div>
        </Container>
        </>
    );
};

export default Home;