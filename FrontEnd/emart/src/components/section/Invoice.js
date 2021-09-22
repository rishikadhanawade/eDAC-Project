/* eslint-disable no-lone-blocks */
import React from 'react'
//import '../css/Form.css';
import '../css/About.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container } from 'react-bootstrap';
import Home from '../svg/emartHome.svg'
import { DataContext } from '../Context'

class Invoice extends React.Component {

    constructor(props) {
        super(props);
        this.state = { invoice: [], a: [], Razorpay: "", amount: "" ,bill:""};
        this.changeAmount = this.changeAmount.bind(this);
        this.openCheckout = this.openCheckout.bind(this);
    }
    static contextType = DataContext;
    async componentDidMount() {
        if (this.state.invoice.length === 0) {
            console.log(this.props.match.params.id);
            const response = await fetch("http://localhost:8080/eMart/Product/prodInvoice");
            const res = await response.json();
            this.setState({ invoice: res,  bill: Math.floor((Math.random()+1)*10000) });

        }
        else { }
        this.forceUpdate();
        //  window.location.reload();

    }
    openCheckout() {
        const { cart, total, Customer, onDel, totalpts } = this.context;
        const k = JSON.parse(localStorage.getItem('currentCust'));
        let options = {
            "key": "rzp_test_aHX85lJ0TCIbIC",
            "amount": total * 100, // 2000 paise = INR 20, amount in paisa
            "name": "eMart",
            "description": "",
            // "image": "/your_logo.png",
            "handler": function (response) {
                alert("Payment Successful");
                return true;
            },
            "prefill": {
                "name": k.cust_Name,
                "email": k.cust_Email_ID
            },
            "notes": {
                "address": k.cust_Address
            },
            "theme": {
                "color": "#F37254"
            }
        };

        let rzp = new window.Razorpay(options);
        console.log("Value of rpz: " + rzp);
        console.log("Value of rpz open:" + rzp.open());

        // if(this.options.handler===true){
        //     this.props.history.push("/");
        // }
        // window.location.href='/';  

    }


    changeAmount(e) {
        this.setState({ amount: e.target.value })
    }

    async componentWillMount() {
        const response = await fetch("http://localhost:8080/eMart/Product/totalpts");
        const res = await response.json();
        this.setState({ a: res });
        //console.log(arr);
    }
    componentDidUpdate() {
        console.log(this.state.a);
    }
    home = (e) => {
        this.props.history.push("/");
    }
    render() {
        let invoiceOrderID = 0;
        const { cart, total, Customer, onDel, totalpts, removeProduct } = this.context;
        const k = JSON.parse(localStorage.getItem('currentCust'));
        console.log(k.custid);
        return (
            <Container className="py-3 " style={{ border: '1px solid #000000' }}>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-2">
                                <img width="100" src={Home} alt="emart" />
                            </div>
                            <div className="col-7">
                                ContactUs: 8888-0088-00 ||  cs@emart.com
                            </div>
                            <div style={{ textAlign: 'right' }, { border: '2px dashed black' }} className="col-3">
                                Tax Invoice #B Y2021-E{this.state.bill}
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="container">
                        <div className="row">
                            <div className="col-4"><h4><p> Name: </p><small>{k.cust_Name}</small> </h4></div>
                            <div className="col-4"><h4><p>Billing Address:</p> <small>{k.cust_Address}</small> </h4></div>
                            <div className="col-4"><h4>Shipping Address:</h4>
                            <textarea rows="4" cols="40" placeholder=" Enter Address"></textarea>
                            </div>
                            {/* <div className="w-100"></div> */}
                            
                            <br /><br /><br /><br />

                        </div>
                    </div>
                    <hr />
                    <br />
                    {/* <table class="table table-hover " style={{ border: '1px solid #000000' }}> */}
                    <table class="table table-secondary table-hover">
                        <thead>
                            <tr style={{ textAlign: 'center' }}>
                                <th scope="col">Serial No.</th>
                                {/* <th scope="col">CustomerId</th> */}
                                <th scope="col">Product Name</th>
                                <th scope="col">Qty</th>
                                <th scope="col">ListPrice</th>
                                <th scope="col">eMcard Price</th>
                                {/* <th scope="col">Amount</th> */}
                                <th scope="col">Remove</th>
                            </tr>
                        </thead>
                        <tbody style={{ textAlign: 'center' }}>
                            {
                                cart.map(val => (

                                    <tr>
                                        <th scope="row">{++invoiceOrderID}</th>
                                        {/* <td>{k.custid}</td> */}
                                        <td>{val.prodName}</td>
                                        <td>{val.qty}</td>
                                        <td>{val.mrpPrice}</td>
                                        <td>{val.cardholdersPrice}</td>
                                        {/* <td>{val.invoice[0].totalBill}</td> */}
                                        <td><button onClick={() => removeProduct(val.prodID)} className="btn btn-danger  p-1"> Yes </button></td>
                                    </tr>))
                            }
                        </tbody>
                    </table> 
                    <br />
                    <hr />
                    <br />
                    <div  className="container" >
                        <div className="row">
                        <div className="col-4"></div>
                        <div className="col-5"></div>
                        <div className="col-3">
                        <table>
                            <tbody >
                                <tr>
                                    <td>
                                        <h5>Is Prime Member<span>&nbsp;</span> </h5>
                                    </td>
                                    <td>
                                        <h6> :{k.eMCardNo ? " Yes" : " No"}</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Delivery Charge</h5>
                                    </td>
                                    <td>
                                        <h6>: ₹ 50/-</h6>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h5>Total Amount</h5>
                                    </td>
                                    <td>
                                        <h6>: ₹ {total}/-</h6>
                                    </td>
                                </tr>

                                <div>

                                    {/*
                    {
                    <h6>OP Bal: {k.eMartPoints}</h6>
                    <h6>Total ePts Credited: {total*0.1}</h6>
                    <h6>Redeemed today: {this.state.a}</h6>
                    <h6>CL Balance: {(k.eMartPoints)+(total*0.1)-(this.state.a)}</h6>
                    } */}
                                </div>
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>

                    <div className="nav justify-content-center">
                    <div class="center-block">
                        {/* <input type="submit" value="Modify" class="invoice-button" /> <span>&nbsp;&nbsp;</span> */}
                        <Button className="btn btn-success" onClick={this.openCheckout}>Pay</Button><span>&nbsp;&nbsp;&nbsp;</span>
                        <Button className="btn btn-danger" onClick={this.home}>Cancel</Button>
                        {/* <input type="submit" value="Cancel" class="invoice-button" onClick={this.home} /> <span>&nbsp;&nbsp;&nbsp;</span>
                    <input type="submit" value="Pay" class="invoice-button" /> */}
                    </div>
                </div>
                </div>
            </Container>
        )
    }
}
export default Invoice;

{/* <input type="submit" value="Pay" onClick={this.openCheckout} class="invoice-button" /> */ }