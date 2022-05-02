import { useState } from "react";
import styles from './marcas.module.css' 
import SubmitButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


const FormMarcas = (props) =>{  
  const [marca,setMarcas] = useState("");
  const [state, setState] = useState('idle');

  const handleMarcas = async (props) => {
      setState('loading');
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombre: marca})
      };

     await fetch('http://192.185.225.58/marcas', requestOptions)
          .then(response => response.json())
          .then(data => setMarcas(data.id));

          setTimeout(() => {
            setState('success');
          }, 2000);
  }


  return(
      <>
      <div className="main">

          <h1>Agregar Marcas</h1>

          <div className={styles.CreatePost}>
            <div className="uploadPost">
                <label>nombre: </label>
                <input className={styles.inputText} type="text" onChange={(e)=> {
                    setMarcas(e.target.value)
                }}/>

<SubmitButton
          buttonState={state}
          onClick={handleMarcas}
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
  

export default FormMarcas;