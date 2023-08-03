import Banner from 'Components/Banner'
import Card from 'Components/Card'
import Titulo from 'Components/Titulo'
import React from 'react'
import styles from "./Favoritos.module.css"

export default function Favoritos() {
  return (
    <>
    <Banner imagem="favoritos"/>
    <Titulo>
        <h1>Seus filmes favoritos</h1>
    </Titulo>
    <section className={styles.container}>
        <Card id="1" titulo='Pedro Lindão' capa="https://thecatapi.com/api/images/get?format=src&type=png"></Card>
    </section>
    </>
  )
}
