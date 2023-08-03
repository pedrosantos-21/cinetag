import Cabecalho from 'Components/Cabecalho'
import Container from 'Components/Container'
import Rodape from 'Components/Rodape'
import Favoritos from 'Pages/Favoritos'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <Routes>
          <Route index="/" element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
        </Routes>
      </Container>
      <Rodape />
    </BrowserRouter>
  )
}
