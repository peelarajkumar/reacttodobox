import React from 'react'
import { ListFunkChild } from './ListFunkChild'

export const ListFunK = () => {
    const heros =[{
        id:1,
        hname:'Ironman',
        weapon:'Ironman suit'
    },
    {
        id:2,
        hname:'Spiderman',
        weapon:'SpiderWeb'
    },{
        id:3,
        hname:'Hulk',
        weapon:'Big Fist'
    }]

    const avengers = heros.map((ranger)=>(<ListFunkChild key={ranger.id} ranger={ranger}></ListFunkChild>))
    
  return (
    <div>
        <h2>{avengers}</h2>
        
        
    </div>
  )
}
