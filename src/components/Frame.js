import React, { useState } from "react";
import "../style/Frame.css";
import { ImBin } from "react-icons/im";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import Frame2 from "./Frame2";
import Frame3 from "./Frame3";
import { userData } from '../data';
import Frame4 from "./Frame4";
import DateTime from "./DatePicker";
const Frame = () => {
    const [data,setData] = useState(userData[0])
  return (
    <div className="frame">
      <div className="topbar">
        <span>
          <IoIosCheckmarkCircleOutline />
        </span>
        <div>
          <ImBin />
          <IoCloseSharp />
        </div>
      </div>
      <Frame2/> 
      <Frame3 data={data} setData={setData}/>
      <DateTime/>
      <Frame4 data={data}/>
    </div>
  );
};

export default Frame;
