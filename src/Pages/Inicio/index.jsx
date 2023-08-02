import React from 'react'
import Banner from '../../Components/Banner'
import Cabecalho from '../../Components/Cabecalho'
import Card from '../../Components/Card'
import Rodape from '../../Components/Rodape'
import Titulo from '../../Components/Titulo'

export default function Inicio() {
  return (

    <>
      <Cabecalho />
      <Banner imagem="home" />
      <Titulo>
        <h1> Um lugar para guardar seus videos e filmes! </h1>
      </Titulo>
      <Card id='1' titulo='Pedro lindão' capa='https://thecatapi.com/api/imagens/get?format=src&type=png'/>
      <Rodape />
    </>
  )
}
