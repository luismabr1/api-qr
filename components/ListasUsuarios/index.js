import Link from 'next/link'
import { useState, useEffect } from 'react';


const ListasUsuarios = (props) => {
    const [lists, setLists] = useState(false)
    const [serial, setSerial] = useState(false)
    const [show, setShow]= useState(false)
    console.log(props.users)
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
                <label onClick={handleUsers}>Usuarios</label>
                <label onClick={handleEquipos}>Equipo</label>
                <label onClick={handleDepartamentos}>Departamentos</label>
                <label onClick={handleCargos}>Cargos</label>
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
            </div>
        </>
    );
};


export default ListasUsuarios;


