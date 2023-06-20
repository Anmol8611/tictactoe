import React from 'react'
import './Box.css'

const Box = ({value, id, onClick}) => {
  return (
    <button key={id} className={`box ${value === 'x' ? 'x' : 'o'}`} onClick={onClick}>
        {value}
    </button>
  )
}

export default Box