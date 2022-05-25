import { useState, useEffect } from "react";
import SubmitButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import style from './index.module.css'

const FormEquipos = (props) =>{
    const listaModelos = props.modelos
    const listaMarcas = props.marcas 
    const listaUsuarios = props.usuarios
    const listaTipos = props.tipos 

  const [tipo,setTipo] = useState([]);
  const [usuario,setUsuario] = useState(props.editUser);
  const [modelo,setModelo] = useState([]);
  const [marca,setMarca] = useState([]);
  const [serial,setSerial] = useState(props.editSerial);
  const [state, setState] = useState('idle');


  const handleEquipo = () => {
    setState('loading');
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ usuario_id:usuario, marca_id:marca, modelo_id:modelo, serial:serial, tipo_id:tipo})
      };
      fetch('https://server-qr.vercel.app/api/equipos', requestOptions)
          .then(response => response.json())
          .then(data => console.log(data.id));

          setTimeout(() => {
            setState('success');
          }, 2000);
  }

  return(
      <>

      <div className="main">

          <h1>Agregar Equipos</h1>
          <div className="CreatePost">
            <div className="uploadPost">
                <label>Usuario: </label>
                <div className="caja">
                    <select name="select" defaultValue={props.editUser} onChange={e => setUsuario(e.target.value)}>

                        {listaUsuarios.map( user => {
                            console.log(user)
                                    return(
                                        <option key={user.id}>{user.nombre}</option>
                                    )
                                }   
                        )}
                    </select>
                </div>

                 <label>Marca: </label>
                <div className="caja">
                    <select name="select" defaultValue={props.editMarca} onChange={e => setMarca(e.target.value)}>
                        {listaMarcas.map( marca => {
                                    return( 
                                        <option key={marca.id} >{marca.nombre}</option>
                                    )
                                }   
                        )}
                    </select>
                </div> 
               <label>Modelo: </label>
                <div className="caja">
                    <select name="select" defaultValue={props.editModelo} onChange={e => setModelo(e.target.value)} >  
                        {listaModelos.map(modelo => {
                                    return(
                                        <option key={modelo.modelo_id} >{modelo.nombre}</option>
                                    )
                                }   
                        )}

                    </select>
                </div> 
                 <label>Serial </label>
                <input className="inputText" min={3} required defaultValue={serial} type="text" onChange={(e)=>{
                    setSerial(e.target.value)
                }}/> 
                 <label>Tipo: </label>
                <div className="caja">
                    <select name="select" defaultValue={props.editTipo} onChange={e => setTipo(e.target.value)}>
                        {listaTipos.map( tipo => {
                                    return(
                                        <option key={tipo.id}>{tipo.nombre}</option>
                                    )
                                }   
                        )}
                    </select>
                </div> 

                
                <SubmitButton
                    buttonState={state}
                    onClick={handleEquipo}
                    color={'dark'}
                    idleText={'Cargar'}
                    loadingText={
                        <>
                        <FontAwesomeIcon icon={faCircleNotch} spin /> Cargando...
                        </>
                    }
                    successText={
                        <>
                        <FontAwesomeIcon icon={faThumbsUp} /> Cargado!
                        </>
                    }
                    errorText={
                        <>
                        <FontAwesomeIcon icon={faCircleExclamation} /> Error
                        </>
                    }
                    type={'button'}
                    className={'class1 class2'}
                    style={{
                        borderRadius: '5px',
                    }}
                    outline={false}
                    shadow={false}
                    rounded={false}
                    size={'large'}
                    block={false}
                    messageDuration={2000}
                    disabled={false}
                    buttonRef={null}
                    width={null}
                    height={null}
                    animation={true}
                    />
            </div>
          </div>
    </div>


      </>
  )

}
  

export default FormEquipos;
