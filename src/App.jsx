import React from 'react'
import './App.css'
import { Routes, Route, } from "react-router-dom"
import { Authhome } from './components'
import { Login } from "./components"
import Profile from './components/pages/Profile'
import About from './components/pages/About'
import Header from './components/header/Header'

function App() {

  return (

    <>
      <Header />
      <Routes>
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/regitser'
          element={<Authhome />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
      </Routes>
    </>
  )
}

export default App
