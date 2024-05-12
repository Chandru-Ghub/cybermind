import React, { useState } from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import * as uuid from 'uuid'
import "../style/Frame4.css";
import { ImBin } from "react-icons/im";
import { userData } from '../data';
import { IoCloseSharp } from "react-icons/io5";
import { MdEdit,MdUpdate } from "react-icons/md";
const Frame4 = ({data}) => {
    const [comment,setComment] = useState('')
    const [list,setList] = useState([])
    const [update,setUpdate]  =useState(false)
    const [change,setChange]  =useState(false)
    const iid = uuid.v4()

    const handleSubmit=(e)=>{
        e.preventDefault()
        if(change){
            let res = list.map((a)=>a.id==update?{
            img:a.img,name:a.name,id:a.id,comment:comment}:{...a})
            setList(res)
            setChange(false)
            setComment('')
        }
        else{
        setList([...list,{id:iid,name:data.name,img:data.img,comment:comment}])
        setComment('')
        }
    }
    const handleDelete=(id)=>{
        let res = list.filter((a)=>a.id != id)
        setList(res)
    }
    const handleEdit=(res)=>{
        console.log(res)
        setUpdate(res.id)
        setComment(res.comment)
        setChange(true)
    }
    // const handleBlur=()=>{
    //     setTimeout(()=>{
    //         setShow(!show)
    //     },1000)
    // }
  return (
    <div className='frame4'>
        <p>Comments</p>
       <div className="scroll">
       <div className='cmts'>
        {
        
            list.map((a)=>{
                return(
                    <div className='mycmt'>
                       
                        <div>
                            <div className='img' style={{marginLeft:'-10px'}}>
                                <img src={a.img} alt="" />
                            </div>
                            <div className="namecmt">
                                <div>{a.name}</div>
                                <p>{a.comment}</p>
                            </div>
                        </div>
                        <span>
                        <span className='s1'  onClick={()=>handleEdit(a)}><MdEdit /></span>
                        <span className='s2' onClick={()=>handleDelete(a.id)}><ImBin /></span>
                        </span>
                    </div>
                )
            })
        }
        </div> 
       </div>

        <div className="send">
            <div className='img'>
                <img src={data.img} alt="" />
            </div>
            <form onSubmit={handleSubmit} >
                <input autoFocus value={comment} type="text" onChange={(e)=>setComment(e.target.value)}/>
                <button type='submit'>{ !change?<LuSendHorizonal /> :<MdUpdate />}</button>
            </form>
        </div>    
    </div>
  )
}

export default Frame4