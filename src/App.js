import React,{useState} from "react";
import "./style.css";

const  App=()=> {

  let time=new Date().toLocaleTimeString();

  const [currentTime,setTime]=useState(time);
   const updateTime=()=>{
    time=new Date().toLocaleTimeString();
    setTime(time);
   };
   setInterval(updateTime,1000)
  return (
   <>
   <h1>Digital Clock</h1>
   <h1>{currentTime}</h1>
   {/* <button onclick={updateTime}>current time</button> */}
   </>
  );
}
export default App;