import React, { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Nav_bar from "../nav_bar/Nav_bar";
import Side_bar from "../side_bar/side_bar";
import "./users.css"
import img from "./ma.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import http from "../http/http";
const Users=(props)=>{
    const [data, setDATA]=useState('');

    // const [get, setget] = useState('');
    useEffect(() => {
         http.get('/Company/Get').then(
            res=>{
                setDATA(res.data.data)
                // console.log(res.data.data);
            }
        )
    
    }, []);




    const handel_delete=(e)=>{
        console.log(e);
        http.post('/Company/Soft_delete',{
            'id':e,
        }).then(
            res=>{
                if (res.status==200) {
                    window.location.reload();
                }
            }
        )

    }
    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 200,renderCell:(data)=>{
      return(
          <div className="img_name">

              <img src={'http://127.0.0.1:8000/images/'+data.row.Image} alt="" />
              <span>{data.row.Name}</span>
          </div>

      )
  } },
  { field: 'Address', headerName: 'Address', width: 150 },
  { field: 'TAX_ID', headerName: 'TAX ID', width: 250 },
  { field: 'Bank_Address', headerName: 'Bank Address', width: 120 },
    
  {field: 'Bank_Name',headerName: 'Bank Name',width: 160,},
  {field: 'IBAN',headerName: 'IBAN',width: 100,},
  {field: 'Bic',headerName: 'Bic',width: 100,},
  {field:'action',headerName:"Action",width:200,
    renderCell:(props)=>{
        return(
                
            <div className="action">
                <button><Link to={`/Edit-Company/${props.row.id}`}>View</Link></button>
                <button key={data.id} onClick={()=>handel_delete(props.row.id)}>Delete</button>
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
                        <span className="title">add new Company</span>
                        <span><Link to="/new">add new</Link></span>
                    </div>
                    <DataGrid
                        rows={data}
                        columns={columns}
                        pageSize={8}
                        rowsPerPageOptions={[2]}
                        // checkboxSelection
                    />
                </div>
           
           
           
            </div>
            
      </div>
    )
}
export default Users;