import {useEffect, useState} from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'


const AgregarEquipos = ( {posts} ) => {
  console.log(posts)
  return (
    <>

      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
<meta httpEquiv="content-type" content="text/html; charset=utf-8" />
      </Head>

      <AppLayout>
        <section>
          <h1>Listar </h1>
          <h2>Scaner<br />for security 👩‍💻👨‍💻</h2>

          <div>
            <ul>
              {posts.map(post =>(
                  <li key={post.id}> {post.nombre} </li>
              ))}         
            </ul>
            
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

export default AgregarEquipos;