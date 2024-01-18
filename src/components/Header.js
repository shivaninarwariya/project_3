import React from 'react';
import {NavLink ,Link} from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.css';
const Header=()=>{
    return (
     <>
    <header className="header-top-strip py-3">
        <div className="container-xxl">
            <div className="row align-item-center">
                <div classNamw="col-6">
                    <p className="text-white mb-0">Free Shipping Over $100 & Free Returns</p>
                </div>
                <div classNamw="col-6">
                    <p className="text-end text-white mb-0">Hotline:<a className="text-white"href="tel: +70000680670">7000680670</a></p>
                </div>
            </div>
        </div>
    </header>
    <header className="header-upper py-3">
        <div className="container-xxl">
            <div className="row align-item-center">
                <div className="col-2">
                    <h2><Link className="text-white text-decoration-none">Elite Editions.</Link></h2>
                </div>
                <div className="col-5">
                <div class="input-group ">
                 <input type="text" class="form-control py-3" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2"><BsSearch className="" /></span>
                </div>
                </div>
                <div className="col-5">
                 <div className="header-upper-links d-flex align-items-center justify-content-between">
                    <div>
                      <Link to="/compare-product" className="text-decoration-none">
                      <p className="mb-0 text-white">Compare<br />Product</p>
                      </Link>  
                    </div>
                    <div>
                    <Link to="/wishlist" className="text-decoration-none">
                      <p className="mb-0 text-white">Wishlist<br />Product</p>
                      </Link> 
                    </div>
                    <div>
                    <Link to="/login" className="text-decoration-none">
                      <p className="mb-0 text-white">Login<br />Your Account</p>
                      </Link> 
                    </div>
                    <div>
                    <Link to="/cart" className="text-decoration-none">
                      <p className="mb-0 text-white">Add<br />to cart</p>
                      </Link> 
                    </div>
                 </div>
                </div>
            </div>
        </div>
    </header>
    <header className="header-bottom py-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="menu-bottom d-flex laign-items-center">
                        <div>
                        <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle bg-transparent border-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Show categories
                       </button>
                       <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                       <li><Link className="dropdown-item text-white" to="#">Action </Link></li>
                        <li><Link className="dropdown-item text-white" to="#">Another action</Link></li>
                      <li><Link className="dropdown-item text-white" to="#">Something else here</Link></li>
                    </ul>
                </div>
                        </div>
                        <div className="menu-links">
                            <div className="d-flex align-items-center gap-15">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/store">Our Store</NavLink>
                                <NavLink to="/blogs">Blogs</NavLink>
                                <NavLink to="/contact">Contanct</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
    );
};

export default Header;