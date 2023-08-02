import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index="/" element={<Inicio/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}
