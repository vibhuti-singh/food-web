import React from 'react'
import thankyou from "../assets/confirm.gif" 
const Checkout = () => {
  return (
    <div className='flex flex-col justify-center items-center' >
        <img className='h-72 w-72' src={thankyou} alt="" />
    <h1 className='text-3xl font-mono '>Your order has confirmed</h1>
    </div>
  )
}

export default Checkout
