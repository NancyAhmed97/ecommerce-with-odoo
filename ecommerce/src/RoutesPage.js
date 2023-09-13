import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Cart from './Pages/Cart';
import MyOrders from './Pages/MyOrders';
import OrderDetails from './Pages/OrderDetails';
import Favorits from './Pages/Favorits';
import ForgetPassword from './Pages/ForgetPassword';
import SingleProduct from './Pages/SingleProduct';
import CategouryDetails from './Pages/CategouryDetails';
import VerifyOTP from './Pages/VerifyOTP';


function RoutesPages() {
    return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categouryDetails/:id" element={<CategouryDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/favorits" element={<Favorits />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/verifyoTP" element={<VerifyOTP />} />





      </Routes>
    </div>  )
}

export default RoutesPages