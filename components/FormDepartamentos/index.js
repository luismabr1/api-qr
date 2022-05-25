import { useState, useEffect } from "react";
import styles from './departamentos.module.css' 
import SubmitButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


const FormDepartamentos = (props) =>{  
  const [departamento,setDepartamento] = useState("");
  const [idDepartamento, setIdDepartamento] = useState()
  const [state, setState] = useState('idle');

  useEffect(() => {

        setIdDepartamento(props.idDepartamento)

  }, [idDepartamento])
  
  const handleDepartamentos = async (props) => {
      console.log(`handleDepartamentos ${idDepartamento}`)
      setState('loading');
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({id:idDepartamento, nombre: departamento, is_active:active})
      };

     await fetch('https://server-qr.vercel.app/api/departamentos', requestOptions)
          .then(response => response.json())
          .then(data => setDepartamento(data.id));

          setTimeout(() => {
            setState('success');
          }, 2000);
  }


  return(
      <>
      <div className="main">

          <h1>Agregar Departamentos</h1>

          <div className={styles.CreatePost}>
            <div className="uploadPost">
                <label>nombre: </label>
                <input className={styles.inputText} type="text" defaultValue={props.editName} onChange={(e)=> {
                    setDepartamento(e.target.value)
                }}/>

<SubmitButton
          buttonState={state}
          onClick={handleDepartamentos}
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
  

export default FormDepartamentos;
