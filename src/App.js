import React from "react";
import { Route,BrowserRouter, Routes } from "react-router-dom";
import Home from "./compnent/Home/Home";
// import Single from "./compnent/Singel/single ";
import Users from "./compnent/users/users";
import Product from "./compnent/product/product";
import Doctor from './compnent/Doctor/Doctor';
// import Order from "./compnent/order/order";
import { useState } from "react";
import './App.css';
// import Edit_invoice from "./compnent/edit_invoice/Edit_invoice";
// import Print_Invoice from "./compnent/Print_Invoice/Print_Invoice";
// import Edit_Copany from "./compnent/Edit_Company/Edit_Copany";
// import Edit_Company from "./compnent/Edit_Company/Edit_Copany";
// import Companies_archive from "./compnent/Companies_archive/Companies_archive";
// import Invoice_archive from "./compnent/Invoice_archive/Invoice_archive";
// import Invoice from "./compnent/Invoices/Invoices";
// import Print_Company from "./compnent/Print_Company/Print_Company";
import New_Doctor from "./compnent/New_Doctor/New_Doctor";
import Messages from "./compnent/Messages/Messages";

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
                    <Route path="/Doctor" element={<Doctor color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    {/* <Route path="/profile" element={<Single color={color} handel_color={handel_color} handel_side={handel_side}/>}/> */}
                    <Route path="/New_Doctor" element={<New_Doctor color={color} handel_color={handel_color}  handel_side={handel_side}/>}/>
                    {/* <Route path="/order" element={<Order color={color} handel_color={handel_color} handel_side={handel_side}/>}></Route> */}
                    <Route path="/product" element={<Product color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    <Route path="/Users" element={<Users color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    <Route path="Messages" element={<Messages color={color} handel_color={handel_color}  handel_side={handel_side}/>}/>
                    {/* <Route path="/Edit-invoice/:id" element={<Edit_invoice color={color} handel_color={handel_color}  handel_side={handel_side}/>}/>
                    <Route path="/Print-invoice/:id" element={<Print_Invoice/>}/>
                    <Route path="/Print-Comapny/:id" element={<Print_Company/>}/>
                    <Route path="/Edit-Company/:id" element={<Edit_Company color={color} handel_color={handel_color}  handel_side={handel_side}/>}/>
                    <Route path="/Companies-archive" element={<Companies_archive color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                    <Route path="/Invoice-archive" element={<Invoice_archive color={color} handel_color={handel_color} handel_side={handel_side}/>}/>
                     */}
        
                </Routes>
            </BrowserRouter>
        </div>

    )   
}
export default App;