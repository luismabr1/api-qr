import { colors } from '../styles/theme'
import FormLayout from '../components/FormLayout'
import SelectForm from '../components/SelectForm'


const Home = (props) => {
  /* manten el props fuera de llaves */
  console.log(props.usuarios)
   const users=props.usuarios
   console.log(users)
   const equipos=props.equipos
   const cargos=props.cargos 
/*   const departamentos=props.departamentos
   const registros=props.registros 
   const tipos=props.tipos
   const modelos=props.modelos 
   const marcas=props.marcas */

  return (
    <>
      <FormLayout
          users={users}
          equipos={equipos}
/*          departamentos={departamentos}*/
          cargos={cargos} 
      >

        <SelectForm           
          users={users}
          equipos={equipos}
          cargos={cargos} 
/*          departamentos={departamentos}
          registros={registros}
          marcas={marcas}
          modelos={modelos}
          tipos={tipos} */
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
  const [usuariosRes, equiposRes, cargosRes,/* departamentosRes,  registrosRes, marcasRes, modelosRes, tiposRes */] = await Promise.all([
    fetch('https://server-qr.vercel.app/api/user'), 
    fetch('https://server-qr.vercel.app/api/equipos'),
    fetch('https://server-qr.vercel.app/api/cargos'),
   /* fetch('https://modo-qr.vercel.app/listarDepartamentos'),
    fetch('https://modo-qr.vercel.app/listarRegistros'),
    fetch('https://modo-qr.vercel.app/listarMarcas'),
    fetch('https://modo-qr.vercel.app/listarModelos'),
    fetch('https://modo-qr.vercel.app/listarTipos') */
  ]);
  const [usuarios, equipos, cargos,/*, departamentos,  registros, marcas, modelos, tipos */] = await Promise.all([
    usuariosRes.json(), 
    equiposRes.json(),
    cargosRes.json(),
/*    departamentosRes.json(),
    registrosRes.json(),
    marcasRes.json(),
    modelosRes.json(),
    tiposRes.json() */
  ]);
  return { props: { usuarios, equipos, cargos, /*departamentos,  registros, marcas, modelos, tipos  */} };
}



export default Home;