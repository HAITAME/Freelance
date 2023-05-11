import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import navbar from './Navbar.scss'
import logo from './Navbar.scss'
import links from './Navbar.scss'
import text from './Navbar.scss'
import dot from './Navbar.scss'
import container from './Navbar.scss'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const [active,setActive] = useState(false)
  const [open,setOpen] = useState(false)
  
  const {pathname} =  useLocation()
  const isActive = (()=>{
      window.scrollY >0 ? setActive(true) :setActive(false)
  })
  useEffect(()=>{
    window.addEventListener('scroll',isActive)
    return () => {
      window.removeEventListener('scroll', isActive )
    }
  },[]);
  const currenUser={
    id:1,
    username:"Haitame",
    isSeller:true
  }

  return (
    // Si path != home page => active sinon not active
    <div className= {active || pathname !=="/" ? "navbar active" :"navbar"}>
        <div className="container">
            <div className="logo">
                <Link to="/" className='link'>               
                   <span className='text'>FreeLance</span>
                </Link>
                <span className='dot'>.</span>
            </div>
            <div className="links">
                <span>Explore</span>
                {!currenUser &&<span>Sign in</span>}
                {!currenUser?.isSeller &&<span>Become a Seller</span>}
                {!currenUser &&<button>Sign up</button>}
                {currenUser &&(
                   <div className="user" onClick={()=>setOpen(!open)}>
                       <img src="src/public/img/ICON.jpg" alt="" />
                       <span>{currenUser?.username }</span>
                       {open &&<div className="options">
                        { currenUser?.isSeller &&(
                            <>
                            <Link className='link' to="/mygigs"> Gigs</Link>
                            <Link className='link' to="add">Add New Gig</Link>
                            </>
                          )}
                        <Link className='link' to="/orders">Orders</Link>
                        <Link className='link' to="messages">Messages</Link>
                        <Link className='link' to="/">LogOut</Link>

                      </div>}
                   </div>
                )}



            </div>
        </div>
        {/* si la page n'est pas la page d'aceuil afficher le menu est  afficher d'une manier permanante*/}
        {active || pathname !=="/" && (
          <>
          <hr/>
          <div className="menu">
                <span>Programming & Tech</span> 
                <span>Graphics & Design</span>
                <span>Digital Marketing</span>
                <span>Writing & Translation</span>

          </div>
          </>
        )}  
    </div>
  )
}

export default Navbar