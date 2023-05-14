import React, { useState } from 'react'
import "./Login.scss"

const Login = () => {
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [error,setError]=useState(null);

const handleSubmit=async (e)=>{
  e.prevent.default()

  try{
const res=await axios.post("https://localhost:8800/api/auth/login",{ussername,password});
console.log(res.data);
}catch(err){
setError(err);
console.log(err);
}
}
// onChange={e=>setUsername(e.target.value)}
  return (
    <div className='login'>Login</div>
  )
}

export default Login