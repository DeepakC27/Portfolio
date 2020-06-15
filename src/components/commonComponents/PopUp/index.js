import React from 'react'
import { Button } from '../'
import './index.scss'

export const PopUp = (props) => {
  return (
    <div show='true' className='modal' tabIndex='-1' role='dialog'>
    <div className='modal-dialog' role='document'>
      <div className='modal-content'>
        <div className='modal-header'>
          <h5 className='modal-title'>New Design in progress</h5>
        </div>
        <div className='modal-body'>
          Have moved on creating a new static webApp with different layout.
          New one is still in progress, still layout & content desgin can be viewed.
         </div>
        <div className='modal-footer'>
          <Button className='btn-outline' onClick={props.newWebRedirection}>
            <span>New Design</span>
          </Button>
          <Button className='btn-filled' onClick={props.close}>
            <span>Continue with the same</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PopUp
