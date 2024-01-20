import React from 'react'
import './Print_Invoice.css';
export default function Print_Invoice() {
  return (
    <div className='Print_Invoice'>
        <div className='container'>
            <div className='head'>
                <div>
                   <h1>ADXA</h1>
                    <h3>
                        ADXA Software

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
                        <span>22 Dec 2023</span>
                    </div>
                    <div className='item_data'>
                        <span>Terms :</span>
                        <span>Due on Receipt</span>
                    </div>
                    <div className='item_data'>
                        <span>Due Date :</span>
                        <span>28 Dec 2023</span>
                    </div>
                </div>
            </div>
            <table>
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
                        <td>1</td>
                        <td>Monetization revenue from standard web banners. Google Nov 2023</td>
                        <td>1.00</td>
                        <td>$11,165.47</td>
                        <td>$11,165.47</td>
                    </tr>
                </tbody>
            </table>
            <ul className='foater'>
                <li>Thanks for your business.</li>
                <li>Payment issued via cheques or via bank transfer:</li>
                <li><h5>Beneficiary Name:</h5><span>ADXA</span></li>
                <li><h5>Bank Name:</h5> <span>Arab African International Bank</span></li>
                <li><h5>Bank Address:</h5> : <span>10’TH Of Ramadan</span></li>
                <li><h5>IBAN</h5> <span>EG050057008001150938510010101</span></li>
                <li><h5>Bic/Swift code:</h5><span>ARAIEGCXXXX</span></li>

            </ul>
        </div>
    </div>
  )
}
