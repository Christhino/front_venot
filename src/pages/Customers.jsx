/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect,useState} from 'react'
import axios from 'axios';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
export default function Customers() {
    const[client,fetchClient]=useState([]);
   
    const getData =()=>{
        fetch('http://localhost:9098/API/Banking/client')
        .then((res) =>  res.json())
        .then((res) => {
            console.log(res)
            fetchClient(res.data)
        })
    }
    useEffect(() => {
       getData()
    }, [])
    return (
        <div>
            <h2 className="page-header">
                Client
            </h2>
            <div className="row">
           
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Button variant="outlined" href="#outlined-buttons">
                               <AddCircleOutlineIcon/> Link
                            </Button>
                              <table>  
                                
                                  <thead>
                                    <tr className >
                                        <th>Numero Client</th> 
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>Adress</th>
                                        <th>Numero phone</th>
                                        <th>Numero de compte</th>
                                        <th>Debut Solde</th>
                                    </tr>
                                  </thead>
                                  <tbody>              
                                            {client.map((item ,i) =>{
                                                return (               
                                                  <tr>     
                                                    <th style={{ textAlign:"center"}}key={i}>{item.id_client}</th>
                                                    <td >{item.nom}</td>
                                                    <td>{item.prenom}</td>
                                                    <td >{item.adress}</td>
                                                    <td >{item.numero_phone}</td>
                                                    <td style={{ textAlign:"center"}}>{item.num_compte}</td>
                                                    <td>{item.solde} Ar</td>
                                                  </tr>  
                                                ) 
                                            })}
                                                                                               
                                  </tbody>
                              </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
