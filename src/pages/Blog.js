import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import BlogCard from '../components/BlogCard';
import Container from '../components/Container';
const Blog=() =>{
    return (
        <>
         <Meta title={"Blogs"}/>
       <BreadCrumb title="Blogs" />
       <Container class1="blog-wrapper home-wrapper-2 py-5">
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
                </div>
                <div className="col-9">
                    <div className="row">
                    <div className="col-4 mb-3">
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
                    </div>
                </div>
            </div>
       </Container>
       </>
    );
}

export default Blog