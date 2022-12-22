import React from 'react'
import { useState } from 'react'

export const Hooks = (props) => {
const [name,setName] = useState('Hai Before');
const [count,setCount] = useState(0);

function changeHook(){
    setCount(count+1);
}

  return (
    <div>
<center>
        <h2>{name}</h2>
        <h3>The count is {count}</h3>
        <button onClick={()=>{setName('Hai After')}}>Change Caption</button>
        <button onClick={changeHook}>Change Count</button>
        </center>
        
    </div>
  )
}
