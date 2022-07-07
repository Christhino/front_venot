import React, {useEffect,useState} from 'react'
const Retrait = () => {
    const[client,fetchClient]=useState([]);
   
    const getData =()=>{
        fetch('http://localhost:9098/API/Banking/retrait')
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
                Retrait
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                              <table>  
                                  <thead>
                                    <tr>
                                        <th>Numero retrait</th> 
                                        <th>Numero client</th>
                                        <th>Numero de compte</th>
                                        <th>Numero de cheque </th>
                                        <th>Montant</th>
                                        <th>Date </th>
                                    </tr>
                                  </thead>
                                  <tbody>              
                                            {client.map((item ,i) =>{
                                                return (               
                                                  <tr>     
                                                    <th style={{ textAlign:"center"}} key={i}>{item.id_retrait}</th>
                                                    <td style={{ textAlign:"center"}} >{item.id_client}</td>
                                                    <td style={{ textAlign:"center"}}>{item.num_compte}</td>
                                                    <td style={{ textAlign:"center"}}>{item.num_cheque}</td>
                                                    <td>{item.montant_retrait}</td>
                                                    <td>{item.date_retrait}</td>
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

export default Retrait
