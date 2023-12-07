import React, { useContext, useState} from 'react'
import {FaShoppingCart} from "react-icons/fa"
import logo from "../assets/logo.png"
import {HiHome} from "react-icons/hi"
import{MdRestaurantMenu} from "react-icons/md"
import { Link } from 'react-router-dom'
import CartContext from '../context/CartContext'
const Navbar = () => {
  
  const {Cartitems}=useContext(CartContext)
  
  return (
   <nav className='h-12 px-5 bg-emerald-600 text-black flex justify-between items-center z-50 sticky top-0 w-full '>
<div className='w-1/2 flex item-center'>
<img className='h-12' src={logo} alt="" />
</div>


<div className='w-1/2 flex justify-end '>
<h1 className=' w-1/3 flex justify-between py-2 text-xl  ' >
  <Link to="/">
  <HiHome/>
    </Link>
    <Link to="/main"><MdRestaurantMenu/></Link>
    <Link to="/cart" className='flex'><FaShoppingCart/>
    <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 border-1 border-white rounded-full -top-0.5 right- dark:border-gray-900">{Cartitems.length}</div>
    </Link>
    

 </h1>
</div>


   </nav>
  )
}

export default Navbar
