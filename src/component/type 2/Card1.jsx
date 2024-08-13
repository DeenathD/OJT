import React from 'react'
import './card1.css'
export default function Card1(props) {
  return (
    <div className='section' onClick={props.onClick}>
        <h3 className="describe">{props.name}
        </h3>
    </div>
  )
}
