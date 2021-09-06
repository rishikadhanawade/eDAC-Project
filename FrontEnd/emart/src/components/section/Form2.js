import React, { useState } from 'react';
import '../css/Form.css';
import FormLogin from './FormLogin';
import LoginSuccess from './LoginSuccess'

const Form2 = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'></span>
        <div className='form-content-left'>
          <img className='form-img' src='Images/em.jpg' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <FormLogin submitForm={submitForm} />
        ) : (
          <LoginSuccess/>
        )}
      </div>
    </>
  );
};

export default Form2;
