import React from "react";
import Nav from "./../nav_bar/Nav_bar";
import Site from "./../side_bar/side_bar";
import "../New_Company/New_Company.css";
import {VscEye} from "react-icons/vsc";
import {ImUpload} from "react-icons/im";
import { useEffect, useState } from "react";
import http from "../http/http.jsx";
import avatar from "../New_Company/avtart.jpg";
import { useParams } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
export default function Edit_invoice(props) {
    const { id } = useParams();
    
    useEffect(() => {
        http.post('Invoice/Edit',{
            'id':1,
        }).then(
            res=>{

                setItem(res.data.data.Item);
                setQty(res.data.data.Qty);
                setRate(res.data.data.Rate);
                setAmount(res.data.data.Amount);
                setInvoice_Date(res.data.data.Invoice_Date);
                setDue_Date(res.data.data.Due_Date);
            }
        );
    }, []);
    
    const notify = () => toast.success('invoice has been added successfully');



    const [Item, setItem] = useState('');
    const [Qty, setQty] = useState('');
    const [Rate, setRate] = useState('');
    const [Amount, setAmount] = useState('');
    const [Invoice_Date, setInvoice_Date] = useState('');
    const [Due_Date, setDue_Date] = useState('');

    const handel_Submit=(e)=>{
        e.preventDefault();
        http.post('Invoice/Update',{
            'id':id,
            'Item':Item,
            'Qty':Qty,
            'Rate':Rate,
            'Amount':Amount==''?(Qty * Rate):Amount,
            'Invoice_Date':Invoice_Date,     
            'Due_Date':Due_Date,
        }).then(
            res=>{
                console.log(res);       
            if (res.status===200) {
                notify();
                setItem('');
                setQty('');
                setRate('');
                setAmount('');
                setInvoice_Date('');
                setDue_Date('');
            }
        })   
        
    }
    return(
        <div className={`new ${props.color ==false ? 'dark' :''}`}>
            {/* <ToastContainer /> */}
            <Toaster />
            <Site color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
            <div className="contener" id="body">
                <Nav color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
                <div className="top">
                    <h1>Edit Invoice</h1>
                </div>
                <div className="bottom">

                    <div className="right">
                        <form onSubmit={handel_Submit}>
                            <div className="form">
                                
                                <div className="input_form ">
                                    <label>Item</label>
                                    <input  placeholder="Item" name="item" value={Item} onChange={(e)=>setItem(e.target.value)} />
                                </div>
                                <div className="input_form">
                                    <label>Qty</label>
                                    <input type="number" name='Qty' value={Qty} onChange={(e)=>setQty(e.target.value)} placeholder="Qty"/>
                                </div>

                                <div className="input_form">
                                    <label>Rate</label>
                                    <input type="number" name='Rate' value={Rate} onChange={(e)=>setRate(e.target.value)} placeholder="Rate"/>
                                </div>
                                
                                <div className="input_form">
                                    <label>Amount</label>
                                    <input type="number" name='Amount' value={(Qty * Rate)} onChange={(e)=>setAmount(e.target.value)} placeholder="Amount"/>
                                </div>
                                
                                <div className="input_form">
                                    <label>Invoice Date</label>
                                    <input type="date" name='Invoice_Date' value={Invoice_Date} onChange={(e)=>setInvoice_Date(e.target.value)} placeholder="Invoice Date"/>
                                </div>
                                
                                <div className="input_form">
                                    <label>Due Date</label>
                                    <input type="date" name='Due_Date' value={Due_Date} onChange={(e)=>setDue_Date(e.target.value)} placeholder="Due Date"/>
                                </div>
                                
                                <div className="input_form_radio">
                                {/* <label>Payment Methods</label> */}
                                 </div>
                                <button type='SUBMIT'>Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}
