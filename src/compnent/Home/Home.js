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

    const [Company, setCompany]=useState('');
    const [Invoices, setInvoices]=useState('');

    // const [get, setget] = useState('');
    useEffect(() => {
         http.get('/Company/company_count').then(
            res=>{
                setCompany(res.data.data)
                // console.log(res.data.data);
            }
        )
        http.get('/Invoice/Invoices_count').then(
            res=>{
                setInvoices(res.data.data)
                // console.log(res.data.data);
            }
        )

    }, []);

    return(
        <div className={`home ${props.color===false ? 'dark' : ''} row g-4 `}>
            
                <Side_bar color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>

            
            <div className="contener_home  g-4 mb-4" id="body">
                <Nav_bar color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
                <div className="main_carts  ">

                    <div className="cart"><Link to="/Company"><Cart type="users" title='Company' count={Company.company}/></Link></div>
                    <div className="cart "><Link to="/Companies-archive"><Cart title='Company Archive' count={Company.company_deleted} type="orders"/></Link></div>
                    <div className="cart "><Link to="/Invoice"><Cart type="earnings" title='Invoices' count={Invoices.invoice}/></Link></div>
                    <div className="cart "><Link to="/Invoice-archive"><Cart type="balance"  title='Invoices Archive' count={Invoices.invoice_deleted} /></Link></div>
                </div>
                {/* <div className="charts row g-4 mb-4">
                    <Feature/>
                    <Chart/>
                </div> */}
                {/* <div className="list">
                    <List color={props.color}/>
                </div> */}
            </div>
        </div>
    )
}
export default Home