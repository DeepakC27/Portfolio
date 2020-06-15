import React from 'react'
import './index.scss'

function Button(props) {
  return (
    <button className={'btn ' + (props.className ? props.className : '')}
      onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
