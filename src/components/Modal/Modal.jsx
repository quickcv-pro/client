import React from 'react'
import './Modal.css'
import x from "./x.png"

const Modal = (props) => {
    return (
        <div id='donateModalBG'>
          <div id="donateModal">
            <div id='xButtonCont'><img src={x} alt="xbutton"  id='xIcon' onClick={props.closeModal}/></div>
            <div id='modalHeader'>{props.header}</div>
            <div id='donateOptionsCont'>

            </div>

          </div>
        </div>
      )
    }
export default Modal    