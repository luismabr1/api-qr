import React, {useEffect, useState} from 'react'
import FormLayout from '../components/FormLayout'
import { colors } from '../styles/theme'
import FormDepartamentos from '../components/FormDepartamentos'


const Home = (props) => {
  /* manten el props fuera de llaves */
   console.log(typeof props)
   const users=props.usuarios
   const equipos=props.equipos
   const departamentos=props.departamentos
   const cargos=props.cargos 


  return (
    <>
      <FormLayout
          users={users}
          equipos={equipos}
          departamentos={departamentos}
          cargos={cargos}
      >
          <FormDepartamentos
            users={users}
            departamentos={departamentos}
            cargos={cargos}
            equipo={equipos}
          />
      </FormLayout>

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