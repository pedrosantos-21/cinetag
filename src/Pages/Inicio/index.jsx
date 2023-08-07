import React, { useEffect, useState } from 'react'
import Banner from 'Components/Banner'
import Card from 'Components/Card'
import Titulo from "Components/Titulo"
import styles from './Inicio.module.css'


export default function Inicio() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/pedrosantos-21/cinetag-api/videos')
      .then(resposta => resposta.json())
      .then(dados => {
        setVideos(dados)
      })
  }, [])

  return (
    <>
      <Banner imagem="home" />
      <Titulo>
        <h1> Um lugar para guardar seus videos e filmes! </h1>
      </Titulo>
      <section className={styles.container}>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />
        })}
      </section>
    </>
  )
}
