import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import QR from '../components/QReader'
import LogoModo from '../components/Logo.js'

const Home = ( props ) => {
  const usuarios= props.usuarios
  const cargos=props.cargos
  const departamentos = props.departamentos
  const modelos = props.modelos
  const marcas = props.marcas
  const tipos = props.tipos
  
  return (
    <>

      <Head>
        <title>MoDo QR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>

            <LogoModo />

            <QR
              usuarios={usuarios}
              cargos={cargos}
              departamentos={departamentos}
              modelos={modelos}
              marcas={marcas}
              tipos={tipos}
            />

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
          grid-gap:0px;
          place-content: center;
          place-items: center;
        }
        h1 {
          color: ${colors.modoNegro};
          font-weight: 800;
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
  const [usuariosRes, departamentosRes, cargosRes, modelosRes, marcasRes, tiposRes] = await Promise.all([
    fetch('http://192.185.225.58/listarUsuarios'), 
    fetch('http://192.185.225.58/listarDepartamentos'),
    fetch('http://192.185.225.58/listarCargos'),
    fetch('http://192.185.225.58/listarModelos'),
    fetch('http://192.185.225.58/listarMarcas'),
    fetch('http://192.185.225.58/listarTipos')

  ]);
  const [usuarios, departamentos, cargos, modelos, marcas, tipos] = await Promise.all([
    usuariosRes.json(), 
    departamentosRes.json(),
    cargosRes.json(),
    modelosRes.json(),
    marcasRes.json(),
    tiposRes.json()
  ]);
  return { props: { usuarios, departamentos, cargos, modelos, marcas, tipos} };
}