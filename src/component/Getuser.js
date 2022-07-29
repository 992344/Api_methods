import React, { useEffect, useState } from 'react'

const Getuser = () => {
     const [data , setData]= useState([])
useEffect (()=>{
     const url="https://jsonplaceholder.typicode.com/users"
     fetch(url).then(response=>response.json()).then(json=>{
          console.log("a",json);
          setData(json);

     })   
},[])

  return (
     <div className="App">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"><b>Id</b></th>
      <th scope="col">title</th>
      <th scope="col">Email</th>
    </tr>
  </thead>
  <tbody>
    {data.map((item)=>{
      return(
        <tr>
        <th scope="row">{item.id}</th>
        <td>{item.name}</td>
        <td>{item.username}</td>
      
      </tr>
      )
    })}
   

  </tbody>
</table>
    </div>
  )
}

export default Getuser