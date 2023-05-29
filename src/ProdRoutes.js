import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Chats from './pages/Chats'

const ProdRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='chats' element={<Chats/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default ProdRoutes