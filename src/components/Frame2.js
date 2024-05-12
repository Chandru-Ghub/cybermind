import React, { useState } from 'react'
const Frame2 = ({color,event,date,setDate,setEvent}) => {

  return (
    <div className='frame2'>
        <div className="inp" >
            <input value={event} style={{color:!color?'#039d22':'#E92C2C'}} onChange={(e)=>setEvent(e.target.value)} type="text" placeholder='Enter event' />
        </div>
        <div className="cal">
        <input value={date} onChange={(e)=>setDate(e.target.value)} type="text" placeholder='Enter Date and time' />
        </div>
    </div>
  )
}

export default Frame2