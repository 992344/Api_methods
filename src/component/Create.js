import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
     const history=useNavigate();
     const[user, setUser]= useState([]);
     const [firstName, setFirstName]= useState('');
     const [email, setEmail]= useState('');
     const [password, setPassword]= useState('');
     console.log(firstName);
     console.log(email);


    useEffect(()=>{
      axios.get(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud`)
      .then((getdata)=>{setUser(getdata.data);}) 
    },[])
     
     
    
    const sendDataToApi=()=>{
 axios.post(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud`,{firstName, email, password }
 ,alert('data added succesfully')
 ).then(()=>{history('/login')})
}

    
      user.map((userE)=>{
console.log(userE.email)
if(userE.email===email){
alert("please change email address it`s allready exist")
}

      })
  return (
    <div >
     <div class="row" style={{paddingTop:120, paddingLeft:500}}>
  <div class="col">
  <label for="exampleFormControlInput1" class="form-label">User Name</label>
    <input  type="text" style={{width: 300}}
    class="form-control" 
    onChange={(e)=>setFirstName(e.target.value)}
    placeholder="First name" 
    aria-label="First name"/>

<label for="exampleFormControlInput1" class="form-label">Email Address</label>
<input type="text" style={{width: 300}}
    class="form-control"
    onChange={(e)=>setEmail(e.target.value)}
     placeholder="EmailAddress"
      aria-label="Last name"/>
      

<label for="exampleFormControlInput1" class="form-label">PassWord</label>
<input type="text" style={{width: 300}}
    class="form-control"
    onChange={(e)=>setPassword(e.target.value)}
     placeholder="Password"
      aria-label="Last name"/>

  <div class="col" style={{paddingTop:10 ,paddingLeft:90 }}>
    <button type="submit"
     class="btn btn-primary"  
     onClick={sendDataToApi } 
     >Sign UP</button>
  </div>

  </div>
  
</div>
    </div>
  )
}

export default Create
