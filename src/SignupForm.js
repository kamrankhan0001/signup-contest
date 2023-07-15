import React, { useState } from 'react';


const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  

  const handleSubmit = (e) => {
    
    e.preventDefault();

    // Validate form fields
   
    const errors = {};
    if (!email) {
      errors.email = 'Email is required';
    }
    if (!name) {
      errors.name = 'Name is required';
    }
    if (!password) {
      errors.password = 'Password is required';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Please Make sure your Password and Conferm password match!';
    }

    setErrors(errors);

    if (Object.keys(errors).length === 0) {
        // Form is valid, perform signup logic here
        console.log('Form submitted');
        setIsSubmitted(true);
        // Reset form fields
        setEmail('');
        setName('');
        setPassword('');
        setConfirmPassword('');
      } else {
        setIsSubmitted(false);
      }
      
    };
   
  return (

    
<div className='container'>
    <form onSubmit={handleSubmit}>

     <div>

     <div className='message'>
      {isSubmitted ? (
        <div className="success-message">Form submitted successfully!</div>
      ) : null}
      <form onSubmit={handleSubmit} className="signup-form">
       
      </form>
    </div>
        
        <input
          type="text" placeholder='Full Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>

      <div>
        <input
          type="email" placeholder='Email Address'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>

      
      <div>
        
        <input
          type="password" placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <div>
       
        <input
          type="password" placeholder='Confirm Password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {errors.confirmPassword && <span className='error'>{errors.confirmPassword}</span>}
      </div>
      <button type="submit" className='submit-btn'>Create Account</button>
    </form>
    </div>
  );
};

export default SignupForm;
