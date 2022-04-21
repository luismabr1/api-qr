import ListasUsuarios from '../ListasUsuarios'
import Head from 'next/head'
import styles, {globalStyles} from './styles'

export default function FormLayout ({children, users, equipos, departamentos, cargos}) {
  console.table(users)
  return (
    <>
      <Head>
        <title>MoDo QR</title>
      </Head>
      <div>
        <main>
          <ListasUsuarios
                users={users}
                equipos={equipos}
                departamentos={departamentos}
                cargos={cargos}
          />
          {children}
        </main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </>
  )
}