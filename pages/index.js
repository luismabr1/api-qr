import Head from 'next/head'
import { useMemo } from "react";
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import QR from '../components/QReader'
import LogoModo from '../components/Logo.js'



const Home = () => {
  const qrRender = useMemo(()=>{
    return <QR/>
  })
  return (
    <>
      <Head>
        <title>MoDo QR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>

            <LogoModo  /> 
            {qrRender}

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
