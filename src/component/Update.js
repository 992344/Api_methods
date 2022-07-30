import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Update = () => {
     const history=useNavigate();
     const [firstName, setFirstName]= useState('');
     const [lastName, setLastName]= useState('');
   const [ID, setID] =useState(null)
    
     const sendDataToApi=()=>{
 axios.put(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud/${ID}`,{firstName,lastName}
 ,alert('data updated succesfully')
 ).then(()=>{history('/readdata')})
}
 useEffect(()=>{
     setFirstName(localStorage.getItem('firstName'));
     setLastName(localStorage.getItem('lastName'));
     setID(localStorage.getItem('ID'))
 },[])
console.log(ID);
  return (
    <div>
     <div className="row" style={{paddingTop:100, paddingLeft:110}}>
  <div className="col">
    <input type="text"
    id={ID}
    value={firstName}
    className="form-control" 
    onChange={(e)=>setFirstName(e.target.value)}
    placeholder="First name" 
    aria-label="First name"/>
  </div>
  <div className="col">
    <input type="text" 
     value={lastName}
    className="form-control"
    onChange={(e)=>setLastName(e.target.value)}
     placeholder="Last name"
      aria-label="Last name"/>
  </div>
  <div className="col">
    <button type="submit"
     className="btn btn-primary"
     onClick={sendDataToApi} 
     >Update</button>
  </div>
</div>
    </div>
  )
}

export default Update
