import React from 'react'
import { Link } from 'react-router-dom'
import ct from "../assets/ct.jpg"
import sp from "../assets/sp.jpg"
import sushi from "../assets/sushi.jpg"
const MainPage = () => {
  return (
    <>
  
    <section className="hero text-green-950 py-20 " >
          <div className="container mx-auto text-center">
              <h1 className="text-4xl font-bold mb-4">Delicious Food, Delivered To Your Door</h1>
              <p className="text-lg mb-8">Order from a variety of cuisines and enjoy a hassle-free delivery experience.</p>
              <Link to="/main" className=" text-gray-800 px-6 py-2 rounded-full bg-lime-400 hover:bg-yellow-400">Order Now</Link>
          </div>
      </section>
  
      <section className="featured-dishes py-16 bg-lime-200">
          <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Featured Dishes</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-white p-4 rounded-lg shadow-md">
                      <img src={sp} alt="Featured Dish" className="mb-4 w-full h-40 object-cover rounded-md"/>
                      <h3 className="text-xl font-bold mb-2">Spaghetti Bolognese</h3>
                      <p className="text-gray-600">Classic Italian dish with rich meat sauce.</p>
                      <p className="text-orange-500 font-bold mt-2">₹ 240</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                      <img src={ct} alt="Featured Dish" className="mb-4 w-full h-40 object-cover rounded-md"/>
                      <h3 className="text-xl font-bold mb-2">Chicken Tandoori</h3>
                      <p className="text-gray-600">Marinated and grilled to perfection.</p>
                      <p className="text-orange-500 font-bold mt-2">₹ 340</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-md">
                      <img src={sushi} alt="Featured Dish" className="mb-4 w-full h-40 object-cover rounded-md"/>
                      <h3 className="text-xl font-bold mb-2">Vegetarian Sushi</h3>
                      <p className="text-gray-600">Healthy and delicious sushi rolls.</p>
                      <p className="text-orange-500 font-bold mt-2">₹ 450</p>
                  </div>
              </div>
          </div>
      </section>
  
      <section className="cta text-black py-16">
          <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Hungry? Order Now!</h2>
              <p className="text-lg mb-8 px-2">Choose from our wide range of dishes and enjoy a delightful meal at your doorstep.</p>
              <Link to="/main" href="#" className=" text-gray-800 px-6 py-2 bg-amber-500 rounded-full hover:bg-yellow-400">Order Now</Link>
          </div>
      </section>
  
      <footer className=" text-white text-center bg-emerald-950 py-4">
          <p>&copy; 2023 Delicious. All rights reserved.</p>
      </footer>
    
    </>
 )
}

export default MainPage
