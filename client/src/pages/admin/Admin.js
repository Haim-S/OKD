import React, {useRef}  from 'react'
import {TextField, Button} from "@mui/material";
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../store/slices/authSlice';
import AdminControl from "../../components/admin/AdminControl";


const Admin = () => {

const dispatch = useDispatch();

const { isAuth} = useSelector((state)=> state.auth);
const emailRef = useRef();
const passwordRef = useRef();

const loginSubmit = (e) => {
  e.preventDefault();
  const values = {
    email:    emailRef.current.value,
    password: passwordRef.current.value
  }
  dispatch(login(values)); 
   emailRef.current.value = "";
passwordRef.current.value = "";
console.log(isAuth);
}

  return (

    <div className='container'>
    
      
        {/* {console.log(data)} */}
        { isAuth ?  <AdminControl/> :   
        <form onSubmit={loginSubmit}>
      <h1 style={{marginBottom: "20px"}}>login</h1>
          <TextField inputRef={emailRef} type='email' variant='outlined' label='Email'/>
          <TextField inputRef={passwordRef} style={{padding: "10px"}} name='password' type='text' variant='outlined' label='Password'/>
          <Button style={{backgroundColor: "#000"}}  type='submit' variant="contained" >LOGIN</Button>
        </form> 
        }
     
    </div> 

  )
}

export default Admin