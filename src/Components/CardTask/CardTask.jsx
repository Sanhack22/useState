import React from 'react'
import './CardTask.css'

export const CardTask = (props) => {
  return (
    <div className='CardTask'>
      <div className='divTitle'><h3>{props.title}</h3></div>
      <div className='divDescription'><p>{props.description}</p></div>
      <div onClick={props.funcion} className='divBoton'><button ref={props.refs}>{props.text}</button></div>
        
        
        
    </div>
  )
}
