import Link from 'next/link'
import { useState } from 'react';
import style from './index.module.css'


const ListasUsuarios = (props) => {
    const [lists, setLists] = useState(props.users)
    const [serial, setSerial] = useState([])
    const [show, setShow]= useState(false)
    const users = props.users
    const equipos = props.equipos
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
                <label onClick={handleUsers}><Link href="#">Usuarios</Link></label>
                <label onClick={handleEquipos}><Link href="#">Equipos</Link></label>
                <label onClick={handleDepartamentos}><Link href="#">Departamentos</Link></label>
                <label onClick={handleCargos}><Link href="#">Cargos</Link></label>
            </nav>


            
            <div className={style.miniList}>
                {show &&
                    <ul>
                        {
                            lists.map(list => {
                                return <li key={list.id}>{list.nombre}</li>  
                                 
                        })
                        }
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