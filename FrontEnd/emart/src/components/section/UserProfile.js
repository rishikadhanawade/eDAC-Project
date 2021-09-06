import React from 'react';
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Container, Row, Form, Col, Button ,Card} from 'react-bootstrap';
import '../css/Profile.css';

export class UserProfile extends React.Component
{
   currentCustID = JSON.parse(localStorage.getItem('currentCustID'));
    constructor(props)
    {
        super(props);
        this.state={
                        cust_Name: "",
                        cust_PhoneNo:"",
                        cust_Address:"",
                        cust_Email_ID:"",
                        eMCardNo:"",
                        eMartPoints:""
                    };
    }
    async componentWillMount()
    {
        
        //alert("Hi from user profile");
        var currentCustID = JSON.parse(localStorage.getItem('currentCustID'));
        const response=await fetch("http://localhost:8080/eMart/Customer/GetCustomer/"+this.currentCustID);
        const res=await response.json();
        this.setState({cust_Name:res.cust_Name,
                        cust_PhoneNo:res.cust_PhoneNo,
                        cust_Address:res.cust_Address,
                        cust_Email_ID:res.cust_Email_ID,
                        eMCardNo:res.eMCardNo,
                        eMartPoints:res.eMartPoints
                    });
       
    }

    onUpdateCust=(e)=>{
                        
                        let customer={
                                        cust_Name:document.getElementById("cnameTextbox").value,
                                        cust_PhoneNo:document.getElementById("mobileTextbox").value,
                                        cust_Address:document.getElementById("addrTextArea").value,
                                        cust_Email_ID:document.getElementById("emailTextbox").value
                                    };
                                    
       
        

        let temp=JSON.stringify(customer);
      
        fetch("http://localhost:8080/eMart/Customer/UpdateCustomer/"+this.currentCustID,{
                                                                                                method:'PUT',
                                                                                                headers:{'Content-type':'application/json'},
                                                                                                body:temp
                                                                                            })
                                                                                            .then(res=>{if(res.status==200)
                                                                                                {

                                                                                                    window.alert("Record has been Updated Successfully..!!");
                                                                                                    document.getElementById("cnameTextbox").disabled=true;
                                                                                                    document.getElementById("addrTextArea").disabled=true;
                                                                                                    document.getElementById("mobileTextbox").disabled=true;
                                                                                                    document.getElementById("emailTextbox").disabled=true;
                                                                                                    document.getElementById("submitButton").hidden=true;
                                                                                                    document.getElementById("editButton").hidden=false;
                                                                                                }
                                                                                            });
        e.preventDefault();
                                                                                        
    }
    
   
    onEditCust=(e)=>{
                        let elementName=document.getElementById("cnameTextbox");
                        elementName.disabled=false;

                        let elementAddr=document.getElementById("addrTextArea");
                        elementAddr.disabled=false;

                        let elementMobile=document.getElementById("mobileTextbox");
                        elementMobile.disabled=false;

                        let elementEmail=document.getElementById("emailTextbox");
                        elementEmail.disabled=false;

                        let elementSubmitButton=document.getElementById("submitButton");
                        elementSubmitButton.hidden=false;

                        let elementEditButton=document.getElementById("editButton");
                        elementEditButton.hidden=true;
                    }

                   
                       
    handleInputChange=(event)=>{
                                 
                                   this.setState({  
                                       [event.target.name]: event.target.value
                                   });  
                              }             
                    

    render()
    {
        
        return(
                <Formik     enableReinitialize={true} 
                            initialValues={
                                        {
                                            cust_Name: this.state.cust_Name,
                                            cust_PhoneNo: this.state.cust_PhoneNo,
                                            cust_Address: this.state.cust_Address,
                                            cust_Email_ID: this.state.cust_Email_ID
                                        }
                                    }   
                            validationSchema={
                                            yup.object({
                                                            cust_Name: yup.string().strict()
                                                                    .required('Please enter the customer name')
                                                                    .min(3, 'Name should be minimum 3 characters long')
                                                                    .max(30, 'Name can be maximum 15 characters long'),

                                                            cust_PhoneNo: yup.string()
                                                                    .required('Please enter mobile number')
                                                                    .min(10, 'Mobile number should be 10 digits long')
                                                                    .max(10, 'Mobile number should be 10 digits long'),

                                                            cust_Address: yup.string()
                                                                    .required("Please enter customer's address")
                                                                    .min(5, 'Address should be minimum 5 characters long')
                                                                    .max(250, 'Address can be maximum 25 characters long'),

                                                            cust_Email_ID: yup.string()
                                                                    .required("Please enter an email address")
                                                                    .email("Please enter a valid email address")
                                                                    .min(5, 'Address should be minimum 5 characters long')
                                                                    .max(250, 'Address can be maximum 25 characters long'),
                                                        })
                                                }
                        
                                >
                {
                    props => (
                                <div>
                                    {/* <h3>Personal Information</h3> */}
                                    <Form onSubmit={this.onUpdateCust}>
                                        <br/><br/>
                                        <label htmlFor="Name">Name: </label>
                                        <Field className="form-control" name="cust_Name" id="cnameTextbox" type="text" value={this.state.cust_Name} onChange={this.handleInputChange} disabled></Field>
                                        <ErrorMessage component="div" name="cust_Name" className="error"></ErrorMessage><br /><br />

                                        <label htmlFor="Address">Address: </label>
                                        <Field className="form-control" name="cust_Address" id="addrTextArea" type as='textarea' value={this.state.cust_Address} onChange={this.handleInputChange} disabled></Field>
                                        <ErrorMessage component="div" name="cust_Address" className="error"></ErrorMessage><br /><br />

                                        <label htmlFor="Mobile Number">Contact details: </label>
                                        <Field className="form-control" name="cust_PhoneNo" id="mobileTextbox" type="number" value={this.state.cust_PhoneNo} onChange={this.handleInputChange} disabled></Field>
                                        <ErrorMessage component="div" name="cust_PhoneNo" className="error"></ErrorMessage><br /><br />

                                        <label htmlFor="Email Address">Email Address: </label>
                                        <Field className="form-control" name="cust_Email_ID" id="emailTextbox" type="email" value={this.state.cust_Email_ID} onChange={this.handleInputChange} disabled></Field>
                                        <ErrorMessage component="div" name="cust_Email_ID" className="error"></ErrorMessage><br /><br />

                                        <label htmlFor="eMCard No.">eMCard No: </label>
                                        <Field className="form-control" name="eMCardNo" id="eMCardTextbox" type="number" value={this.state.eMCardNo} disabled></Field>
                                        <ErrorMessage component="div" name="eMCardNo" className="error"></ErrorMessage><br /><br />

                                        <label htmlFor="ePoints">ePoints Balance: </label>
                                        <Field className="form-control" name="eMartPoints" id="ePointsTextbox" type="number" value={this.state.eMartPoints} disabled></Field>
                                        <ErrorMessage component="div" name="eMartPoints" className="error"></ErrorMessage><br /><br />

                                        <button className="btn btn-dark mt-3" id="editButton" type="button" onClick={this.onEditCust} >Edit</button>
                            
                                        <button className="btn btn-dark mt-3" id="submitButton" type="submit" hidden="true" disabled={props.isValid==false}>Submit</button>
                                    </Form>
                                </div>
                            )
                    }
                </Formik>
            )
    }

}

export default UserProfile;