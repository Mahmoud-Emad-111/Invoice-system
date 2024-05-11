import React from "react";
import Nav from "../nav_bar/Nav_bar.js";
import Site from "../side_bar/side_bar.js";
import "./New.css";
import {VscEye} from "react-icons/vsc";
import {ImUpload} from "react-icons/im";
import { useEffect, useState } from "react";
import http from "../http/http.jsx";
import toast, { Toaster } from 'react-hot-toast';
// import { useForm } from "react-hook-form";


import avatar from "./avtart.jpg";
const New_Doctor=(props)=>{
    // const { register, handleSubmit,  watch,formState: { errors } } = useForm();
    const [type,settype]=useState("");
    const handel_password=()=>{
        settype(!type)
    }
    const [file, setfile] = useState(false);
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Specialty, setSpecialty] = useState('');
    const [Address, setAddress] = useState('');
    const [Experience, setExperience] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirm_password] = useState('');

    
    const notify = () => toast.success('The Doctor has been added');
    const notify_error = () => toast.error('Plase try agin later');
    
    const [ErrorList, setErrorList] = useState({
        Name:'',
        Email:'',
        Specialty:'',
        Address:'',
        Image:'',
        Experience:'',
        password:'',
        confirm_password:''
    });
    const p_Style = {

        color: 'red',
      
      
      };
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(file);
        http.post('Dashboard/Doctor/Register',{
            
            'image':file,
            'name':Name,
            'email':Email,

            'Specialty':Specialty,
            'Address':Address,
            'Experience':Experience,
            'password':password,
            'confirm_password':confirm_password,
            
        }).then(res=>{
            console.log(res);
            if (res.status===200) {
                notify();
                setfile(false);
                setName('');
                setEmail('');
                setAddress('');
                setSpecialty('');
                setExperience('');
                setPassword('');
                setConfirm_password('')
            }
        }).catch(
            res=>{
                console.log(res);
                if(res.response.status===422){
                    console.log(res.response.data.errors);
                    const errors=res.response.data.errors;
                    setErrorList({
                        Name:errors.name,
                        Email:errors.email,
                        Address:errors.Address,
                        Image:errors.image,
                        Experience:errors.Experience,
                        password:errors.password,
                        confirm_password:errors.confirm_password,
                        Specialty:errors.Specialty,
                        // IBAN:errors.IBAN,
                    })
                    
                }else{
                    notify_error()
                }
            }
        )   
        
    }

    return(
        <div className={`new ${props.color ==false ? 'dark' :''}`}>
            <Toaster />
            
            
            
            <Site color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
            <div className="contener" id="body">
                <Nav color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
                <div className="top">
                    <h1>add new Doctor</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src={file ? URL.createObjectURL(file): avatar} alt="" />
                        <p className="error">{ErrorList.Image && ErrorList.Image }</p>

                    </div>
                    <div className="right">
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <div className="form">
                                <div className="input_form">
                                    <label htmlFor="file" className="label_file"> image: <ImUpload className="upload"/></label>

                                    <input type="file"  id="file" onChange={e=>setfile(e.target.files[0])} style={{display:"none"}}/>
                                </div>
                                <div className="input_form">
                                    <label>Name</label>
                                    <input type="text" name='Name' value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Name"/>
                                    <p className="error">{ErrorList.Name && ErrorList.Name }</p>
                                </div>
                                <div className="input_form">
                                    <label>email</label>
                                    <input type="text" name='email' value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="email"/>
                                    <p className="error">{ErrorList.Email && ErrorList.Email }</p>
                                
                                </div>
                                <div className="input_form">
                                    <label>Specialty</label>
                                    <input type="text" onChange={(e)=>setSpecialty(e.target.value)} value={Specialty} placeholder="Specialty"/>
                                    <p className="error">{ErrorList.Specialty && ErrorList.Specialty }</p>

                                </div>
                                <div className="input_form">
                                    <label>Address</label>
                                    <input type="text" onChange={(e)=>setAddress(e.target.value)} value={Address} placeholder="Address"/>
                                    <p className="error">{ErrorList.Address && ErrorList.Address }</p>

                                </div>

                                <div className="input_form">
                                    <label>Experience</label>
                                    <input type="text" onChange={(e)=>setExperience(e.target.value)} value={Experience} placeholder="Experience"/>
                                    <p className="error">{ErrorList.Experience && ErrorList.Experience }</p>

                                </div>

                                <div className="input_form password">
                                    <label>Password</label>
                                    <input type={type==true ? 'text': "password" }  value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" id="password"/>
                                    <VscEye onClick={handel_password} className="eye_password"/>
                                    <p className="error">{ErrorList.password && ErrorList.password }</p>

                                </div>

                                <div className="input_form password">
                                    <label>confirm password</label>
                                    <input type={type==true ? 'text': "password" }  value={confirm_password} onChange={(e)=>setConfirm_password(e.target.value)} placeholder="confirm password" id="password"/>
                                    <VscEye onClick={handel_password} className="eye_password"/>
                                    <p className="error">{ErrorList.confirm_password && ErrorList.confirm_password }</p>

                                </div>


                                {/* <div className="input_form ">
                                    <label>Zip</label>
                                    <input type='number' placeholder="ZIP" value={ZIP} name="ZIP" onChange={(e)=>setZIP(e.target.value)} />

                                </div> */}


                                <button type='SUBMIT'>sent</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default New_Doctor;