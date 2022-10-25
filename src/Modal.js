import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Modal = () => {
  const yolGosterici=useNavigate()
  return(
    <div>
       <h2>Modal is open </h2>
       <i onClick={()=>yolGosterici("/")}><FaTimes/></i>
    </div>
  )
}

export default Modal
