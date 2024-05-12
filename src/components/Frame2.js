import React, { useState } from 'react'
const Frame2 = () => {
    const [value,setValue] = useState(new Date())
  return (
    <div className='frame2'>
        <div className="inp">
            <input type="text" />
        </div>
        <div className="cal">
            <input type="time"/>
        </div>
    </div>
  )
}

export default Frame2