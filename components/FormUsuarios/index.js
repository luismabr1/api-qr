import { useState, useEffect } from "react";
import SubmitButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const FormUsuarios = (props) =>{
    const equipos = props.equipos
    const departamentos = props.departamentos
    const cargos=props.cargos 
  const [nombre,setNombre] = useState(props.editName);
  const [apellido,setApellido] = useState(props.editApellido);
  const [cedula,setCedula] = useState(props.editCedula);
  const [sexo,setSexo] = useState(props.editSexo);
  const [estado,setEstado] = useState(props.editEstado);
  const [departamento,setDepartamento] = useState(props.editDepartamento || ''); 
  const [equipo,setEquipo] = useState([]);
  const [cargo,setCargo] = useState(null); 
  const [state, setState] = useState('idle');


  const handleUsuario = () => {
    setState('loading');
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombre: nombre, apellido: apellido, cedula: cedula, sexo: sexo, departamento_id: departamento, equipo_id: equipo, cargo_id:cargo})
      };
      fetch('https://server-qr.vercel.app/api/usuarios', requestOptions)
          .then(response => response.json())
          .then(data => setEquipo(data.id));
          
          setTimeout(() => {
            setState('success');
          }, 2000);
  }

  return(
      <>

      <div className="main">
          <h1>Agregar usuarios</h1>
          <div className="CreatePost">
            <div className="uploadPost">
                <label>nombre: </label>
                <input className="inputText" type="text" min={3} required value={nombre} onChange={(e)=> {
                    setNombre(e.target.value)
                }}/>
                <label>apellido: </label>
                <input className="inputText" type="text" min={3} required value={apellido} onChange={(e)=>{
                    setApellido(e.target.value)
                }}/>
                <label>cedula: </label>
                <input className="inputText" type="text" min={5} required value={cedula} onChange={(e)=>{
                    setCedula(e.target.value)
                }}/>
                <label>Sexo: </label>
                <input className="inputText" type="text" min={1} required value={sexo} onChange={(e)=>{
                    setSexo(e.target.value)
                }}/>
                <label>Estado: </label>
                <input className="inputText" type="text" min={1} required value={estado} onChange={(e)=>{
                    setEstado(e.target.value)
                }}/>
              <label>departamento: </label>
           <div className="caja">
                    <select name="select" defaultValue={props.editDepartamento} onChange={e => setDepartamento(e.target.value)} >
{/*                     <option key={} value={department.id}>{department.nombre}</option> */}
                        {departamentos.map(department => {
                                    return(
                                        <option key={department.id} value={department.id}>{department.nombre}</option>
                                    )
                                }   
                        )}

                    </select>
                </div>  
                <label>Equipo: </label>
                <div className="caja">
                    <select name="select" defaultValue={props.editEquipo} onChange={e => setEquipo(e.target.value)} >
                    
                        {equipos.map(equipo => {
                                    return(
                                        <option key={equipo.id} value={equipo.id}>{equipo.serial}</option>
                                    )
                                }   
                        )}

                    </select>
                </div>
               <label>Cargo: </label>
                <div className="caja">
                    <select name="select" defaultValue={props.editCargo} onChange={e => setCargo(e.target.value)}>
                        {cargos.map( cargo => {
                                    return(
                                        <option key={cargo.id} value={cargo.id}>{cargo.nombre}</option>
                                    )
                                }   
                        )}
                    </select>
                </div> 

                <SubmitButton
                    buttonState={state}
                    onClick={handleUsuario}
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
  

export default FormUsuarios;
