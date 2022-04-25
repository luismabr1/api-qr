import {useEffect, useState} from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import QR from '../components/QReader'
import Button from '../components/Button'


const Home = ( props ) => {
  const equipos=props.equipos
  const usuarios= props.usuarios
  const cargos=props.cargos
  const departamentos = props.departamentos
  return (
    <>

      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <h1>MoDO QR</h1>
          <h2>Scaner<br />for security 👩‍💻👨‍💻</h2>

          <div>
            <QR
              usuarios={usuarios}
              cargos={cargos}
              departamentos={departamentos}
            />
            
          </div>

        </section>
      </AppLayout>

      <style jsx>{`
        img {
          width: 120px;
        }
        div {
          margin-top: 16px;
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

export default Home;

export async function getStaticProps() {
  const [usuariosRes, equiposRes, departamentosRes, cargosRes] = await Promise.all([
    fetch('http://localhost:3001/listarUsuarios'), 
    fetch('http://localhost:3001/listarEquipos'),
    fetch('http://localhost:3001/listarDepartamentos'),
    fetch('http://localhost:3001/listarCargos')

  ]);
  const [usuarios, equipos, departamentos, cargos] = await Promise.all([
    usuariosRes.json(), 
    equiposRes.json(),
    departamentosRes.json(),
    cargosRes.json()
  ]);
  return { props: { usuarios, equipos, departamentos, cargos} };
}