import React from 'react';
import '../styles/User.css'

const User = ({name, lastname, email}) => {

   return (
      <div className='user'>
         <p>{name} {lastname}</p>
         <p>{email}</p>
      </div>
   )
};

export default User;
