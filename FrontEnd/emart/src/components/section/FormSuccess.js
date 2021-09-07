import React,{ useState, useEffect } from 'react';
import '../css/Form.css';
import { Card, Button } from 'react-bootstrap';
import useForm from './useForm';
const FormSuccess = ({}) => {
  


  return (
    <div className='form-content-right'>
      <h1 className='form-success'></h1>
      <Card style={{ width: '18rem' , margin:"auto"}}>
        <Card.Img variant="bottom" src="images/successmessage (2).jpg " />
        <Card.Body>
       
          <Button variant="primary" onClick={event =>  window.location.href='/login'} >Login</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default FormSuccess;
