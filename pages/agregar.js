import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import FormEquipos from '../components/FormEquipos'
import Listas from '../components/Listas'


const Home = (props) => {
  /* manten el props fuera de comillas */
  console.table(props)
  return (
    <>
      <Head>
        <title>devter 🐦</title>
        <meta httpEquiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval' http://www.google.com"></meta>
      </Head>
      <AppLayout>
          <Listas data={props} />
          <FormEquipos />
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }
        div {
          margin-top: 16px;
          overflow: scroll;
        }
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.secondary};
          font-weight: 800;
          margin-bottom: 16px;
        }
        h2 {
          color: ${colors.primary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  )
}

export async function getStaticProps() {
  const [usuariosRes, equiposRes, departamentosRes, cargosRes] = await Promise.all([
    fetch('http://localhost:3001/listarUsuarios'), 
    fetch('http://localhost:3001/listarEquipos'),
    fetch('http://localhost:3001/listarDepartamentos'),
    fetch('http://localhost:3001/listarCargos'),
  ]);
  const [usuarios, equipos, departamentos, cargos] = await Promise.all([
    usuariosRes.json(), 
    equiposRes.json(),
    departamentosRes.json(),
    cargosRes.json()
  ]);
console.log(usuarios)
  return { props: { usuarios, equipos, departamentos, cargos } };
}



export default Home;