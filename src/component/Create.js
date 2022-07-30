import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
     const history=useNavigate();
     const [firstName, setFirstName]= useState('');
     const [lastName, setLastName]= useState('');
     console.log(firstName);
     console.log(lastName);
    
     const sendDataToApi=()=>{
 axios.post(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud`,{firstName,lastName}
 ,alert('data added succesfully')
 ).then(()=>{history('/readdata')})
}

  return (
    <div>
     <div class="row" style={{paddingTop:100, paddingLeft:110}}>
  <div class="col">
    <input type="text"
    class="form-control" 
    onChange={(e)=>setFirstName(e.target.value)}
    placeholder="First name" 
    aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" 
    class="form-control"
    onChange={(e)=>setLastName(e.target.value)}
     placeholder="Last name"
      aria-label="Last name"/>
  </div>
  <div class="col">
    <button type="submit"
     class="btn btn-primary"
     onClick={sendDataToApi} 
     >Submit user</button>
  </div>
</div>
    </div>
  )
}

export default Create
