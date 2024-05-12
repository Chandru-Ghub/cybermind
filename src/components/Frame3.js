import React, { useState } from 'react'
import { FaRegNoteSticky } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { userData } from '../data';
const Frame3 = ({data,setData}) => {
    const [toggle,setToggle] = useState(false)
    const handleClick=(content)=>{
        console.log(content.name)
        setData(content)
        setToggle(!toggle)
    }
  return (
    <div className='ff3'>
    <div className='frame3'>
        <span>
        <span> <IoPersonOutline /></span>
        <p>Assign to:</p>
        </span>
        <div className="assing">   
                
                    <form >
                        <div className="img">
                        <img src={data.img} alt="" />
                        </div>
                        <div className='list'>{data.name}</div>
                        <span onClick={()=>setToggle(!toggle)}><IoMdArrowDropdown /></span>
                        {toggle?<div className='mem'>{
                            userData.map((a)=>
                                <div onClick={()=>handleClick(a)} className="img">
                                    <img src={a.img} alt="" />
                                    <p>{a.name}</p>
                                </div>
                            )}</div>:''}
                    {/* <button>ADD</button> */}
                </form>
        </div>
        
    </div>
    <div className="note">
            <span>
                <span>
                <FaRegNoteSticky />
                </span>
                <p>Note:</p>
            </span>
            <div className='nums'>
                <div>88888888888</div>
                <p>www.flowervendor.com</p>
            </div>
        </div>
    </div>
  )
}

export default Frame3