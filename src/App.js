import React from "react";
import { Route,BrowserRouter, Routes } from "react-router-dom";
import Home from "./compnent/Home/Home";
import New from "./compnent/New/New";
import Single from "./compnent/Singel/single ";
import Users from "./compnent/users/users";
import Product from "./compnent/product/product";
import Company from './compnent/Company/Company';
import Order from "./compnent/order/order";
import { useState } from "react";
import './App.css';
import New_Company from "./compnent/New_Company/New_Company";
import Edit_invoice from "./compnent/edit_invoice/Edit_invoice";
import Print_Invoice from "./compnent/Print_Invoice/Print_Invoice";
import Edit_Copany from "./compnent/Edit_Company/Edit_Copany";
import Edit_Company from "./compnent/Edit_Company/Edit_Copany";
import Companies_archive from "./compnent/Companies_archive/Companies_archive";
import Invoice_archive from "./compnent/Invoice_archive/Invoice_archive";

const App=()=>{
    const [color,Setcolor]=useState(true);
    const [side,Setside]=useState(true);
    const handel_color=()=>{
        Setcolor(!color)
    }
    const handel_side=()=>{
        const body=document.getElementById('body');
        const s= document.getElementById('side_bar');
        const close=document.getElementById('close')
       if(side==true){
            s.style='display: block;width:250px;backgroundColor:red;position: fixed';
            body.classList.add('body_active');
            close.style='display: block';
       }
       else{
            s.style='display: none';
            body.classList.remove('body_active')
            close.style='display: block';
       }
       Setside(!side)

    }
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home color={color} handel_color={handel_color} side={side} handel_side={handel_side}/>}/>
                    <Route path="/Company" element={<Users color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    <Route path="/profile" element={<Single color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    <Route path="new" element={<New color={color} handel_color={handel_color}  handel_side={handel_side}/>}/>
                    <Route path="/order" element={<Order color={color} handel_color={handel_color} handel_side={handel_side}/>}></Route>
                    <Route path="/product" element={<Product color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    <Route path="/Invoice" element={<Company color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    <Route path="New_Invoice" element={<New_Company color={color} handel_color={handel_color}  handel_side={handel_side}/>}/>
                    <Route path="/Edit-invoice/:id" element={<Edit_invoice color={color} handel_color={handel_color}  handel_side={handel_side}/>}/>
                    <Route path="/Print-invoice" element={<Print_Invoice/>}/>
                    <Route path="/Edit-Company/:id" element={<Edit_Company color={color} handel_color={handel_color}  handel_side={handel_side}/>}/>
                    <Route path="/Companies-archive" element={<Companies_archive color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    <Route path="/Invoice-archive" element={<Invoice_archive color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    
                </Routes>
            </BrowserRouter>
        </div>

    )   
}
export default App;