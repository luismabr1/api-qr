import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import reactDom from 'react-dom';
import Popup from 'reactjs-popup'; 
import 'reactjs-popup/dist/index.css';
import styles from "./index.module.css"
import FormUsuarios from '../FormUsuarios';
import FormCargos from '../FormCargos';
import FormEquipos from '../FormEquipos';
import FormDepartamentos from '../FormDepartamentos';

const Modal = ({data, show, users, equipos, departamentos, cargos, marcas, modelos, tipos, onClose, form, children}) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const [user, setUser] = useState([])
  const dato = data


  useEffect(() => {
    setIsBrowser(true)
  }, [])


  const handleClose = (e) => {
    e.preventDefault() 
    onClose()
    console.log('CIERRO')
/*     if(data){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ equipo_id:equipo })
      };
        fetch('https://server-qr.vercel.app/api/registros', requestOptions)
        .then(response => response.json())
        .then(data => console.log("Exito"));
        

    } */

  }

  const FormRender = ( {form} ) => {
    switch (form) {
      case "DEPARTAMENTOS":
        return(
          departamentos.filter(departamento => {
            return departamento.id === dato; // place your actual check here
          }).map((departamento) => {
            return (
              <FormDepartamentos 
              key={dato}
              idDepartamento={12}
              editName={departamento.nombre}
              usuarios={users}
              marcas={marcas}
              tipos={tipos}
              />
            )
          })


        ) 
      case "EQUIPOS":
        return(
          equipos.filter(equipo => {
            return equipo.id === dato; // place your actual check here
          }).map((equipo) => {
            return (
              <FormEquipos
                key={dato}
                editUser={equipo.usuario_id}
                editMarca={equipo.marca_id}
                editModelo={equipo.modelo_id}
                editSerial={equipo.serial}
                editTipo={equipo.tipo_id}
                modelos={modelos} 
                marcas={marcas} 
                usuarios={users}
                tipos={tipos} 
             />

            )
          })
        ) 
      case "USUARIOS":
          console.log(`Aqui esta el user a equipo ${dato}`)
        return(

                users.filter(user => {
                  return user.id == dato; // place your actual check here
                }).map((user) => {
                  return (
                    <FormUsuarios 
                    key={dato}
                    editName={user.nombre}
                    editApellido={user.apellido}
                    editCedula={user.cedula}
                    editSexo={user.sexo}
                    editDepartamento={user.departamento_id}
                    editEquipo={user.equipo_id}
                    editCargo={user.cargo_id}
                    editEstado={user.is_active}
                    departamentos={departamentos} 
                    cargos={cargos} 
                    equipos={equipos}
                    />

                  )
                })
            
        )
       case "CARGOS":
         return(
           cargos.filter(cargo => {
             return cargo.id === dato; // place your actual check here
            }).map((cargo) => {
              return (
               <FormCargos 
               key={dato}
               editID={cargo.id}
               editName={cargo.nombre}
               editDepartamento={cargo.departamento_id} 
               departamentos={departamentos}
               cargos={cargos}
               equipos={equipos} 
               />
             )
           })
         )
/* 
      case "MARCAS":
        return <FormMarcas />;
      case "MODELOS":
        return <FormModelos 
            marcas={marcas}
        />;
      case "TIPOS":
        return <FormTipos />; */
      default:
        return null;
    }
  };

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.body}>
          {form &&
          <FormRender form={form}/> 

          }
          {children}</div>
        <div className={styles.header}>
            <Link href="/adminForm" >
                <button onClick={handleClose} className={styles.btn}>  
                  <a>Cerrar</a> 
                </button>
            </Link>
        </div>
      </div>
    </div>
  ) : null;

    if(isBrowser){
      return reactDom.createPortal(
        modalContent,
        document.getElementById('modal-root')
      )
    }else{
      return null
    }
}
export default Modal