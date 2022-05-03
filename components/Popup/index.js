import React, {useState, useEffect} from 'react';
import reactDom from 'react-dom';
/* import Popup from 'reactjs-popup'; */
import 'reactjs-popup/dist/index.css';
import styles from "./index.module.css"

const Modal = ({data, show, onClose, children}) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const equipo = data


  useEffect(() => {
    setIsBrowser(true)
    
  }, [])


  const handleClose = (e) => {
    e.preventDefault()
    onClose()
    if(data){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ equipo_id:equipo })
      };
        fetch('https://modo-qr.vercel.app/registros', requestOptions)
        .then(response => response.json())
        .then(data => console.log("Exito"));
    }

  }

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
            <a href="#" onClick={handleClose}>
              <button className='btn'>Registrar</button>
            </a>
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  ) : null;

    if(isBrowser){
      return reactDom.createPortal(
        modalContent,
        document.getElementById('modal-root')
      )
    }else{
      return null
    }
}
export default Modal