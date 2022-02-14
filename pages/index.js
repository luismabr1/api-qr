import {useEffect, useState} from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import { colors } from '../styles/theme'
import Button from '../components/Button'
import QR from '../components/QReader'


export default function Home() {
  const [user, setUser] = useState(undefined)
  
/*   useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGitHub().then(setUser).catch(err => {
      console.log(err)
    })
  } */

  return (
    <>

      <Head>
        <title>devter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src='/devter-logo.png' alt='Logo' />
          <h1>MoDO QR</h1>
          <h2>Scaner<br />for security 👩‍💻👨‍💻</h2>

          <div>

            <QR />
            
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
