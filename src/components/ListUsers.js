import React, { useContext } from 'react';
import UsersContext from '../context/userContext';

import '../styles/ListUsers.css'
import User from './User';

const ListUsers = () => {

   const {users} = useContext(UsersContext);

   return (
      <div className='listUsers'>
         <h3>Usuarios Guardados</h3>
         {
            users.map(user => <User key={user.name} {...user}/>)
         }
      </div>
   );
};

export default ListUsers;
