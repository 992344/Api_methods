
import FetchData from './component/FetchData';
import Navbar from './component/Navbar';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Getuser from './component/Getuser';
function App() {

  return (
   <>
   <Navbar/>
   <Routes>
   <Route exact path="/getdata" element={<FetchData/>}/>
   <Route exact path="/getuser" element={<Getuser/>}/>
 </Routes>
   </>
  );
}

export default App;
