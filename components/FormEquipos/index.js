import { useState, useEffect } from "react";
import SubmitButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const FormEquipos = (props) =>{
    const listaModelos = props.modelos
    const listaMarcas = props.marcas 
    const listaUsuarios = props.usuarios
     const listaTipos = props.tipos 

  const [tipo,setTipo] = useState([]);
  const [usuario,setUsuario] = useState([]);
  const [modelo,setModelo] = useState([]);
  const [marca,setMarca] = useState([]);
  const [serial,setSerial] = useState([]);
  const [state, setState] = useState('idle');


  const handleEquipo = () => {
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

  return(
      <>

      <div className="main">

          <h1>Agregar Equipos</h1>
          <div className="CreatePost">
            <div className="uploadPost">
                <label>Usuario: </label>
                <div className="caja">
                    <select name="select" onChange={e => setUsuario(e.target.value)}>
                        <option key={0} defaultValue >--------Inserte nombre----------</option>
                        {listaUsuarios.map( user => {
                            console.log(user)
                                    return(
                                        <option key={user.id}value={user.id}>{user.nombre}</option>
                                    )
                                }   
                        )}
                    </select>
                </div>

                 <label>Marca: </label>
                <div className="caja">
                    <select name="select" onChange={e => setMarca(e.target.value)}>
                        {listaMarcas.map( marca => {
                            console.log(marca)
                                    return(
                                        <option key={marca.id}value={marca.id}>{marca.nombre}</option>
                                    )
                                }   
                        )}
                    </select>
                </div> 
               <label>Modelo: </label>
                <div className="caja">
                    <select name="select" onChange={e => setModelo(e.target.value)} >  
                        {listaModelos.map(modelo => {
                            console.log(modelo)
                                    return(
                                        <option key={modelo.id} value={modelo.id}>{modelo.nombre}</option>
                                    )
                                }   
                        )}

                    </select>
                </div> 
                 <label>Serial </label>
                <input className="inputText" type="text" onChange={(e)=>{
                    setSerial(e.target.value)
                }}/> 
                 <label>Tipo: </label>
                <div className="caja">
                    <select name="select" onChange={e => setTipo(e.target.value)}>
                        {listaTipos.map( tipo => {
                            console.log(tipo)
                                    return(
                                        <option key={tipo.id}value={tipo.id}>{tipo.nombre}</option>
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
