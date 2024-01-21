import React, { useEffect, useState,useRef } from 'react'
import './Print_Invoice.css';
import http from '../http/http';
import { useParams } from 'react-router-dom';
import {useReactToPrint} from 'react-to-print';
// import { Button } from '@mui/material';


export default function Print_Invoice() {

    const component_pdf=useRef();

    const [data, setDATA]=useState('');
    const [Company, setCompany] = useState('');
    const { id } = useParams();
        // const [get, setget] = useState('');
    useEffect(() => {
         http.post('Invoice/Invoice_print',{
            'id':id,
         }).then(
            res=>{
                setDATA(res.data.data)
                setCompany(res.data.data.company)
            }
        )
    
    }, []);
    
    const handel_print=useReactToPrint({
        content:()=>component_pdf.current,
        documentTitle:'Userdate',
        // onAfterPrint:()=>alert('data save')
    })
    

  return (
    <div className='Print_Invoice' >
        <div className='container' >
            <div ref={component_pdf} style={{ width:'90%',margin:'10px auto' }}>
                
                <div className='head'>
                    <div>
                    <h1>{Company.Name}</h1>
                        <h3>
                            {Company.Name} Software

                        </h3>
                    </div>
                    <h2>INVOICE</h2>
                </div>
                <div className='main'>
                    <div className='left'>
                        <ul>
                            <li>Bill To</li>
                            <li><h4>JTS For E-commerce FZE LLC</h4></li>
                            <li>BLA-BR3-980</li>
                            <li>Ajman Boulevard Commercial,</li>
                            <li>Ajman, UNITED ARAB EMIRATES</li>

                        </ul>

                    </div>
                    <div className='right'>
                        <div className='item_data'>
                            <span>Invoice Date :</span>
                            <span>{data.Invoice_Date}</span>
                        </div>
                        <div className='item_data'>
                            <span>Terms :</span>
                            <span>Due on Receipt</span>
                        </div>
                        <div className='item_data'>
                            <span>Due Date :</span>
                            <span>{data.Due_Date}</span>
                        </div>
                    </div>
                </div>
                <table className='table_print'>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Item & Description</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.id}</td>
                            <td>{data.Item}</td>
                            <td>{data.Qty}</td>
                            <td>{data.Rate}</td>
                            <td>{data.Amount}</td>
                        </tr>
                    </tbody>
                </table>
                <ul className='foater'>
                    <li>Thanks for your business.</li>
                    <li>Payment issued via cheques or via bank transfer:</li>
                    <li><h5>Beneficiary Name:</h5><span>{Company.Name}</span></li>
                    <li><h5>Bank Name:</h5> <span>{Company.Bank_Name}</span></li>
                    <li><h5>Bank Address:</h5> : <span>{Company.Bank_Address}</span></li>
                    <li><h5>IBAN</h5> <span>{Company.IBAN}</span></li>
                    <li><h5>Bic/Swift code:</h5><span>{Company.Bic}</span></li>

                </ul>

            </div>

            <button className='btn_print' onClick={handel_print}>Print</button>

        </div>
    </div>
  )
}
