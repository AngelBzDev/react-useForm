import React, { useContext } from 'react';
import UsersContext from '../context/userContext';

import Input from './Input';

import useForm from '../hooks/useForm';
import Button from './Button';

const Form = () => {

  const [form, handleChange, reset] = useForm({
     name: '', 
     lastname: '', 
     email: ''
   })

   const {users, setUsers} = useContext(UsersContext);

   const handleSubmit = e => {
      e.preventDefault()
      setUsers(
         [...users, form]
      )      
      reset()
   }

   return (
      <form onSubmit={handleSubmit}>
         <Input
            name="name" 
            value={ form.name } 
            onChange={ handleChange }
            label="Nombre"
            autoComplete='off'
            placeholder='Ejem: Kerry'
         />
         <Input 
            name="lastname" 
            value={ form.lastname } 
            onChange={ handleChange } 
            label="Apellido"
            autoComplete='off'
            placeholder='Ejem: Kapinga'
         />
         <Input 
            name="email"
            type='email'
            value={ form.email } 
            onChange={ handleChange } 
            label="Correo Electronico"
            placeholder='Ejem: kerry_kapin.ga@correo.com'
            autoComplete='off'
         />
         <Button type='submit'>
            Guardar
         </Button>
      </form>
   )
};

export default Form;
