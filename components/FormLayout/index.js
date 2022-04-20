import ListasUsuarios from '../ListasUsuarios'
import styles, {globalStyles} from './styles'

export default function FormLayout ({children}) {
  return (
    <>
      <div>
        <main>
          <ListasUsuarios/>
          {children}
        </main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>{globalStyles}</style>
    </>
  )
}