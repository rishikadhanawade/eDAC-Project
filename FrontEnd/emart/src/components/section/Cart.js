import React, { Component } from 'react'
import { DataContext } from '../Context'
import { Link } from 'react-router-dom'
import '../css/Details.css'
import '../css/Cart.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import "react-bootstrap/dist/react-bootstrap.min.js";
import Figure from 'react-bootstrap/Figure'
import '../css/Products.css'

export class Cart extends Component {
    static contextType = DataContext;

    componentDidMount() {
        this.context.getTotal();
    }

    updatecart = (c) => {
        const { cart, increase, reduction, removeProduct, total, product, count, Dely, Discount,Customer } = this.context;
        console.log(cart);
        const k=JSON.parse(localStorage.getItem('currentCust'));
        console.log(k.custid);
        
        if (cart.length != 0) {

            cart.forEach(item => {
                let Crt = {
                    "custid": k.custid,
                    "deliveryCharge": Dely,
                    "productID": item.prodID,
                    "qty": item.qty,
                    "totalBill": (item.mrpPrice),
                    "totalDiscount": Discount,
                    "totalItemCost": item.mrpPrice,
                };
                let demo = JSON.stringify(Crt);
                console.log(demo);
                fetch("http://localhost:8080/eMart/Cart/AddItem", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo

                });
                fetch("http://localhost:8080/eMart/Invoice/AddData", {
                    method: 'POST',
                    headers: { 'Content-type': 'application/json' },
                    body: demo
                });
                this.props.history.push(`/payment/${k.custid}`);
            })

        }
            else{}
            c.preventDefault();
     }

    render() {
        const { cart, increase, reduction, removeProduct, total, product, count, Dely, Discount } = this.context;
        if (cart.length === 0) {
            return <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-12 align-self-center">
                        <h5>Cart</h5>
                    </div>
                    <div className="col-sm-12 empty-cart-cls text-center"> <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" />
                        <h3><strong>Your Cart is Empty.</strong></h3>
                        <h4>Add something to make me happy :)</h4> <a href="/" className="btn btn-primary cart-btn-transform m-3" data-abc="true">Continue Shopping</a>
                    </div>
                </div>
            </div>


        } else {
            return (
                <>
                    {
                        cart.map(item => (
                            <Container className="details cart" key={item.productID} >
                                <Row >
                                    <Col md={4}>
                                        <Figure >
                                            <Figure.Image className="shadow p-3 mb-5 bg-white rounded border border-light"
                                                src={item.productImagePath} alt="" />
                                        </Figure>
                                    </Col>
                                    <Col md={7}>

                                        <div>
                                            <h2>{item.prodName}</h2>
                                        </div>


                                        <span STYLE="font-size:25px">Price:  ₹ {item.mrpPrice * item.qty}</span>

                                        <br></br>


                                        <p STYLE="font-size:18px">{item.prodShortDesc}</p>

                                        <div className="amount align"><button className="count" onClick={() => reduction(item.prodID)}> - </button>
                                            <span>{item.qty}</span>
                                            <button className="count" onClick={() => increase(item.prodID)}> + </button></div>



                                    </Col>
                                    <Col md={1} className="text-center" >
                                        <br />
                                        <Button variant="danger" onClick={() => removeProduct(item.prodID)}> Remove </Button>
                                    </Col>
                                </Row>

                            </Container>



                        ))
                    }

                    <hr />
                    <Container>
                        <Row>
                            <Col> <div className="details total">
                                <Button onClick={this.updatecart}> Check Out! </Button>
                                {/* <Button on><Link to="/payment">Payment</Link></Button> */}
                            </div>
                            </Col>

                            <Col>
                                {/* <p STYLE="font-size:18px">
                                    Discount : ₹ {Discount}
                                </p>
                                <p STYLE="font-size:18px">
                                    Delivery Charges : ₹ {Dely}

                                </p> */}
                                <h3>Total Amount:  ₹ {total}</h3>


                            </Col>
                        </Row>
                    </Container>


                </>
            )
        }
    }
}

export default Cart
