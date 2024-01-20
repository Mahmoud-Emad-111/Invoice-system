import React from "react";
import Nav from "./../nav_bar/Nav_bar";
import Site from "./../side_bar/side_bar";
import "./New.css";
import {VscEye} from "react-icons/vsc";
import {ImUpload} from "react-icons/im";
import { useEffect, useState } from "react";
import http from "../http/http.jsx";
import toast, { Toaster } from 'react-hot-toast';

import avatar from "./avtart.jpg";
const New=(props)=>{

    const [file, setfile] = useState(false);
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [TAX_ID, setTAX_ID] = useState('');
    const [Bank_Address, setBank_Address] = useState('');
    const [Bank_Name, setBank_Name] = useState('');
    const [IBAN, setIBAN] = useState('');
    const [Bic, setBic] = useState('');
    
    const notify = () => toast.success('The company has been added');
    

    const handel_Submit=(e)=>{
        e.preventDefault();
        http.post('Company/insert',{
            
            'Name':Name,
            'Address':Address,

            'TAX_ID':TAX_ID,
            
            'Bank_Address':Bank_Address,
            
            'Bank_Name':Bank_Name,
            
            'IBAN':IBAN,
            
            'Bic':Bic,

            
            'Image':file,
            
        }).then(res=>{

            if (res.status===200) {
                notify();
                setfile(false);
                setName('');
                setAddress('');
                setTAX_ID('');
                setBank_Address('');
                setBank_Name('');
                setIBAN('');
                setBic('');
            }
        })   
        
    }
    return(
        <div className={`new ${props.color ==false ? 'dark' :''}`}>
            <Toaster />
            
            
            
            <Site color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
            <div className="contener" id="body">
                <Nav color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
                <div className="top">
                    <h1>add new Company</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file): avatar} alt="" />
                    </div>
                    <div className="right">
                        <form onSubmit={handel_Submit}>
                            <div className="form">
                                <div className="input_form">
                                    <label htmlFor="file" className="label_file"> image: <ImUpload className="upload"/></label>
                                    <input type="file"  id="file" onChange={e=>setfile(e.target.files[0])} style={{display:"none"}}/>
                                </div>
                                <div className="input_form">
                                    <label>Name</label>
                                    <input type="text" name='Name' value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                                </div>
                                <div className="input_form">
                                    <label>Address</label>
                                    <input type="text" name='Address' value={Address} onChange={(e)=>setAddress(e.target.value)} placeholder="Address"/>
                                </div>
                                <div className="input_form">
                                    <label>TAX ID</label>
                                    <input type="text" onChange={(e)=>setTAX_ID(e.target.value)} value={TAX_ID} placeholder="TAX ID"/>
                                </div>
                                <div className="input_form">
                                    <label>Bank Address</label>
                                    <input type="text"  placeholder="Bank Address" value={Bank_Address} onChange={(e)=>setBank_Address(e.target.value)} />
                                </div>
                                {/* <div className="input_form ">
                                    <label>Zip</label>
                                    <input type='number' placeholder="ZIP" value={ZIP} name="ZIP" onChange={(e)=>setZIP(e.target.value)} />

                                </div> */}
                                <div className="input_form">
                                    <label>Bank Name</label>
                                    <input type="text"  placeholder="Bank Name" value={Bank_Name}  onChange={(e)=>setBank_Name(e.target.value)} />
                                </div>
                                <div className="input_form">
                                    <label>IBAN</label>
                                    <input type="text"  placeholder="IBAN"  value={IBAN} onChange={(e)=>setIBAN(e.target.value)}/>
                                </div>
                                <div className="input_form">
                                    <label>Bic</label>
                                    <input type="text"  placeholder="Bic" value={Bic}  onChange={(e)=>setBic(e.target.value)}/>
                                </div>
                                <button type='SUBMIT'>sent</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New;