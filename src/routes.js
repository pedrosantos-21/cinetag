import Favoritos from 'Pages/Favoritos'
import NaoEncontrada from 'Pages/NaoEncontrada'
import PaginaBase from 'Pages/PaginaBase'
import Player from 'Pages/Player'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<PaginaBase />}>
              <Route index element={<Inicio />}></Route>
              <Route path="favoritos" element={<Favoritos />}></Route>
              <Route path=":id" element={<Player />}></Route>
              <Route path="*" element={<NaoEncontrada />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
