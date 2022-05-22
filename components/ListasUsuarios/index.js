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

        const handleLink = (id) => {
            setState('loading');
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ usuario_id:usuario, marca_id:marca, modelo_id:modelo, serial:serial, tipo_id:tipo})
              };
              fetch('https://api-qr-node.vercel.app/api/user', requestOptions)
                  .then(response => response.json())
                  .then(data => setEquipo(data.id));
        
                  setTimeout(() => {
                    setState('success');
                  }, 2000);
          }


    return (
        <>
            <nav>
                <label onClick={handleUsers}><Link href="#">Usuarios</Link></label>
                <label onClick={handleEquipos}><Link href="#">Equipos</Link></label>
                <label onClick={handleDepartamentos}><Link href="#">Departamentos</Link></label>
                <label onClick={handleCargos}><Link href="#">Cargos</Link></label>
            </nav>


            
            <div className={style.ContainerMiniList}>
                {show &&
                    <div className={style.Lista}>
                        {
                            lists.map(list => {
                                return(
                                    <div className={style.ItemLista}>
                                        <span key={list.id}>{list.nombre}</span> 
                                        <span><a href='#' onClik={handleLink(list.id)}>Edit</a></span>
                                        <span><a href="#" onClik={handleLink(list.id)}>Eliminar</a></span>
                                    </div>
                                )  
                                 
                        })
                        }
                    </div>

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