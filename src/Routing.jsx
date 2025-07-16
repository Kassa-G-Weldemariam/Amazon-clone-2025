import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import SignUp from './pages/Auth/SignUp'
import Payment from './pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/Cart/Cart'
import Results from './pages/Results/Results'
import ProductDetail from './pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Landing/>} />
            <Route path="/Auth" element={<SignUp/>} />
            <Route path="/payment" element={<Payment/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/category/:categoryName" element={<Results/>} />
            <Route path="/products/:id" element={<ProductDetail/>} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default Routing