import React, { useContext, useState } from 'react'
import CardContext from '../context/CardContext'
import Card from "../components/Card"
import {BiSearchAlt} from "react-icons/bi"


const Home = () => {
 
  const{items}=useContext(CardContext)
  const [search, setSearch] =useState("");
  return (
    <div className="container1 flex flex-col justify-center items-center h-auto w-full bg-fixed">

  <span className='flex justify-center items-center bg-lime-200 h-16 w-full text-3xl '>
    
    

  <div className=" text-gray-600">

    <input onChange={(e)=> setSearch(e.target.value)} type="search" name="search" placeholder="find what you love..." className="bg-white h-10 w-80  px-5 pr-10 rounded-full text-sm focus:outline-none "/>
    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
       <BiSearchAlt/>
    </button>
</div>
 </span>

{
  items.filter((item)=>item.Dish.toLowerCase().includes(search)).map(item=><Card key={item.id} item={item}/> )
}

 </div>
  )
}

export default Home
