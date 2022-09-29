import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Readdata = () => {
  const history = useNavigate();
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud`)
      .then((getdata) => {
        setApiData(getdata.data);
      });
  }, []);
  const setData = (id, firstName, email, password) => {
    // localStorage.setItem("ID",id);
    // localStorage.setItem("firstName",firstName);
    // localStorage.setItem("email",email);
    // localStorage.setItem("password",password);
    history.push({
      pathname: "/update",
      // search: '?query=abc',
      state: { id: id, firstName: firstName, email: email, password: password },
    });
  };
  const updatedData = () => {
    axios
      .get(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud`)
      .then((getdata) => {
        setApiData(getdata.data);
        // console.warn(getdata.data);
      });
  };
  const onDelete = (id) => {
    axios
      .delete(`https://62e4a7d3c6b56b4511881b6d.mockapi.io/crud/${id}`)
      .then(() => {
        updatedData();
        alert("you want delete perman hb hb  ??");
      });
  };
  return (
    <div style={{ paddingTop: 100, paddingLeft: 110, paddingRight: 80 }}>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">email</th>
            <th scope="col">password</th>
            <th scope="col">Updata</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {apiData.reverse().map((data) => {
            return (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.email}</td>
                <td>{data.password}</td>
                <td>
                  <Link to="/update">
                    <button
                      type="button"
                      onClick={() =>
                        setData(data.id, data.firstName, data.email)
                      }
                      class="btn btn-primary"
                    >
                      Update
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    type="button"
                    onClick={() => onDelete(data.id)}
                    class="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Readdata;
