import React, { useEffect, useState } from "react";
import Cart from "../cart/cart";
import Chart from "../charts/chart";
import Nav_bar from "../nav_bar/Nav_bar";
import Side_bar from "../side_bar/side_bar";
import Feature from "./features/features";
import List from "../list/List";
import { Link } from "react-router-dom";
import "./Home.css"
import http from "../http/http";
const Home=(props)=>{

    const [Data, setData]=useState({});
    useEffect(() => {
        http.get('Dashboard/Home/Get').then(
            res=>{
                setData(res.data)
                
            }
        )

    }, []);
    return(
        <div className={`home ${props.color===false ? 'dark' : ''} row g-4 `}>
            
                <Side_bar color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>

            
            <div className="contener_home  g-4 mb-4" id="body">
                <Nav_bar color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
                <div className="main_carts  ">

                    <div className="cart"><Link to="/Doctor"><Cart type="users" title='Doctors' count={Data.Doctors}/></Link></div>
                    <div className="cart "><Link to="/Users"><Cart title='Users' count={Data.Users} type="orders"/></Link></div>
                    <div className="cart "><Link to="/"><Cart type="earnings" title='Images' count={Data.Images} /></Link></div>
                    <div className="cart "><Link to="/Messages"><Cart type="balance"  title='Messages' count={Data.Messages}  /></Link></div>
                </div>

            </div>
        </div>
    )
}
export default Home