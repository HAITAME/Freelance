import React, { useState } from 'react'
import './Register.scss'

const Register = () => {
  const [file,setFile]=useState(null);
//onchange={setFile} to input for file
  const [user,setUser]=useState({
    username:"",
    email:"",
    password:"",
    img:"",
    contry:"",
    isSeller:false,
    desc:"",
  });

  const handleChange=(e)=>{
 setUser(prev=>{
  return {...prev, [e.target.name]: e.target.value};
 })
  };
  const handleSeller=(e)=>{
    setUser(prev=>{
     return {...prev, isSeller: e.target.checked};
    })
     };
      //onchange={handleSeller}  for checkbox input


  //onchange={handleChange}  for every input should be make in Register.jsx exept checkbox and file
  return (
    <div className='register'>Register</div>
  )
}

export default Register