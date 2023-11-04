import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../Customer/Pages/Homepage/Homepage'
import Cart from '../Customer/Components/Cart/Cart'
import Navigation from '../Customer/Components/Navigation/Navigation'
import Footer from '../Customer/Components/Footer/Footer'
import Product from '../Customer/Components/Products/Product'
import ProductDetails from '../Customer/Components/ProductDetails/ProductDetails'
import Checkout from '../Customer/Components/Checkout/Checkout'
import OrderDetails from '../Customer/Components/Order/OrderDetails'
import Order from '../Customer/Components/Order/Order'

const CustomerRouters = () => {
  return (
    <div>
        <div>
        <Navigation/>
        
        </div>
        <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:LavelThree' element={<Product/>}></Route>
            <Route path='/product/:productId/' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
      
    
      {/* <Order/> */}
      {/* <OrderDetails/> */}
        </Routes>
        <div>
        <Footer/>
        
        </div>
    </div>
  )
}

export default CustomerRouters