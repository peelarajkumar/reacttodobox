import React from 'react'

export default function JSX() {
  return React.createElement('div',null,

  React.createElement('h3',{className:'dummyclass'},React.createElement('h3',null,"This is JSX Example"))
  )
}
