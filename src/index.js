import React from "react"
import ReactDOM from "react-dom"
import "./app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Store from "./Store"
import Cart from "./Cart"


ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="store" element={<Store />}/>
            <Route path="cart" element={<Cart />}/>
        </Routes>
    
    
    </BrowserRouter>
, document.getElementById("root"));