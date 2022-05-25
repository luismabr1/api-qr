import { useState } from "react";
import styles from './tipos.module.css'  
import SubmitButton from 'reactive-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'


const FormTipos = (props) =>{  
  const [tipo, setTipos] = useState('');
  const [state, setState] = useState('idle');

  const handleTipos = async (props) => {
      setState('loading');
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({nombre: tipo})
      };

     await fetch('https://server-qr.vercel.app/api/tipos', requestOptions)
          .then(response => response.json())
          .then(data => setTipos(data.id));

          setTimeout(() => {
            setState('success');
          }, 2000);
  }


  return(
      <>
      <div className="main">

          <h1>Agregar Tipos</h1>

          <div className={styles.CreatePost}>
            <div className="uploadPost">
                <label>nombre: </label>
                <input className={styles.inputText} type="text" onChange={(e)=> {
                    setTipos(e.target.value)
                }}/>

<SubmitButton
          buttonState={state}
          onClick={handleTipos}
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
  

export default FormTipos;