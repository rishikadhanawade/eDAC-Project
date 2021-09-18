import React from 'react'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Button } from 'react-bootstrap';
function FormSignup({submitForm}) {
  const phoneRegExp = /[0-9]{10}/

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number:'',
      address:'',
      password: '',
      password2: ''
    },
    validationSchema: yup.object({
      name: yup.string().required("Name required"),
      email: yup.string().email("Email address is invalid").required("Email required"),
      number: yup.string().matches(phoneRegExp, 'Phone number is not valid').min(10).max(10).required("Phone required"),

      // number: yup.string().min(10,"Mobile number should be 10 digits").max(10,"Mobile number should be 10 digits").required("Number is required"),
      address: yup.string().required("Address required"),
      password: yup.string().min(6,"Password needs to be 6 characters or more").required("Password is required"),
      password2: yup.string().oneOf([yup.ref('password'), null], 'Passwords do not match')
    }),
    onSubmit: values => {
    //  lert(JSON.stringify(values)) a
      let CustDemo = {
        "cust_Name":values.name,
        "cust_Address":values.address,
        "cust_PhoneNo":values.number,
        "cust_Password":values.password2,
        "cust_Email_ID":values.email,
        "eMCardNo":Math.floor((Math.random()+1)*1000),
        "eMartPoints":500
      };
      let demo = JSON.stringify(CustDemo);
      console.log(JSON.parse(demo));
      fetch("http://localhost:8080/eMart/Customer/AddCustomer", {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: demo
      }).then(r => { r.json() }).then(res => {
        if (res) {
          this.setState({ message: 'You have been Registered' });
        }
      });
      submitForm();
    }
})
return (
  <div className='container mt-3'>
    <div className="row">
      <div className="col-md-12">
    <form onSubmit={formik.handleSubmit} className='form' noValidate>
      <h1>
      SignUp
      </h1>
      <div className='form-inputs'>
        <label className='form-label'>Name</label>
        <input
          className='form-input'
          type='text'
          name='name'
          placeholder='Enter your Name'
          value={formik.values.name}
          {...formik.getFieldProps("name")}
        />
        {formik.touched.name && formik.errors.name ?<p style={{color:'red'}}>{formik.errors.name}</p>:null}
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Email</label>
        <input
          className='form-input'
          type='email'
          name='email'
          placeholder='Enter your email'
          value={formik.values.email}
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ?<p style={{color:'red'}}>{formik.errors.email}</p>:null}
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Mobile Number</label>
        <input
          className='form-input'
          type='number'
          name='number'
          placeholder='Enter your mobile number'
          value={formik.values.number}
          {...formik.getFieldProps("number")}
        />
        {formik.touched.number && formik.errors.number ?<p style={{color:'red'}}>{formik.errors.number}</p>:null}
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Address</label>
        <input
          className='form-input'
          type='address'
          name='address'
          placeholder='Enter your address'
          value={formik.values.address}
          {...formik.getFieldProps("address")}
        />
        {formik.touched.address && formik.errors.address ?<p style={{color:'red'}}>{formik.errors.address}</p>:null}
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Password</label>
        <input
          className='form-input'
          type='password'
          name='password'
          placeholder='Enter your password'
          value={formik.values.password}
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ?<p style={{color:'red'}}>{formik.errors.password}</p>:null}
      </div>
      <div className='form-inputs'>
        <label className='form-label'>Confirm Password</label>
        <input
          className='form-input'
          type='password'
          name='password2'
          placeholder='Confirm your password'
          value={formik.values.password2}
          {...formik.getFieldProps("password2")}
        />
        {formik.touched.password2 && formik.errors.password2 ?<p style={{color:'red'}}>{formik.errors.password2}</p>:null}
      </div>
      <Button variant="warning" type='submit'>SignUp</Button>
      <span className='form-input-login'>
        Already have an account? Login <a href="/login">here</a>
      </span>
    </form>
  </div>
  </div>
  </div>
);

}
export default FormSignup;