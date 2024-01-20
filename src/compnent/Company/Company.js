import React, { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Nav_bar from "../nav_bar/Nav_bar";
import Side_bar from "../side_bar/side_bar";
import "../users/users.css";
// import img from "./ma.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import http from "../http/http";
const Company=(props)=>{
    const [data, setDATA]=useState('');

    // const [get, setget] = useState('');
    useEffect(() => {
         http.get('Invoice/Get').then(
            res=>{
                setDATA(res.data.data)
            }
        )
    
    }, []);

    const handel_delete=(id)=>{
       
        http.post('/Invoice/Soft_delete',{
            'id':id,
        }).then(
            res=>{
                if (res.status==200) {
                    window.location.reload();
                }
            }
        )
    
    }
    


const columns = [
  {field: 'id', headerName: 'ID', width: 70 },
  {field: 'Item', headerName: 'Item', width: 200},
  {field: 'Qty', headerName: 'Qty', width: 200},
  {field: 'Rate', headerName: 'Rate', width: 150 },
  {field: 'Amount', headerName: 'Amount', width: 200 },
  {field: 'Due_Date',headerName: 'Due_Date',width: 160,},
  {field: 'Invoice_Date',headerName: 'Invoice_Date',width: 100,},

    
  {field:'Action',headerName:"Action",width:200,
    renderCell:(data)=>{
        return(
                
            <div className="action">
                <button><Link to={`/Edit-invoice/${data.row.id}`}>View</Link></button>
                <button className="print">Print</button>
                <button onClick={()=>handel_delete(data.row.id)}>Delete</button>
            </div>
        )
    }

    }
];
    return(
        <div className={`main_users ${props.color==false ? 'dark' : ''}`} id="body">
            
                <Side_bar color={props.color}  handel_color={props.handel_color} handel_side={props.handel_side}/>
            
            <div className="nav contener user_list_" id="body"> 
                <Nav_bar color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
                <div className={`table ${props.color==false ? 'dark' : ''}`} id="body">
                    <div className="add_new_user">
                        <span className="title">add new Invoice</span>
                        <span><Link to="/New_Company">add new</Link></span>
                    </div>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[2]}
                        checkboxSelection
                    />
                </div>
           
           
           
            </div>
            
      </div>
    )
}
export default Company;