import React, { useState } from 'react'
import "./Login.scss"

const Login = () => {
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState(null);

const handleSubmit=async (e)=>{
  try{
  e.prevent.default()
const res=await axios.post("localhost:8800/api/auth/login",{ussername,password});
}}

// onChange={e=>setUsername(e.target.value)}
  return (
    <div className='login'>Login</div>
  )
}

export default Login