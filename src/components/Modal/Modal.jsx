import React from 'react'
import './Modal.css'
import x from "./assets/x.png"
import paymentOptions from './assets/paymentoptions'

const Modal = (props) => {
    return (
        <div id='donateModalBG'>
          <div id="donateModal">
            <div id='xButtonCont'><img src={x} alt="xbutton"  id='xIcon' onClick={props.closeModal}/></div>
            <div id='modalHeader'>{props.header}</div>
            <div id='donateOptionsCont'>
            {console.log(paymentOptions)}
           {paymentOptions.map((items)=>{
            <div className='meh'> hi</div>
           })} 
            </div>

          </div>
        </div>
      )
    }
export default Modal    