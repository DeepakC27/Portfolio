import React from 'react'
import './index.scss'

function SectionContent(props) {
  return (
    <div className={'section-content-wrapper ' + (props.className ? props.className : '')}>
      {props.children}
    </div>
  )
}

export default SectionContent
