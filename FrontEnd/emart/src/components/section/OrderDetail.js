import React from 'react';
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
//import Logo from './images/logo.png';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Container, Row, Form, Col, Button,Card} from 'react-bootstrap';

import '../css/Profile.css';

export class OrderDetail extends React.Component
{
   
    currentCustID = JSON.parse(localStorage.getItem('currentCustID'));
    constructor(props)
    {
       // alert("Hi");
        super(props);
        this.state={
                        orderdtl: [],
                        /*/orderDate: "",
                        deliveryDate:"",
                        invoiceOrderID:"",
                        totalBill:"",
                        prodName:"",
                        qty:""*/
                    };
    }
    async componentWillMount()
    {
        //alert("Hi");
        var dataCust = JSON.parse(localStorage.getItem('dataCust'));

        const response=await fetch("http://localhost:8080/eMart/GetCustomerDetail/"+this.currentCustID);
        const res=await response.json();

        this.setState({/*orderDate:res.orderDate,
                        deliveryDate:res.deliveryDate,
                        invoiceOrderID:res.invoiceOrderID,
                        totalBill:res.totalBill,
                        prodName:res.prodName,
                        qty:res.qty*/orderdtl:res
                    });
       
    }
                    

    render()
    {
        
        return(
            <div>
            {/* <fieldset>table</fieldset> */}
            <div class="container">
                <div class="row">
                    {/* <div class="col">Name: {this.state.deliveryDate}</div>
                    <div class="col">Ship To: Name & Address</div>
                    <div class="w-100"></div>
                    <div class="col">Bill To: {Customer.cust_Address}</div>
                    <div class="col"><input type="text" id="txtbox"></input></div> */}
                    <br /><br /><br /><br />

                </div>
            </div>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Invoice-ID</th>
                        <th scope="col">Delivery date</th>
                        <th scope="col">Order date</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Qty</th>
                        <th scope="col">TotalBill</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.orderdtl.map(val => (
                            <tr>
                                <th scope="row">{val.invoiceOrderID}</th>
                                <td>{val.deliveryDate}</td>
                                <td>{val.orderDate}</td>
                                <td>{val.prodName}</td>
                                <td>{val.qty}</td>
                                <td>{val.totalItemCost}</td>
        
                            </tr>))
                    }
                </tbody>
                </table>
            {/* <h4>Total Amount:  ₹ {total}</h4>
            <p>Your e-Point A/c:</p>
            <p>OP Bal: {Customer.eMartPoints}</p>
            <p>Tot Credited:</p>
            <p>Redeemed today:</p>
            <p>CL. Bal:</p>
            <div class="center-block">
                <input type="submit" value="Modify" class="invoice-button" /> <span>&nbsp;&nbsp;</span>
                <input type="submit" value="Cancel" class="invoice-button" onClick={this.home} /> <span>&nbsp;&nbsp;&nbsp;</span>
                <input type="submit" value="Pay" onClick={this.openCheckout} class="invoice-button" /> 
            </div>*/}
          </div>
            );
    }

}

export default OrderDetail;