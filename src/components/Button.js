import React from 'react';
import '../styles/Button.css'

const Button = ({children, type}) => {
  return (
      <button type={type} className='button'>
         {children}
      </button>
   );
};

export default Button;
