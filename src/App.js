import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
   <BrowserRouter>
  
   <Routes>
      <Route path='/' element={<Home/>}>
          <Route path='' element={<Sidebar />}/>
      </Route> 

      {/* <Route path='/team' element={<Home/>}/>

      <Route path='/' element={<Home/>}/>

      // <Route path='/' element={<Home/>}/> */}


   </Routes>
   
   
   
   </BrowserRouter>

      
   
  )
}

export default App
