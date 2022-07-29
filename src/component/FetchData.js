
import { useEffect, useState } from 'react';
import React from 'react';


function FetchData() {
const [data , setData]= useState([])
  useEffect (()=>{
const url="https://jsonplaceholder.typicode.com/posts"
fetch(url).then(response=>response.json()).then(json=>{
  console.log("jesonn", json)
  setData(json)
})
.catch(e=>{
  console.log("e",e)
})
  },[])
const [api, setApi]=useState(data)

useEffect(()=>{const filteritem=data.filter((fItem)=>{
  return (fItem.userId=1)
});
setApi(filteritem);
},[]);



console.log(data);

  return (
    <div className="App">
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"><b>Id</b></th>
      <th scope="col">title</th>
      <th scope="col">body</th>
    </tr>
  </thead>
  <tbody>
    {api.map((item)=>{
      return(
        <tr>
        <th scope="row">{item.id}</th>
        <td>{item.title}</td>
        <td>{item.body}</td>
      
      </tr>
      )
    })}
   

  </tbody>
</table>
    </div>
  );
}

export default FetchData;