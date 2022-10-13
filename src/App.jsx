import { useState } from 'react'
import logo from './logo.svg'
import { Route , Routes } from 'react-router-dom'
import { Navbar } from './component/navbar'
import './App.css'
import { Dashboard } from './component/dashboard'
import { Vaccinated } from './component/vaccinated'
import { Register } from './component/register'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/vaccinated" element={<Vaccinated />}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
