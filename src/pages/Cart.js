import React from 'react';
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';
import {AiFillDelete} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Container from '../components/Container';
const Cart=()=>{
    return (
        <>
    <Meta title={"Cart"} />;
    <BreadCrumb title="Cart" />
    <Container class1="cart-wrapper home-wrapper-2 py-5">
    <div className="row">
                <div className="col-12">
                    <div className="cart-header d-flex justify-content-between align-items-center">
                       <h4 className="cart-col-1">Product</h4>
                       <h4 className="cart-col-2">Price</h4>
                       <h4 className="cart-col-3">Quantity</h4>
                       <h4 className="cart-col-4">Total</h4>
                    </div>
                    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                       <div className="cart-col-1 d-flex align-items-center">
                        <div className="w-35">
                        <img src="./images/col-1.jpg" alt="col"></img>
                        </div>
                        <div className="w-65 mx-2">
                           <p>Colleen Hoover</p>
                           <p>$100</p>
                           <p>Book name: It ends with us</p>
                        </div>
                       </div>
                       <div className="cart-col-2">
                        <h5 className="price">$ 100</h5>
                       </div>
                       <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                            <input className="form-control" type="number"
                            placeholder="" name="" id="" min={1} max={10} />
                        </div>
                        <div>
                            <AiFillDelete className="text-danger" />
                        </div>
                       </div>
                       <div className="cart-col-4">
                       <h5 className="price">$ 100</h5>
                       </div>
                    </div>
                    <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                       <div className="cart-col-1 d-flex align-items-center">
                        <div className="w-35">
                        <img src="./images/rama-2.jpg" alt="col"></img>
                        </div>
                        <div className="w-65 mx-2 text-dark">
                           <p>Valmiki</p>
                           <p>$100</p>
                           <p>Book Name: Ramayan</p>
                        </div>
                       </div>
                       <div className="cart-col-2">
                        <h5 className="price">$ 100</h5>
                       </div>
                       <div className="cart-col-3 d-flex align-items-center gap-15">
                        <div>
                            <input className="form-control" type="number"
                            placeholder="" name="" id="" min={1} max={10} />
                        </div>
                        <div>
                            <AiFillDelete className="text-danger" />
                        </div>
                       </div>
                       <div className="cart-col-4">
                       <h5 className="price">$ 100</h5>
                       </div>
                    </div>
                </div>
                <div className="col-12 py-2 mt-4">
                    <div classNmae="d=flex justify-content-between">
                    <Link to="/" className="button text-decoration-none">Continue to Shopping</Link>
                    <div className="d-flex flex-column align-items-end">
                        <h4>Subtotal : $ 1000</h4>
                        <p>Taxes and Shipping calculated at checkout</p>
                        <Link to="/checkout" className="button text-decoration-none">Checkout</Link>
                    </div>
                    </div>
                </div>
            </div>
    </Container>
     </>
    );
}
export default Cart;