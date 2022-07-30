
import FetchData from './component/FetchData';
import Navbar from './component/Navbar';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Getuser from './component/Getuser';
import Create from './component/Create';
import Readdata from './component/Readdata';
import Update from './component/Update';
import Home from './component/Home';
function App() {

  return (
    <div className='main'>
   <>
   <Navbar/>
   <Routes>
   <Route exact path="/getdata" element={<FetchData/>}/>
   <Route exact path="/getuser" element={<Getuser/>}/>
   <Route exact path="/create" element={<Create/>}/>
   <Route exact path="/readdata" element={<Readdata/>}/>
   <Route exact path="/update" element={<Update/>}/>
   <Route exact path="/home" element={<Home/>}/>
 </Routes>
   </>
   </div>
  );
}

export default App;
