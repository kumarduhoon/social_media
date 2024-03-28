import React from 'react'
import './App.css'
import { Routes, Route, } from "react-router-dom"
import { Authhome } from './components'
import { Login } from "./components"
import Profile from './components/pages/Profile'
import About from './components/pages/About'
import Header from './components/header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { getuser } from "./redux/reducer/slices/auth/authSlice"

function App() {
  const { isAuthenticated } = useSelector((state) => (state.auth))
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (localStorage.getItem("userToken")) {
      dispatch(getuser());
    }
  })

  console.log(isAuthenticated, "app")
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
