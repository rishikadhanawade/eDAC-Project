import React from 'react'
//import '../css/Form.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

import { DataContext } from '../Context'

class Invoice extends React.Component {
      
    constructor(props) {
        super(props);
        this.state = { invoice: [], a:[],Razorpay: "",amount:""};
        this.changeAmount = this.changeAmount.bind(this);
    this.openCheckout = this.openCheckout.bind(this);

    }
    static contextType = DataContext;
    async componentDidMount() {
        if(this.state.invoice.length===0){
            console.log(this.props.match.params.id);
            const response = await fetch("http://localhost:8080/eMart/Product/prodInvoice");
            const res = await response.json();
            this.setState({ invoice: res });
            }
            else{}
        this.forceUpdate();
      //  window.location.reload();

    }
    openCheckout() {
        const { cart, total, Customer,onDel,totalpts} = this.context;
        const k=JSON.parse(localStorage.getItem('currentCust'));
        let options = {
          "key": "rzp_test_aHX85lJ0TCIbIC",
          "amount": total*100, // 2000 paise = INR 20, amount in paisa
          "name": "eMart",
          "description": "",
          "image": "/your_logo.png",
          "handler": function (response){
                                            alert("Payment Successful");
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
        console.log("Value of rpz: "+rzp);
        console.log("Value of rpz open:"+rzp.open());

        
        //window.location.href='/';  

      }
    
    
    changeAmount(e) {
        this.setState({amount: e.target.value})
      }
    
    async componentWillMount() {
        const response = await fetch("http://localhost:8080/eMart/Product/totalpts");
        const res = await response.json();
        this.setState({ a: res });
        //console.log(arr);
    }
    componentDidUpdate(){
        console.log(this.state.a);
    }
    home=(e)=>{
        this.props.history.push("/");
    }
    render(){
        let invoiceOrderID=0;
        const { cart, total, Customer,onDel,totalpts,removeProduct} = this.context;
        const k=JSON.parse(localStorage.getItem('currentCust'));
        console.log(k.custid);
        return (
            <div>
                <div class="container">
                    <div class="row">
                        <div class="col"><h4>Name: {k.cust_Name}</h4></div>
                        <div class="col"><h5>Ship To: Name & Address</h5></div>
                        <div class="w-100"></div>
                        <div class="col"><h4>Bill To: {k.cust_Address}</h4></div>
                        <div class="col"><input type="text" id="txtbox"></input></div>
                        <br /><br /><br /><br />
    
                    </div>
                </div>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Invoice-id</th>
                            <th scope="col">CustomerId</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Qty</th>
                            <th scope="col">ListPrice</th>
                            <th scope="col">eMcard Price</th>
                            {/* <th scope="col">Amount</th> */}
                            <th scope="col">Remove?</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map(val => (

                                <tr>
                                    <th scope="row">{++invoiceOrderID}</th>
                                    <td>{k.custid}</td>
                                    <td>{val.prodName}</td>
                                    <td>{val.qty}</td>
                                    <td>{val.mrpPrice}</td>
                                    <td>{val.cardholdersPrice}</td>
                                    {/* <td>{val.invoice[0].totalBill}</td> */}
                                    <td><button onClick={() => removeProduct(val.prodID)} style={{ color: "red", fontSize: "15px" }}> Yes </button></td>
                                </tr>))
                        }
                    </tbody>
                </table>
                <div>
                      
                </div>
                
                <h3>Is Prime Member :  {k.eMCardNo?"Yes": "No"}</h3>
                <span style={{color:"red"}}>* ₹ 50 Delivery Charge</span>
                <div><h4>Total Amount:  ₹ {total}</h4>
                {/*
                {
                    
               
                <h6>OP Bal: {k.eMartPoints}</h6>
                <h6>Total ePts Credited: {total*0.1}</h6>
                <h6>Redeemed today: {this.state.a}</h6>
                <h6>CL Balance: {(k.eMartPoints)+(total*0.1)-(this.state.a)}</h6>
                } */}
                </div>
                <div class="center-block">
                    {/* <input type="submit" value="Modify" class="invoice-button" /> <span>&nbsp;&nbsp;</span> */}
                    <Button variant="info"  onClick={this.home}>Cancel</Button> <span>&nbsp;&nbsp;&nbsp;</span>
                    <Button variant="info"  onClick={this.openCheckout}>Pay</Button>
                    {/* <input type="submit" value="Cancel" class="invoice-button" onClick={this.home} /> <span>&nbsp;&nbsp;&nbsp;</span>
                    <input type="submit" value="Pay" class="invoice-button" /> */}
                   
                </div>
            </div>
        )
    }
}
export default Invoice;

{/* <input type="submit" value="Pay" onClick={this.openCheckout} class="invoice-button" /> */}