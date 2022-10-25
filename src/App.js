import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './pages/Home'

import Team from "./pages/Team";
import Calendar from "./pages/Calendar";
import Projects from "./pages/Projects";
import Documents from "./pages/Documents";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="modal" element={<Modal />} />
      </Route>

<Route path="/team" element={<Team />} />

<Route path="/calendar" element={<Calendar />} />
<Route path="/projects" element={<Projects />} />
<Route path="/documents" element={<Documents />} />

     

    

      
    </Routes>
  </BrowserRouter>
   
  )
}

export default App
