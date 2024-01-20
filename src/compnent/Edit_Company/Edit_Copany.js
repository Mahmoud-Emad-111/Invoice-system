import React from "react";
import Nav from "./../nav_bar/Nav_bar";
import Site from "./../side_bar/side_bar";
import "../New_Company/New_Company.css";
import {VscEye} from "react-icons/vsc";
import {ImUpload} from "react-icons/im";
import { useEffect, useState } from "react";
import http from "../http/http.jsx";
import avatar from "../New_Company/avtart.jpg";

import toast, { Toaster } from 'react-hot-toast';
import { useParams } from "react-router-dom";

export default function Edit_Company(props) {
    const { id } = useParams();
    
    useEffect(() => {
        http.post('/Company/Edit',{
            'id':id,
        }).then(
            res=>{
                // console.log(res.data.data.Image);
                setfile(`http://127.0.0.1:8000/images/${res.data.data.Image}`);
                setName(res.data.data.Name);
                setAddress(res.data.data.Address);
                setTAX_ID(res.data.data.TAX_ID);
                setBank_Address(res.data.data.Bank_Address);
                setBank_Name(res.data.data.Bank_Name);
                setIBAN(res.data.data.IBAN);
                setBic(res.data.data.Bic);
            }
        );
    }, []);

    const [image, setimage] = useState('');
    const [file, setfile] = useState(false);
    const [Name, setName] = useState('');
    const [Address, setAddress] = useState('');
    const [TAX_ID, setTAX_ID] = useState('');
    const [Bank_Address, setBank_Address] = useState('');
    const [Bank_Name, setBank_Name] = useState('');
    const [IBAN, setIBAN] = useState('');
    const [Bic, setBic] = useState('');
    
    const notify = () => toast.success('The company has been updated');
    

    const handel_Submit=(e)=>{
        e.preventDefault();
        http.post('Company/Update',{
            
            'Name':Name,
            'Address':Address,

            'TAX_ID':TAX_ID,
            'id':1,
            'Bank_Address':Bank_Address,
            
            'Bank_Name':Bank_Name,
            
            'IBAN':IBAN,
            
            'Bic':Bic,

            
            'Image':file,
            
        }).then(res=>{

            if (res.status===200) {
                console.log(res.data);
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
                        <img src={file ? file: avatar} alt="" />
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
                                <button type='SUBMIT'>update</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
