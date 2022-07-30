import React, { useState, useEffect } from "react";
import "./usestate.css"
const HookuseState = () => {
   const initialData = 15;
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
    
  });

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="v">
        <button className="button button1"  onClick={()=> setMyNum(myNum+1)} >+ve</button>
         <button className="button button2"  onClick={() => (myNum > 0 ? setMyNum(myNum - 1):setMyNum(0))}>-ve</button>
         </div>
      </div>
    </>
  );
};

export default HookuseState;