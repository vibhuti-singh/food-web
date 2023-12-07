import React, { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
const Carttable = ({item}) => {
    const{dispatch}= useContext(CartContext)
const handleIncrease=(itemId)=>{
    dispatch({
        type:"INCREASE_QUANTITY",
        payload:itemId
    })
}

const handleDecrease=(itemId)=>{
    dispatch({
        type:"DECREASE_QUANTITY",
        payload:itemId
    })
}

    const handleRemove = (id) =>{
        dispatch({
            type : "REMOVE_ITEM",
            payload:id,
        })

    }
  
  return (
    <tbody className='h-full'>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="p-4 h-full hidden sm:block">
                    <img className='h-20 w-36' src={item.img} alt="image not found"/>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                 {item.Dish}
                </td>
                <td className="px-6 py-4">
                    <div className="flex items-center space-x-3 text-white font-bold">
                        
                    <button onClick={()=> handleDecrease(item.id)}>-</button>
                <h1>{item.quantity}</h1>
                <button onClick={()=>handleIncrease(item.id)}>+</button>
                        
                       
                    </div>
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                ₹{item.Price*item.quantity}
                </td>
                <td className="px-6 py-4">
                    <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline" onClick={()=>handleRemove(item.id)}>Remove</a>
                </td>
            </tr>
           
        </tbody>

  )
}


export default Carttable
