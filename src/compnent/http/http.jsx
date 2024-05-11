import axios from "axios";
const http=axios.create({
        baseURL:'http://127.0.0.1:8000/',
        headers:{
            'X-Requested-With':'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin':'*',
            'mode': 'no-cors',
        },
        // responseType:'json',
        withCredentials:false
        
    });
export  default http ;     