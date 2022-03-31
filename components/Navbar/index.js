import Link from 'next/link'

const Navbar = () => {
    return(
        <nav>
            <Link href='/' >Usuarios</Link>
            <Link href='/'>Equipos</Link>
            <Link href='/'>Cargos</Link>
            <Link href='/'>Departamentos</Link>
        </nav> 
    )
}
export default Navbar;