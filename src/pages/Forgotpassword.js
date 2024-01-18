import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Container from '../components/Container';

const Forgotpassword=()=>{
    return(
    <>
    <Meta title={"Forgot Password"} />;
    <BreadCrumb title="Forgot Password" />
    <Container class1="login-wrapper home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className="text-center">Reset Your Password</h3>
                    <p className="text-center my-2 mb-3">We will send you an email to reset your password</p>
                    <form action="" className="d-flex flex-column gap-15">
                        <CustomInput type="email" name="email" placeholder="email" className="mt-3" />
                        <div>
                            <div className="d-flex flex-column mt-3 justify-content-center gap-15 align-items-center">
                                <button className="button border-0 mt-1" type="submit">Submit</button>
                                <Link to="/login" className="text-decoration-none">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </Container>
    </>
    );
}

export default Forgotpassword;