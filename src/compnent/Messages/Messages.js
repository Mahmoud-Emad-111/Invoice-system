import React, { useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import Nav_bar from "../nav_bar/Nav_bar";
import Side_bar from "../side_bar/side_bar";
import "../users/users.css"
import img from "../users/ma.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import http from "../http/http";
import   {useNavigate}  from "react-router-dom";

const Messages=(props)=>{
    const [data, setDATA]=useState('');
    const navigate = useNavigate();


    // const [get, setget] = useState('');
    useEffect(() => {
         http.get('Dashboard/Contact/Get').then(
            res=>{
                setDATA(res.data)
                // console.log(res.data);
            }
        )
    
    }, []);
console.log(data);



    const handel_delete=(e)=>{
        // console.log(e);
        http.post('Dashboard/Contact/Delete',{
            'id':e,
        }).then(
            res=>{
                if (res.status===200) {
                    navigate('/');
                }
            }
        )

    }
    const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'Name', headerName: 'Name', width: 200 },
    { field: 'Phone', headerName: 'Phone', width: 200 },
    { field: 'Email', headerName: 'Email', width: 200 },
    { field: 'Message', headerName: 'Message', width: 400 },
    { field: 'Date', headerName: 'Date', width: 100 },

  {field:'action',headerName:"Action",width:400,
    renderCell:(props)=>{
        return(
                
            <div className="action">
  
                <button key={data.id} onClick={()=>handel_delete(props.row.id)}>Delete</button>
            </div>
        )
    }

    }
];
    return(
        <div className={`main_users ${props.color===false ? 'dark' : ''}`} id="body">
            
                <Side_bar color={props.color}  handel_color={props.handel_color} handel_side={props.handel_side}/>
            
            <div className="nav contener user_list_" id="body"> 
                <Nav_bar color={props.color} handel_color={props.handel_color} handel_side={props.handel_side}/>
                <div className={`table ${props.color===false ? 'dark' : ''}`} id="body">
                    {/* <div className="add_new_user">
                        <span className="title">add new Doctor</span>
                        <span><Link to="/New_Doctor">add new</Link></span>
                    </div> */}
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
export default Messages;