import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {Link} from 'react-router-dom';
import CustomInput from '../components/CustomInput';
import Container from '../components/Container';

const Login=()=>{
    return (
    <>
    <Meta title={"Login"} />;
    <BreadCrumb title="Login" />
    <Container class1="login-wrapper home-wrapper-2 py-5">
    <div className="row">
            <div className="col-12">
                <div className="auth-card">
                    <h3 className="text-center">Login</h3>
                    <form action="" className="d-flex flex-column gap-15">
                    <CustomInput className="mt-3" type="email" name="email" placeholder="email" />
                    <CustomInput className="mt-2"  type="password" name="password" placeholder="password" />
                        <div>
                            <Link to="/forgot-password" className="text-decoration-none">Forgot Password ?</Link>
                            <div className="d-flex mt-3 justify-content-center gap-15 align-items-center">
                                <button className="button" type="submit">Login</button>
                                <Link to="/signup" className="text-decoration-none button signup">Sign Up</Link>
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

export default Login;