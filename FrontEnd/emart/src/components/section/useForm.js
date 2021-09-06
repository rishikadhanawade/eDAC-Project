import { useState, useEffect } from 'react';


const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    number:'',
    address:'',
    password: '',
    password2: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
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
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;
