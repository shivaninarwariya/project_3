import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {AiOutlineHome, AiOutlineMail} from 'react-icons/ai';
import {BiPhoneCall, BiInfoCircle} from 'react-icons/bi';
import Container from '../components/Container';
import sideimage1 from '../images/sideimg_2.jpg';
import sideimage2 from '../images/sideimage_3.jpg';
const Contact=()=>{
    return (
        <>
           <Meta title={"contact Us"}/>
       <BreadCrumb title="Contact Us" />
       <div className="d-flex p-3 align-items-between">
        <img src={sideimage1} className=" px-3 mt-0"alt="back"></img>
        <img src={sideimage2} className=" px-3  mt-0"alt="back"></img>
        <ul className="listing">
        <li>Books are a uniquely portable magic.</li>
        <li>Books are mirrors: You only see in them what you already have inside you.</li>
        <li>Three can keep a secret, if two of them are dead.</li>
        <li>A book is a garden, an orchard, a storehouse, a party, a company by the way, a counselor, a multitude of counselors.</li>
        <li>Books are mirrors: You only see in them what you already have inside you.</li>
        <li>Books and doors are the same thing. You open them, and you go through into another world.</li>
        <li>Read a lot. Expect something big, something exalting or deepening from a book. No book is worth reading that isn't worth re-reading.</li>
        <li>Books have a unique way of stopping time in a particular moment and saying: Let's not forget this.</li>
        </ul>
       </div>
       <Container class1="contact-wrapper py-5 home-wrapper-2">
       <div className="row">
                <div className="col-12">
                    <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14497.761384017644!2d78.12777039498067!3d24.711758341189903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3979918b9ac9c1c1%3A0x6ad66abbe3ddb9fb!2sChanderi%2C%20Madhya%20Pradesh%20473446!5e0!3m2!1sen!2sin!4v1703357690934!5m2!1sen!2sin" 
                    width="600" height="450" className="border-0 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>"
                </div>
                <div className="col-12 mt-5">
                 <div className="contact-inner-wrapper d-flex justify-content-between">
                   <div>
                    <h3 className="contact-title">Contact</h3>
                    <form action="" className="d-flex flex-column gap-15">
                        <div>
                        <input type="text" placeholder="Name" className="form-control" />
                        </div>
                        <div>
                        <input type="email" placeholder="Email" className="form-control" />
                        </div>
                        <div>
                        <input type="tel" placeholder="Mobile Number" className="form-control" />
                        </div>
                        <div>
                        <textarea name="text" id="Name" cols="30" rows="10" className="w-100 form-control" placeholder="comments" />
                        </div>
                        <div>
                            <button className="button">Submit</button>
                        </div>
                    </form>
                   </div>
                   <div>
                    <h3 className="contact-title">Get in touch with Us</h3>
                    <div>
                        <ul className="ps-0">
                        <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineHome className="fs-5" />
                        <address className="mb-0">H-12 Nivedita Bhavan MANIT Bhopal Madhya Pradesh</address></li>
                        <li className="mb-3 d-flex gap-15 align-items-center"><BiPhoneCall className="fs-5" />
                        <a href="tel:+91 7000680670" className="text-decoration-none" >91 7000680670</a></li>
                        <li className="mb-3 d-flex gap-15 align-items-center"><AiOutlineMail className="fs-5" />
                        <a href="mailto:shivani.rajpoot1404@gmail.com" className="text-decoration-none">shivani.rajpoot1404@gmail.com</a></li>
                        <li className="mb-3 d-flex gap-15 align-items-center"><BiInfoCircle className="fs-5" />
                        <p className="mb-0">Monday-Friday 10AM-8PM</p></li>
                        </ul>
                    </div>
                   </div>
                 </div>
                </div>
            </div>
       </Container>
        </>
    );
};
export default Contact;