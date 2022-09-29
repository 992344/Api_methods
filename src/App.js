import FetchData from "./component/FetchData";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Getuser from "./component/Getuser";
import Create from "./component/Create";
import Readdata from "./component/Readdata";
import Update from "./component/Update";
import Home from "./component/Home";
import HookuseState from "./component/Hookconcept/HookuseState";
import Login from "./component/Login";
import { createContext, useState } from "react";
import Useref from "./component/Hookconcept/Useref";

export const UserContext=createContext();
function App() {
  const [name,setName]=useState('vaibhav')
  return (
    <div className="main">
      <>
        <UserContext.Provider value={name} >
        <Navbar name={name} />
          </UserContext.Provider>
        <Routes>
          <Route exact path="/getdata" element={<FetchData  />} />
          <Route exact path="/getuser" element={<Getuser />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/readdata" element={<Readdata />} />
          <Route exact path="/useref" element={<Useref />} />
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/usestate" element={<HookuseState />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </>
    </div>
  );
}

export default App;

