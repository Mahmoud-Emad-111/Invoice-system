import React, { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Nav_bar from "../nav_bar/Nav_bar";
import Side_bar from "../side_bar/side_bar";
import "../users/users.css"
import img from "../users/ma.jpg";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";

import { useState } from "react";
import http from "../http/http";

export default function Invoice_archive(props) {
    const [data, setDATA]=useState('');
    
    useEffect(() => {
        http.get('/Invoice/Get_deleted').then(
           res=>{
               setDATA(res.data.data)
               // console.log(res.data.data);
           }
       )   
   }, []);


   const handel_restore=(id)=>{
        http.post('/Invoice/Restore',{
            'id':id,
        }).then(
            res=>{
                if (res.status==200) {
                    window.location.reload();
                }
            }
        )
   }

   const handel_delete=(id)=>{
       
    http.post('/Invoice/Destroy',{
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
               <button onClick={()=>handel_restore(data.row.id)}>Restore</button>
               <button key={data.id} onClick={()=>handel_delete(data.row.id)}>Delete</button>
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
                          <span className="title" style={{color:'red' }}>Deleted Invoices <MdDeleteForever color="red" size={40}/></span>
                          {/* <span><Link to="/New_Company">add new</Link></span> */}
                      </div>
                      <DataGrid
                          rows={data}
                          columns={columns}
                          pageSize={8}
                          rowsPerPageOptions={[2]}
                        //   checkboxSelection
                      />
                  </div>
             
             
             
              </div>
              
        </div>
      )
  
}
