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

const Doctor=(props)=>{
    const [data, setDATA]=useState('');
    const navigate = useNavigate();


    // const [get, setget] = useState('');
    useEffect(() => {
         http.get('Dashboard/Doctor/Get').then(
            res=>{
                setDATA(res.data)
                // console.log(res.data);
            }
        )
    
    }, []);




    const handel_delete=(e)=>{

        http.post('Dashboard/Doctor/Delete',{
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
  { field: 'name', headerName: 'Name', width: 200,renderCell:(data)=>{
      return(
          <div className="img_name">

              <span>{data.row.name}</span>
              <img src={data.row.image} alt="" />
          </div>

      )
    } },
    { field: 'email', headerName: 'email', width: 300 },
  { field: 'Specialty', headerName: 'Specialty', width: 150 },
  { field: 'Address', headerName: 'Address', width: 250 },
  { field: 'Experience', headerName: 'Experience', width: 250 },
  {field:'action',headerName:"Action",width:200,
    renderCell:(props)=>{
        return(
                
            <div className="action">
                <button><Link to={`/Edit-Company/${props.row.id}`}>View</Link></button>
                <button className="print" ><Link  to={`/Print-Comapny/${props.row.id}`}>Print</Link></button>

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
                    <div className="add_new_user">
                        <span className="title">add new Doctor</span>
                        <span><Link to="/New_Doctor">add new</Link></span>
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
export default Doctor;