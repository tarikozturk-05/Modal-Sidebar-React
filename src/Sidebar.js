import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Sidebar = ({setOpen,open}) => {
  // const [open, setOpen] = useState(false)
 const yolGosterici= useNavigate()
      
  
  return(
   
    <div>

        <div className="images">
          <img src={logo} alt="" />
          <i onClick={()=>setOpen(!open)}><FaTimes/></i>
       
        </div>

        <div>
          <ul>
          {links.map((item)=>{
            return(
              <li onClick={()=>yolGosterici(`${item.url}`)} key={item.id}>
                <Link to={item.url}> <i>{item.icon}</i> {item.text} </Link>
              </li>
            )
          })}
          </ul>
        </div>

        <div className="icons">
          {social.map((icons)=>{
            return(
              <a key={icons.id} href={icons.url}>{icons.icon}</a>
            )
          })}
        </div>

    </div>
  )





}

export default Sidebar
