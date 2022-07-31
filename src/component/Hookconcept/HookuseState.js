import React, { useState, useEffect } from "react";
import "./usestate.css"
const HookuseState = () => {
   const initialData = 15;

   const [toggle, setToggle] = useState(false);

  const [myNum, setMyNum] = useState(0);
  const [myvalue, setMyValue]=useState("my name is vaibhav mali")
const changename=()=>{
  let name =myvalue;
  if(name==="my name is vaibhav mali"){
  setMyValue("may name is ahish");}
  else{
    setMyValue("my name is vaibhav mali")
  }
}

   useEffect(() => {
  //   document.title = `Chats(${myNum})`;
    //changename();
   });


  return (
    <>
      <div className="center_div">
        <p>{myvalue}</p>
        <p>{myNum}</p>
        <div className="v">
        <button className="button button1"  onClick={()=> setMyNum(myNum+1)} >+ve</button>
         <button className="button button2"  onClick={() => (myNum > 0 ? setMyNum(myNum - 1):setMyNum(0))}>-ve</button>
{/* <button className="axlscs" onClick={()=>setMyValue("may name is ahish")} > button</button> */}
<button className="axlscs" onClick={changename} > button</button>


         </div>
      </div>
    </>
  );
};

export default HookuseState;