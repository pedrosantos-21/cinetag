import Banner from 'Components/Banner'
import Card from 'Components/Card'
import Titulo from 'Components/Titulo'
import { useFavoritoContext } from 'Contextos/Favoritos'
import React from 'react'
import styles from "./Favoritos.module.css"

export default function Favoritos() {
  const { favorito } = useFavoritoContext();
  return (
    <>
    <Banner imagem="favoritos"/>
    <Titulo>
        <h1>Seus filmes favoritos</h1>
    </Titulo>
    <section className={styles.container}>
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id}/>
        })}
    </section>
    </>
  )
}
