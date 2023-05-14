import React, { useState } from 'react'
import "./Login.scss"
import newRequest from '../../../utils/newRequest';

const Login = () => {
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState(null);

const handleSubmit=async (e)=>{
  e.prevent.default()

  try{
   await newRequest.post("auth/login",{username,password});
   localStorage.setItem("currentUser",JSON.stringify(res.data));
   navigate("/");
}catch(err){
setError(err);
console.log(err);
}
}


//  onChange={(e)=>setUsername(e.target.value)}


  return (
    <div className='login'>Login</div>
  )
}

export default Login