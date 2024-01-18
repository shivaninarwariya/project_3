import React from 'react';
import {BsSearch} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import {BsLinkedin,BsGithub,BsYoutube,BsInstagram} from 'react-icons/bs';
import Container from '../components/Container';
const Footer=() =>{
    return (
    <>
    <footer className="py-4">
        <div className="container-xxl">
            <div className="row align-items-center">
                <div className="col-5">
                    <div className="footer-top-data d-flex gap-30 align-items-center">
                        <h2 className="mb-0 text-white">Sign up for Newsletter</h2>
                    </div>
                </div>
                <div className="col-7">
                <div class="input-group ">
                 <input type="text" class="form-control py-2" placeholder="Your email address" aria-label="Your email address" aria-describedby="basic-addon2" />
                    <span class="input-group-text" id="basic-addon2">Subscribe</span>
                </div>
                </div>
            </div>
        </div>
    </footer>
    <footer className="py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-4">
                    <h4 className="text-white mb-4">Contact us</h4>
                    <div>
                        <address className="text-white">Hno :23 Near Maata Mandir,<br /> MANIT chauraha Bhopal<br />Pincode:462003</address>
                        <a href="tel: +91 7000680670" className="mt-3 d-block mb-2 text-decoration-none text-white">+91 7000680670</a>
                        <a href="mailto:shivani.rajpoot1404@gmail.com" className="mt-3 d-block mb-2 text-decoration-none text-white">shivani.rajpoot1404@gmail.com</a>
                        <div className="social-icons d-flex align-items-center gap-40 padding-10 margin-auto">
                            <a href="#"><span className="p-2 mt-2"><BsLinkedin className="text-white fs-4" /></span></a>
                            <a href="#"><span className="p-2 mt-2"><BsInstagram className="text-white fs-4" /></span></a>
                            <a href="#"><span className="p-2 mt-2"><BsGithub className="text-white fs-4" /></span></a>
                            <a href="#"><span className="p-2 mt-2"><BsYoutube className="text-white fs-4" /></span></a>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                <h4 className="text-white mb-4">Information</h4>
                <div className="footer-links d-flex flex-column">
                        <Link className="text-decoration-none text-white py-2 mb-1">Privacy Policy</Link>
                        <Link className="text-decoration-none text-white py-2 mb-1">Refund Policy</Link>
                        <Link className="text-decoration-none text-white py-2 mb-1">Shipping Policy</Link>
                        <Link className="text-decoration-none text-white py-2 mb-1">Terms of Service</Link>
                    </div>
                </div>
                <div className="col-3">
                <h4 className="text-white mb-4">Accounts</h4>
                <div className="footer-links d-flex flex-column">
                        <Link className="text-decoration-none text-white py-2 mb-1">About Us</Link>
                        <Link className="text-decoration-none text-white py-2 mb-1">FaQ</Link>
                        <Link className="text-decoration-none text-white py-2 mb-1">Contact</Link>
                        <Link className="text-decoration-none text-white py-2 mb-1">Books</Link>
                    </div>
                </div>
                <div className="col-2">
                <h4 className="text-white mb-4">Quick Links</h4>
                    <div className="footer-links">
                        <Link className="text-decoration-none text-white py-2 mb-1">Motivational speaker</Link>
                        <Link className="text-decoration-none text-white py-2 mb-1">Rom-com Books</Link>
                        <Link className="text-decoration-none text-white py-2 mb-1">Horror Books</Link>
                        <Link className="text-decoration-none text-white py-2 mb-1">Fictional Books</Link>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <footer className="py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <p className="text-center mb-0 text-white">&copy: {new Date().getFullYear()}; Powered by Developers</p>
                </div>
            </div>
        </div>
    </footer>
  </>
    );
};

export default Footer;