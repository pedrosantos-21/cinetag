import Banner from 'Components/Banner'
import Titulo from 'Components/Titulo'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'      
import styles from "./Player.module.css"
import NaoEncontrada from 'Pages/NaoEncontrada';

export default function Player() {
  const [video, setVideo] = useState();
  const parametros = useParams();// esse Hook vai pegar o valor da URL e jogar na variável

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/pedrosantos-21/cinetag-api/videos?id=${parametros.id}`)
      .then(resposta => resposta.json())
      .then(dados => {
        setVideo(...dados)
      })
  }, [])

  if (!video) {
    return <NaoEncontrada />
  }

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
