import { useState } from "react";
import SubmitButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const FormModelos = (props) =>{
const listaMarcas = props.marcas
  const [nombre,setNombre] = useState("");
  const [marca, setMarca] = useState("")
  const [state, setState] = useState('idle');

  const handleModelos = (props) => {
    setState('loading');
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombre: nombre, marca_id: marca})
      };
      fetch('https://server-qr.vercel.app/api/modelos', requestOptions)
          .then(response => response.json())
          .then(data => setMarca(data.id));
          setTimeout(() => {
            setState('success');
          }, 2000);
  }

  return(
      <>

      <div className="main">

          <h1>Agregar Modelos</h1>
          <div className="CreatePost">
            <div className="uploadPost">
                <label>Nombre: </label>
                <input className="inputText" type="text" onChange={(e)=> {
                    setNombre(e.target.value)
                }}/>

                <label>Marcas: </label>
                <div className="caja">
                    <select name="select" onChange={e => setMarca(e.target.value)} >
                        {listaMarcas.map(marca => {
                                    return(
                                        <option key={marca.id} value={marca.id}>{marca.nombre}</option>
                                    )
                                }   
                        )}

                    </select>
                </div>

                <SubmitButton
          buttonState={state}
          onClick={handleModelos}
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
  

export default FormModelos;