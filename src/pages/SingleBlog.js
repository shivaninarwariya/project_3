import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import {HiOutlineArrowLeft} from 'react-icons/hi';
import Container from '../components/Container';
import footerimage1 from '../images/footerimg_2.avif';
const SingleBlog=()=>{
    return (
        <>
     <Meta title={"Dynamic Blog"} />;
    <BreadCrumb title="Dynamic Blog" />
    <Container class1="blog-wrapper home-wrapper-2 py-5">
    <div className="row">
                <div className="col-12">
                    <div className="single-blog-card">
                        <Link to="/blogs" className="d-flex align-items-center gap-10"><HiOutlineArrowLeft />Go back to Blogs</Link>
                    <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
                    <img src={footerimage1} alt="footer" className="img-fluid w-100 my-4"></img>
                    <p>Books are also read for pleasure and fun. There are many different genres
                     of books. There are two categories to which books may belong – fiction and non-fiction. People read books according to their need, requirement or preference, Books are our real friends, and time spent on reading is time well spent.</p>
                    </div>
                </div>
            </div>
    </Container>
        </>
    );
}

export default SingleBlog;