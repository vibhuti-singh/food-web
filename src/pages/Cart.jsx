import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import Carttable from '../components/Carttable'
import { Link } from 'react-router-dom'
const Cart = () => {
    



    const {Cartitems}=useContext(CartContext)

 const total = Cartitems.reduce((p,c)=>{
    return p+c.Price*c.quantity
 },0)

const mastotal=total+50
  return (
  <>
  {
    Cartitems.length>0?(
      <div className='flex flex-col md:flex-row border-t-2'>
      <div className='w-full md:w-2/3'>
      <h1 className='text-3xl text-center font-mono text-yellow-700  border-black'>your cart</h1>
        <div className='relative overflow-x-auto shadow-md sm:rounded-0 w-full mt-9'>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400 h-28'>
            
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 h-4">
          <tr>
              <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                  Product
              </th>
              <th scope="col" className="px-6 py-3">
                  Qty
              </th>
              <th scope="col" className="px-6 py-3">
                  Price
              </th>
              <th scope="col" className="px-6 py-3">
                  Action
              </th>
          </tr>
      </thead>
    {
      Cartitems.map(item=> <Carttable key={item.id} item={item}/>)
    }
  </table>

  {/* only check out page displays on mobile screen */}
  <div className=' w-full md:w-1/3 items-center mt-4 md:mt-0 bg-lime-200 p-10 block md:hidden'>
           <div className='flex flex-col items-center justify-center'>
           <h1 className='text-3xl font-mono text-yellow-700 border-b-4 border-black'>Check-out</h1>
            <div className='relative overflow-x-auto w-11/12 sm:rounded-0'>
           </div>
              <table className='text-sm text-left text-gray-500 dark:text-gray-400 my-10 w-full'>
               
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
          <tr>
              <th scope="col" className="px-6 py-3">Items</th>
              <th scope="col" className="px-6 py-3">amount</th>
          </tr>
      </thead>
      <tbody>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white"> Totle cart items</td>
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">₹ {total}</td>
</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Delivery</td>
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">₹ 50</td>
</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Total</td>
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">₹{mastotal}</td>
</tr>
      </tbody>
  </table>

</div>
  
<Link to='/userdetails'>
<button type='button' className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 float-right'>Proceed to checkout</button>

</Link>
  
  </div>
  
</div>


</div>
{/* checkout for large screens */}


<div className='checkout-page w-full md:w-1/3 right-0 hidden md:block items-center mt-4 md:mt-0 fixed  p-10'>
           <div className='flex flex-col items-center justify-center'>
           <h1 className='text-3xl font-mono text-yellow-700 border-b-4 border-black'>Check-out</h1>
            <div className='relative overflow-x-auto w-11/12 sm:rounded-0'>
           </div>
              <table className='text-sm text-left text-gray-500 dark:text-gray-400 my-10 w-full'>
               
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 '>
          <tr>
              <th scope="col" className="px-6 py-3">Items</th>
              <th scope="col" className="px-6 py-3">amount</th>
          </tr>
      </thead>
      <tbody>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white"> Totle cart items</td>
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">₹ {total}</td>
</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Delivery</td>
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">₹ 50</td>
</tr>
<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">Total</td>
  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">₹{mastotal}</td>
</tr>
      </tbody>
  </table>

</div>
  
<Link to='/userdetails'>
<button type='button' className='text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 float-right'>Proceed to checkout</button>

</Link>
  
  </div>
</div> 

    ):(
      <div className='container h-screen bg-emerald-950 flex flex-col justify-center items-center'>
          
    <h1 className='text-white text-4xl'>Nothig to show here....</h1>
    <Link to="/main" className='w-72 h-12 bg-black rounded-md mt-7 text-white flex items-center justify-center'>Add Items</Link>
        </div>
    )
  }
  
  </>
     )
}

export default Cart





