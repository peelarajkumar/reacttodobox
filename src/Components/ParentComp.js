import React from 'react'
import { ChildComp } from './ChildComp'
import { useState } from 'react'

export default function ParentComp() {
    const [name,setName] = useState('Hello Raj')

    function childEvent(){
        setName('Hello Bunny')
        alert(`Good Morning ${name}`)
        
    }

  return (
    <div>
<h1>ParentComp</h1>
<ChildComp sendevent={childEvent}></ChildComp>
<h1>the parent comp holds{name}</h1>
    </div>
    
  )
}
