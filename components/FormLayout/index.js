import ListasUsuarios from '../ListasUsuarios'
import styles, {globalStyles} from './styles'

export default function FormLayout ({children, users, equipos, departamentos, cargos}) {
  console.table(departamentos)
  return (
    <>
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