import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import CustomInput from '../components/CustomInput';
import Container from '../components/Container';

const Resetpassword=()=>{
    return(
        <>
    <Meta title={"Reset Password"} />;
    <BreadCrumb title="Reset Password" />
    <Container class1="login-wrapper home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className="text-center">Reset Password</h3>
                    <form action="" className="d-flex flex-column gap-15">
                       <CustomInput className="mt-3" type="password" name="password" placeholder="password"/>
                       <CustomInput className="mt-2" type="password" name="password" placeholder="Confirm password"/>
                        <div>
                            <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                                <button className="button" type="submit">Submit</button>
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

export default Resetpassword;