import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import FormDepartamentos from '../components/FormDepartamentos'
import ListasUsuarios from '../components/ListasUsuarios'


const Home = (props) => {
  /* manten el props fuera de llaves */
   console.log(typeof props)
  let prueba = props
   console.table(prueba.equipos)
   const users=prueba.usuarios
   const equipos=prueba.equipos
   const departamentos=prueba.departamentos
   const cargos=prueba.cargos 


  return (
    <>
      <Head>
        <title>MoDo QR</title>
      </Head>
      <AppLayout>
          <ListasUsuarios 
            users={users}
            equipos={equipos}
            departamentos={departamentos}
            cargos={cargos}
          />
          <FormDepartamentos
            departamentos={departamentos}
            cargos={cargos}
            equipo={equipos}
          />
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
  return { props: { usuarios, equipos, departamentos, cargos } };
}



export default Home;