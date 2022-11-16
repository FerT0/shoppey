import React from "react"
import ReactDOM from "react-dom"
import "./app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Store from "./Store"
import Cart from "./Cart"
import Admin from "./Admin"
import AdminUsers from "./admintabs/AdminUsers"
import AdminProducts from "./admintabs/AdminProducts"
import AdminCarts from "./admintabs/AdminCarts"



ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="store" element={<Store />}/>
            <Route path="cart" element={<Cart />}/>
            <Route path="/admin" element={<Admin />}/>
            <Route path="/admin/users" element={<AdminUsers />}/>
            <Route path="/admin/products" element={<AdminProducts />}/>
            <Route path="/admin/carts" element={<AdminCarts />}/>
        </Routes>
    
    
    </BrowserRouter>
, document.getElementById("root"));