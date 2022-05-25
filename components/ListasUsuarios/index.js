import Link from 'next/link'
import { useState, useEffect } from 'react';
import ModalEdit from '../ModalEdit';
import ModalRemove from '../ModalRemove';


import style from './index.module.css'


const ListasUsuarios = (props) => {
    const [form, setForm] = useState();
    const [showModal, setShowModal] = useState(false)
    const [remove, setRemove] = useState()
    const [edit, setEdit] = useState()
    const [lists, setLists] = useState(props.users)
    const [serial, setSerial] = useState([])
    const [show, setShow]= useState(false)
    const users = props.users
    const equipos = props.equipos
    const departamentos = props.departamentos
    const cargos = props.cargos
    const marcas = props.cargos
    const modelos=props.modelos
    const tipos = props.cargos

    useEffect(() => {
        if(edit || remove){
            setShowModal(true)
        }
      }, [edit, remove])


    const handleUsers = () =>{
        setLists(users)
        setShow(true)
        setForm('USUARIOS')
    }
    const handleEquipos = () =>{
        setSerial(equipos)
        setShow(false)
        setForm('EQUIPOS')

    }
    const handleDepartamentos = () =>{
        setLists(departamentos)
        setShow(true)
        setForm('DEPARTAMENTOS')

    }
    const handleCargos = () =>{
        setLists(cargos)
        setShow(true)
        setForm('CARGOS')

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
                                    <div key={list.id} className={style.ContainerItemLista}>
                                        <div className={style.ContainerDataList}>
                                            <span >{list.nombre}</span> 
                                        </div>
                                        <label className={style.ItemLista} onClick={()=> setEdit(list.id)}><Link href="#">Edit</Link></label>
                                        <label className={style.ItemLista} onClick={()=> setRemove(list.id)}><Link href="#">Eliminar</Link></label>
                                    </div>
                                )  
                                 
                        })
                        }
                    </div>

                }

                {!show &&
                
                <div className={style.Lista}>
                    {serial.map(list => {
                            return(
                                    <div key={list.id} className={style.ContainerItemLista}>
                                        <div className={style.ContainerDataList}>
                                            <span >{list.serial}</span> 
                                        </div>
                                        <label className={style.ItemLista} onClick={()=> setEdit(list.id)}><Link href="#">Edit</Link></label>
                                        <label className={style.ItemLista} onClick={()=> setRemove(list.id)}><Link href="#">Eliminar</Link></label>
                                    </div>
                            )
                        }   
                    )}         
                </div>
                
                }

                {edit &&
                    <ModalEdit data={edit} show={showModal} users={users} equipos={equipos} departamentos={departamentos} cargos={cargos} marcas={marcas} modelos={modelos} tipos={tipos} form={form} onClose={()=> setShowModal(false)}>
                    </ModalEdit> 
                }

                {remove &&
                <ModalRemove data={remove} show={showModal} form={form} onClose={()=> setShowModal(false)}>
                    <h1>usuario eliminado</h1>
                </ModalRemove>
                }

                    <main>
                        {props.children}
                    </main>

            </div>
        </>
    );
};


export default ListasUsuarios;