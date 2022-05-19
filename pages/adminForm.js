
import { colors } from '../styles/theme'
import FormLayout from '../components/FormLayout'
import SelectForm from '../components/SelectForm'



const Home = (props) => {
  /* manten el props fuera de llaves */
  console.log(`Items ${props.usuarios.body}`)
  const users=props.usuarios.body
   const equipos=props.equipos.body
   const cargos=props.cargos.body
   const departamentos=props.departamentos.body
   const registros=props.registros.body
   const tipos=props.tipos.body
   const modelos=props.modelos.body
   const marcas=props.marcas.body

  return (
    <>
      <FormLayout
          users={users}
          equipos={equipos}
          departamentos={departamentos}
          cargos={cargos} 
      >
        <SelectForm           
          users={users}
          equipos={equipos}
          cargos={cargos} 
          departamentos={departamentos}
          registros={registros}
          marcas={marcas}
          modelos={modelos}
          tipos={tipos} 
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
  const [usuariosRes, equiposRes, cargosRes, departamentosRes,  registrosRes, marcasRes, modelosRes, tiposRes ] = await Promise.all([
    fetch('https://server-qr.vercel.app/api/user'), 
    fetch('https://server-qr.vercel.app/api/equipos'),
    fetch('https://server-qr.vercel.app/api/cargos'),
    fetch('https://server-qr.vercel.app/api/departamentos'),
    fetch('https://server-qr.vercel.app/api/registros'),
    fetch('https://server-qr.vercel.app/api/marcas'),
    fetch('https://server-qr.vercel.app/api/modelos'),
    fetch('https://server-qr.vercel.app/api/tipos'),
  ]);
  const [usuarios, equipos, cargos, departamentos, registros, marcas, modelos, tipos] = await Promise.all([
    usuariosRes.json(), 
    equiposRes.json(),
    cargosRes.json(),
    departamentosRes.json(),
    registrosRes.json(),
    marcasRes.json(),
    modelosRes.json(),
    tiposRes.json() 
  ]);
  return { props: { usuarios, equipos, cargos, departamentos, registros, marcas, modelos, tipos } };
}



export default Home;