import React from 'react'
import './Boton.css'
export const Boton = (props) => {
  return (
    <button onClick={props.funcion} id={props.id}>{props.text}</button>

  )
}
