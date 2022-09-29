import { useContext, useEffect, useState } from "react";
import React from "react";

function FetchData() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log("jesonn", json);
        const filteritem = json.filter((fItem) => {
          return fItem.id >= 50;
        });
        setData(filteritem);
      });
    // .catch(e=>{
    //   console.log("e",e)
    // }
    // )
  }, []);
  // const [api, setApi]=useState(data)

  // useEffect(()=>{const filteritem=data.filter((fItem)=>{
  //   return (fItem.id>=50)
  // });
  // setApi(filteritem);
  // },[data]);

  // console.log(api)

  console.log(data);

  return (
    <div className="App">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">
              <b>Id</b>
            </th>
            <th scope="col">title</th>
            <th scope="col">body</th>
            <th scope="col">body</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FetchData;
