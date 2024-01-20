import axios from "axios";
const http=axios.create({
        baseURL:'http://127.0.0.1:8000/api/',
        headers:{
            'X-Requested-With':'XMLHttpRequest',
            "Content-Type": "aplication/json" ,
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data',
            // 'mode': 'no-cors',
        },
        responseType:'json',
        withCredentials:true
        
    });
export  default http ;     