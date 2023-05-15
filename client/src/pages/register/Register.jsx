import React, { useState } from 'react'
import './Register.scss';
import upload from '../../../utils/upload';
import newRequest from "../../utils/newRequest";
import {useNavigate} from "react-router-dom";


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

  const navigate=useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const url=upload(file);
    navigate("/")
    try{
await newRequest.post("/auth/register",{
  ...user,
  img:url
});
    }catch(err){

    }

    setUser(prev=>{
     return {...prev, isSeller: e.target.checked};
    })
     };



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