import Banner from 'Components/Banner'
import Titulo from 'Components/Titulo'
import React from 'react'
import { useParams } from 'react-router-dom'
import videos from 'json/db.json';
import styles from "./Player.module.css"

export default function Player() {
  const parametros = useParams();// esse Hook vai pegar o valor da URL e jogar na variável
  const video = videos.find((video) => {
    return video.id === Number(parametros.id);
  })
  return (
    <>
      <Banner imagem="player" />
      <Titulo>
        <h1> Player</h1>
      </Titulo>
      <section className={styles.container}>
        <iframe
          width="100%"
          height="100%"
          src={video.link}
          title={video.titulo}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web- 
          share"allowfullscreen></iframe>
      </section>
    </>
  )
}
