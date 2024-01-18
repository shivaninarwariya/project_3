import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Container from '../components/Container';

const Signup=()=>{
    return(
        <>
    <Meta title={"Signup"} />;
    <BreadCrumb title="Signup" />
    <Container class1="login-wrapper home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className="text-center">Sign Up</h3>
                    <form action="" className="d-flex flex-column gap-15 mt-3">
                        <CustomInput className="mt-3" type="text" name="name" placeholder="First name" />
                        <CustomInput  type="text" name="name" placeholder="Last name" />
                        <CustomInput  type="email" name="email" placeholder="email" />
                        <CustomInput   type="password" name="password" placeholder="password" />
                        <div>
                            <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                                <button className="button" type="submit">Create</button>
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

export default Signup;