import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import FormEquipos from '../components/FormEquipos'


const Home = () => {

  return (
    <>

      <Head>
        <title>devter 🐦</title>
      </Head>

      <AppLayout>
          <FormEquipos />
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