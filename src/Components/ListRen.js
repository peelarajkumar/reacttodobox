import React from 'react'

export const ListRen = () => {
const names =['Teja','Raju','Janu','Paul'];
const table = [0,1,2,3,4,5,6,7,8,9];
const res = table.map((n)=>n*2)
const emp = names.map((nam)=><h2>{nam}</h2>)




  return (
    <div>
        <center>
        <p>
            {names.map((nam)=><h2>{nam}</h2>)}
        </p>
        <p>{emp}</p>
        <h3>{table}</h3>
        <h4>{console.log(typeof(table))}</h4>
        <h3>{res}</h3>
        
        </center>
        
    </div>
  )
}

