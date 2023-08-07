import Cabecalho from 'Components/Cabecalho'
import Container from 'Components/Container'
import Rodape from 'Components/Rodape'
import FavoritosProvider from 'Contextos/Favoritos'
import Favoritos from 'Pages/Favoritos'
import NaoEncontrada from 'Pages/NaoEncontrada'
import Player from 'Pages/Player'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './Pages/Inicio'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Container>
        <FavoritosProvider>
        <Routes>
          <Route index="/" element={<Inicio />}></Route>
          <Route path="/favoritos" element={<Favoritos />}></Route>
          <Route path="/:id" element={<Player />}></Route>
          <Route path="*" element={<NaoEncontrada/>}></Route>
        </Routes>
        </FavoritosProvider>
      </Container>
      <Rodape />
    </BrowserRouter>
  )
}
