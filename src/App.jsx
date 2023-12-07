import React from 'react'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CardProvider } from './context/CardContext'
import MainPage from './pages/MainPage'
import { CartProvider } from './context/CartContext'
import Checkout from './pages/Checkout'
import Userdetails from './pages/Userdetails'

const App = () => {
  return (
 <Router>
       <CardProvider>
    <CartProvider>
    <Navbar/>
      <Menu/>
     <Routes>
      
       <Route path='/main' element={ <Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/userdetails' element = {<Userdetails/>}/>
<Route path='/checkout' element = {<Checkout/>}/>
     </Routes>
     
    </CartProvider>
     </CardProvider>
    </Router>
  )
}

export default App
