import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi';
import Container from '../components/Container';
const Checkout =()=>{
    return (
        <>
    <Meta title={"Checkout"} />;
    <BreadCrumb title="Checkout" /> 
    <Container class1="checkout-wrappper home-wrapper-2 py-5">
    <div className="row">
                <div className="col-7">
                  <div className="checkout-left-data">
                    <h3 className="wesite-name">Elite Editions</h3>
                    <nav style={{"--bs-breadcrumb-divider": ">"}} aria-label="breadcrumb">
                       <ol class="breadcrumb">
                           <li class="breadcrumb-item"><Link className="text-decoration-none text-dark" to="#">Cart</Link></li>
                           &nbsp; /
                            <li class="breadcrumb-item active" aria-current="page">Information</li>
                            &nbsp; /
                            <li class="breadcrumb-item"><Link className="text-decoration-none text-dark" to="#">Shipping</Link></li>
                           &nbsp; /
                            <li class="breadcrumb-item active" aria-current="page">Payment</li>
                       </ol>
                   </nav>
                   <h4>Contact Information</h4>
                   <p className="user-details">abczzy@gmail.com</p>
                   <h5>Logout</h5>
                   <form action="" className="d-flex flex-wrap  justify-content-between gap-15">
                       <div className="w-100">
                        <select name="" className="form-control form-select" id="">
                            <option value="" selected disabled>Select Country</option>
                        </select>
                       </div>
                       <div className="flex-grow-1">
                        <input type="text" placeholder="first name" className="form-control" />
                       </div>
                       <div className="flex-grow-1">
                        <input type="text" placeholder="last name" className="form-control" />
                       </div>
                       <div className="w-100">
                        <input type="text"  placeholder="Address" className="form-control" />
                       </div>
                       <div className="w-100">
                        <input type="text" placeholder="Apartment, suite etc" className="form-control" />
                       </div>
                       <div className="flex-grow-1">
                        <input type="text" placeholder="zip code" className="form-control" />
                       </div>
                       <div className="flex-grow-1">
                       <select name="" className="form-control form-select" id="">
                       <option value="" selected disabled>Select State</option>
                       </select>
                       </div>
                       <div>
                       <input type="text" placeholder="city" className="form-control" />
                       </div>
                       <div className="w-100">
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to="/cart" className="text-decoration-none text-dark"><BiArrowBack className="mx-2"/>Return to cart</Link>
                            <Link to="" className="button text-decoration-none">Continue Shipping</Link>
                        </div>
                       </div>
                   </form>
                  </div>
                </div>
                <div className="col-5">
                    <div className="border-bottom py-4">
                        <div className="d-flex gap-15 align-items-center">
                        <div className="w-75md-flex gap-10">
                            <div><img className="img-fluid mx-20" src="images/singlebookimgi_3.jpg" alt=""></img></div>
                        </div>
                        <div className="flex-grow-1">
                            <h5>$ 100</h5>
                        </div>
                        </div>
                    </div>
                    <div className="border-bottom py-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Sub Total</p>
                        <p>$ 1000</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Shipping</p>
                        <p className="mb-0">$ 1000</p>
                    </div>
                    </div>
                    <div className="d-flex justify-content-between align-navs-center border-bottom py-4">
                        <h4>Total</h4>
                        <h5>$ 1000</h5>
                    </div>
                </div>
            </div>
    </Container>
        </>
    );
}

export default Checkout;