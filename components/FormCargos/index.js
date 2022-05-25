import { useState } from "react";
import SubmitButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const FormCargos = (props) =>{
  console.log(props.editDepartamento)
const listaDepartamentos = props.departamentos
  const [nombre,setNombre] = useState("");
  const [cargo, setCargo] = useState("")
  const [departamento,setDepartamento] = useState([]);
  const [state, setState] = useState('idle');

  const handleCargos = (props) => {
    setState('loading');
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombre: nombre, departamento_id: departamento})
      };
      fetch('https://server-qr.vercel.app/api/cargos', requestOptions)
          .then(response => response.json())
          .then(data => setCargo(data.id));
          setTimeout(() => {
            setState('success');
          }, 2000);
  }

  return(
      <>

      <div className="main">

          <h1>Agregar cargos</h1>
          <div className="CreatePost">
            <div className="uploadPost">
                <label>nombre: </label>
                <input className="inputText" type="text" value={props.editName} onChange={(e)=> {
                    setNombre(e.target.value)
                }}/>

                <label>departamento: </label>
                <div className="caja">
                    <select name="select" defaultValue={props.editDepartamento} onChange={e => setDepartamento(e.target.value)} >

                      {
                        
                        listaDepartamentos.map(department => {
                                    return(
                                      <option key={department.id} value={department.id}>{department.nombre}</option>
                                    )
                                }   
                        )
                        
                      }

                    </select>
                </div>

                <SubmitButton
          buttonState={state}
          onClick={handleCargos}
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
          size={'normal'}
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
  

export default FormCargos;
