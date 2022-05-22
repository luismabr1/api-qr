import { useState } from "react";
import SubmitButton from 'reactive-button';
import style from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faThumbsUp, faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const Login = () => {
    const [state, setState] = useState('idle');
    const [username, setUsername] = useState([])
    const [password, setPassword] = useState([])

    const handleLogin = () => {
        setState('loading');
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({username: username, password: password})
          };
          fetch('https://server-qr.vercel.app/api/auth/login', requestOptions)
              .then(response => response.json())
              .then(data => console.log(data));
              
              setTimeout(() => {
                setState('success');
              }, 2000);
      }

    return (
        <>
<div className={style.main}>
            <h1>Sign in</h1>
<div className={style.ContainerLogin}>
  <div className={style.Login}>
      <label>Usuario: </label>
      <input className={style.inputText} type="text" onChange={(e)=>{
          setUsername(e.target.value)
      }}/> 
       <label>Password: </label>
      <input className={style.inputText} type="password" onChange={(e)=>{
          setPassword(e.target.value)
      }}/> 

      
                    <SubmitButton
                    buttonState={state}
                    onClick={handleLogin}
                    color={'dark'}
                    idleText={'Login'}
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
    );
};

export default Login;