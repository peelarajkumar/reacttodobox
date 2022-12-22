import React, { useEffect, useState } from 'react'


export const HookUseEffect = () => {
    const [name,setName] = useState('Hello')
    useEffect(()=>{console.log('Hi im from useEffect')},[name])
  return (
    <div>
        <center>
        <h1>Welcome to Hook2 - useEffect</h1>
        <h2>{name}</h2>
        </center>
        
    </div>
  )
}
