import Link from 'next/link'
import { useState, useEffect } from 'react';


const ListasUsuarios = (props) => {
    const [lists, setLists] = useState(false)
    const [serial, setSerial] = useState([])
    const [show, setShow]= useState(false)
    const users = props.users
    const equipos = props.equipos
    console.log(props.equipos)
    const departamentos = props.departamentos
    const cargos = props.cargos

    const handleUsers = () =>{
         setLists(users)
         setShow(true)
        }
    const handleEquipos = () =>{
        setSerial(equipos)
        setShow(false)
        }
    const handleDepartamentos = () =>{
        setLists(departamentos)
        setShow(true)
           }
    const handleCargos = () =>{
        setLists(cargos)
        setShow(true)
        }
    return (
        <>
            <nav>
                <label onClick={handleUsers}><Link href="/ingresarUsuarios">Usuarios</Link></label>
                <label onClick={handleEquipos}><Link href="/ingresarEquipos">Equipos</Link></label>
                <label onClick={handleDepartamentos}><Link href="/ingresarDepartamentos">Departamentos</Link>s</label>
                <label onClick={handleCargos}><Link href="/ingresarCargos">Cargos</Link></label>
            </nav>
            <div className="mini-list">
                {show &&
                    <ul>
                        {lists.map(list => {
                            return(
                                <li key={list.id}> {list.nombre} </li>
                            )
                        }   
                )}         
                    </ul>  
                }

                {!show &&
                
                <ul>
                    {serial.map(list => {
                            return(
                                <li key={list.id}> {list.serial} </li>
                            )
                        }   
                    )}         
                </ul>
                
                }
            <main>
                {props.children}
            </main>

            </div>
        </>
    );
};


export default ListasUsuarios;


