import { useState } from "react";
import styles from './departamentos.module.css' 
import SubmitButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


const FormDepartamentos = (props) =>{  
  const [departamento,setDepartamento] = useState("");
  const [state, setState] = useState('idle');

  const handleDepartamentos = async (props) => {
      setState('loading');
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombre: departamento})
      };

     await fetch('https://api-qr-node.vercel.app/api/user', requestOptions)
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
                <input className={styles.inputText} type="text" value={departamento} onChange={(e)=> {
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
{/*                 <Button onClick={handleDepartamentos} name="Submit Departamentos"/> */}
                {/* <button onClick={handleDepartamentos}>Submit Departamentos</button> */}
            </div>
          </div>
    </div>


      </>
  )

}
  

export default FormDepartamentos;
