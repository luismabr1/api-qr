import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'
import reactDom from 'react-dom';
/* import Popup from 'reactjs-popup'; */
import 'reactjs-popup/dist/index.css';
import styles from "./index.module.css"

const Modal = ({data, show, onClose, children}) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const router = useRouter()
  const equipo = data


  useEffect(() => {
    setIsBrowser(true)
  }, [])


  const handleClose = (e) => {
/*     e.preventDefault() */
    onClose()
    window.location.replace('/');
    if(data){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ equipo_id:equipo })
      };
        fetch('https://server-qr.vercel.app/api/registros', requestOptions)
        .then(response => response.json())
        .then(data => console.log("Exito"));
        

    }

  }

  const modalContent = show ? (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.body}>{children}</div>
        <div className={styles.header}>
            <Link href="/" >
                <button onClick={handleClose} className={styles.btn}>  
                  <a>registrar</a> 
                </button>
            </Link>
        </div>
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