import React, { useState } from "react";
import "../style/Frame.css";
import { ImBin } from "react-icons/im";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import { userData } from '../data';
import Frame4 from "./Frame4";

const Frame = () => {
    const [data,setData] = useState(userData[0])
    const [event,setEvent] = useState('')
    const [date,setDate] = useState('')
    const [color,setColor] = useState(true)

    const eventComp=()=>{
        if(event && date){
        alert('Event has been completed')
        setColor(!color)
        }else alert('⚠️ Enter event and date')
       
    }
    const handleDel=()=>{
        alert('event has been deleted')
        setColor(!color)
        setDate('')
        setEvent('')
    }
  return (
    <div className="frame">
      <div className="topbar">
        <span style={{cursor:'pointer',color:color?'#F28482':'#07e828'}} onClick={eventComp}>
          <IoIosCheckmarkCircleOutline />
        </span>
        <div >
          <ImBin style={{cursor:'pointer'}} onClick={()=>handleDel()}/>
          <IoCloseSharp />
        </div>
      </div>
      <Frame2 event={event} color={color} date={date} setDate={setDate} setEvent={setEvent} /> 
      <Frame3 data={data} setData={setData}/>
      <Frame4 data={data}/>
    </div>
  );
};

export default Frame;
