import React, { useState } from 'react';
import '../css/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
  
      <div className='form-container' style={{backgroundColor: 'rgb(52 58 64)'}}>
        {/* <span className='close-btn'></span> */}
        {/* <div className='form-content-left'>
          <img className='form-img' src='Images/em.jpg' alt='spaceship' />
        </div> */}
        {isSubmitted ? (<FormSuccess />): (<FormSignup submitForm={submitForm} />) }
      </div>

  );
};

export default Form;
