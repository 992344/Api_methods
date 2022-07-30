import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Readdata = () => {
     const [apiData, setApiData]=useState([])
useEffect(()=>{
     axios.get(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud`)
     .then((getdata)=>{setApiData(getdata.data);})
},[])
const setData=(id, firstName, lastName)=>{
     localStorage.setItem("ID",id);
     localStorage.setItem("firstName",firstName);
     localStorage.setItem("lastName",lastName);
}
const updatedData= ()=>{
     axios.get(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud`)
     .then((getdata)=>{setApiData(getdata.data);})
}
const onDelete=(id)=>{
     axios.delete(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud/${id}`)
     .then(()=>{
          updatedData();
          alert('deleted succesfully')
     })
}
  return (
    <div style={{paddingTop:100, paddingLeft:110,paddingRight:80}}>
     <table class="table" >
  <thead>
    <tr >
      <th scope="col">ID</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>  
      <th scope="col">Updata</th>  
      <th scope="col">Delete</th>  

    </tr>
  </thead>
  <tbody>
    
     {apiData.reverse().map((data)=>{
          return(
               <tr key={data.id}>
               <th scope="row">{data.id}</th>
               <td>{data.firstName}</td>
               <td>{data.lastName}</td>
               <td>
                    <Link to="/update">
                    <button type="button"
               onClick={()=>setData(data.id, data.firstName, data.lastName)}
               class="btn btn-primary">Update</button>
                    </Link>
              
               </td>
               <td>
               <button type="button" 
               onClick={()=>onDelete(data.id)}
               class="btn btn-danger">Delete</button>
               </td>
               </tr>
          )
     })} 
   
  </tbody>
</table>
    </div>
  )
}

export default Readdata
